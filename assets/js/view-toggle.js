document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.notes-container');
  const listBtn = document.querySelector('.view-toggle-btn.list-view');
  const gridBtn = document.querySelector('.view-toggle-btn.grid-view');
  
  if (!container || !listBtn || !gridBtn) {
    return;
  }

  function setView(view, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    container.classList.remove('notes-list', 'notes-grid');
    container.classList.add(`notes-${view}`);
    
    listBtn.classList.toggle('active', view === 'list');
    gridBtn.classList.toggle('active', view === 'grid');
    
    localStorage.setItem('viewPreference', view);
  }

  const savedView = localStorage.getItem('viewPreference');
  setView(savedView || 'list');

  listBtn.addEventListener('click', (e) => setView('list', e));
  gridBtn.addEventListener('click', (e) => setView('grid', e));
}); 