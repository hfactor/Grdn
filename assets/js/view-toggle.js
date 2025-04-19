document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.notes-container');
  const listBtn = document.querySelector('.view-toggle-btn.list-view');
  const gridBtn = document.querySelector('.view-toggle-btn.grid-view');
  
  if (!container || !listBtn || !gridBtn) {
    console.log('View toggle elements not found:', {
      container: !!container,
      listBtn: !!listBtn,
      gridBtn: !!gridBtn
    });
    return;
  }

  function setView(view, event) {
    // Prevent event from bubbling up
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log('Setting view to:', view);
    // Remove both classes first
    container.classList.remove('notes-list', 'notes-grid');
    // Add the new view class
    container.classList.add(`notes-${view}`);
    
    // Update button states
    listBtn.classList.toggle('active', view === 'list');
    gridBtn.classList.toggle('active', view === 'grid');
    
    // Store preference
    localStorage.setItem('viewPreference', view);
  }

  // Set initial view from localStorage or default to list
  const savedView = localStorage.getItem('viewPreference');
  setView(savedView || 'list');

  // Add click handlers with event parameter
  listBtn.addEventListener('click', (e) => {
    console.log('List view clicked');
    setView('list', e);
  });
  
  gridBtn.addEventListener('click', (e) => {
    console.log('Grid view clicked');
    setView('grid', e);
  });
}); 