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
    
    if (container.closest('[data-persist-choice="true"]')) {
      localStorage.setItem('viewPreference', view);
    }
  }

  const viewToggle = container.closest('.view-toggle');
  const persistChoice = viewToggle?.dataset.persistChoice === 'true';
  const defaultView = viewToggle?.dataset.defaultView || 'list';
  
  const savedView = persistChoice ? localStorage.getItem('viewPreference') : null;
  setView(savedView || defaultView);

  listBtn.addEventListener('click', (e) => setView('list', e));
  gridBtn.addEventListener('click', (e) => setView('grid', e));
}); 