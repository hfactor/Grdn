document.addEventListener('DOMContentLoaded', function() {
  // Filter toggle
  const filterToggle = document.getElementById('filter-toggle');
  const filterBar = document.querySelector('.filter-bar');
  
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      filterBar.classList.toggle('expanded');
      // Update button text based on state
      const span = filterToggle.querySelector('span');
      if (filterBar.classList.contains('expanded')) {
        span.textContent = 'Filters';
      } else {
        span.textContent = 'Filters';
      }
    });

    // Close filters when clicking outside
    document.addEventListener('click', (e) => {
      if (!filterToggle.contains(e.target) && !filterBar.contains(e.target)) {
        filterBar.classList.remove('expanded');
        filterToggle.querySelector('span').textContent = 'Filters';
      }
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Initialize theme
  initializeTheme();

  // Initialize custom selects
  initCustomSelects();
});

function initCustomSelects() {
  document.querySelectorAll('.custom-select').forEach(select => {
    const selected = select.querySelector('.select-selected');
    const items = select.querySelector('.select-items');
    
    if (!selected || !items) return;

    selected.addEventListener('click', e => {
      e.stopPropagation();
      closeAllSelect(select);
      items.classList.toggle('select-show');
      selected.classList.toggle('select-arrow-active');
    });
    
    select.querySelectorAll('.select-item').forEach(item => {
      item.addEventListener('click', () => {
        const value = item.dataset.value;
        selected.textContent = item.textContent;
        selected.dataset.value = value;
        items.classList.remove('select-show');
        selected.classList.remove('select-arrow-active');
        
        // Remove previous selection
        select.querySelectorAll('.same-as-selected').forEach(el => {
          el.classList.remove('same-as-selected');
        });
        // Add new selection
        item.classList.add('same-as-selected');
        
        // Trigger change event for filters
        const event = new CustomEvent('select-change', { 
          detail: { value } 
        });
        select.dispatchEvent(event);
      });
    });
  });
  
  // Close selects when clicking outside
  document.addEventListener('click', closeAllSelect);
}

function closeAllSelect(elmnt) {
  const items = document.getElementsByClassName('select-items');
  const selected = document.getElementsByClassName('select-selected');
  
  Array.from(items).forEach(item => {
    if (elmnt?.contains(item.parentElement)) return;
    item.classList.remove('select-show');
  });
  
  Array.from(selected).forEach(sel => {
    if (elmnt?.contains(sel.parentElement)) return;
    sel.classList.remove('select-arrow-active');
  });
} 