document.addEventListener('DOMContentLoaded', () => {
  console.log('Filter script loaded'); // Debug log

  // Elements
  const filterToggle = document.querySelector('.filter-toggle-button');
  const filterDropdown = document.querySelector('.filter-dropdown');
  const filterOptions = document.querySelectorAll('.filter-option');
  const viewButtons = document.querySelectorAll('[data-view]');
  const notesList = document.querySelector('.notes-list');
  const searchInput = document.querySelector('.search-input');

  // State
  let activeFilters = {
    category: 'all',
    growth: 'all'
  };

  console.log('Elements found:', { filterToggle, filterDropdown }); // Debug log

  // Toggle dropdown
  if (filterToggle && filterDropdown) {
    console.log('Setting up filter toggle'); // Debug log
    
    filterToggle.setAttribute('aria-expanded', 'false');
    filterDropdown.hidden = true;

    // Toggle dropdown when clicking button
    filterToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      filterDropdown.hidden = !filterDropdown.hidden;
      console.log('Toggle clicked', { hidden: filterDropdown.hidden }); // Debug
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!filterToggle.contains(e.target) && !filterDropdown.contains(e.target)) {
        filterDropdown.hidden = true;
      }
    });
  }

  // Filter functionality
  if (filterOptions) {
    console.log('Setting up filter options'); // Debug log
    
    filterOptions.forEach(option => {
      option.addEventListener('click', () => {
        // Determine filter type (category or growth)
        const isCategory = option.hasAttribute('data-filter');
        const type = isCategory ? 'category' : 'growth';
        const value = isCategory ? option.dataset.filter : option.dataset.growth;
        
        // Update active state in the same section
        const section = option.closest('.filter-options');
        section.querySelectorAll('.filter-option').forEach(opt => {
          opt.classList.remove('active');
        });
        option.classList.add('active');
        
        // Update state
        activeFilters[type] = value;
        
        // Apply filters
        applyFilters();
      });
    });
  }

  // Search functionality
  if (searchInput) {
    console.log('Setting up search input'); // Debug log
    
    searchInput.addEventListener('input', debounce(() => {
      applyFilters();
    }, 300));
  }

  // View toggle
  if (viewButtons && notesList) {
    console.log('Setting up view toggle'); // Debug log
    
    viewButtons.forEach(button => {
      button.addEventListener('click', () => {
        const view = button.dataset.view;
        
        // Update buttons
        viewButtons.forEach(btn => {
          btn.classList.toggle('active', btn === button);
        });
        
        // Update view
        notesList.setAttribute('data-view', view);
        localStorage.setItem('preferred-view', view);
      });
    });
  }

  // Apply all filters
  function applyFilters() {
    console.log('Applying filters'); // Debug log
    
    const searchTerm = (searchInput?.value || '').toLowerCase();
    const notes = document.querySelectorAll('.note-item');
    
    notes.forEach(note => {
      const noteCategory = note.dataset.category || 'all';
      const noteGrowth = note.dataset.growth || 'all';
      const noteTitle = note.querySelector('.note-title')?.textContent.toLowerCase() || '';
      
      const matchesCategory = activeFilters.category === 'all' || noteCategory === activeFilters.category;
      const matchesGrowth = activeFilters.growth === 'all' || noteGrowth === activeFilters.growth;
      const matchesSearch = !searchTerm || noteTitle.includes(searchTerm);
      
      note.style.display = (matchesCategory && matchesGrowth && matchesSearch) ? '' : 'none';
    });
  }

  // Debounce helper
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize view from localStorage
  const savedView = localStorage.getItem('preferred-view');
  if (savedView) {
    const button = document.querySelector(`[data-view="${savedView}"]`);
    button?.click();
  }
}); 