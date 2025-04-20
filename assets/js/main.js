document.addEventListener('DOMContentLoaded', function() {
  // Filter toggle
  const filterToggle = document.getElementById('filter-toggle');
  const filterBar = document.querySelector('.filter-bar');
  const filterBackdrop = document.querySelector('.filter-backdrop');
  const filterClose = document.querySelector('.filter-mobile-close');
  
  function closeFilter() {
    filterBar.classList.remove('active');
    filterBackdrop?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openFilter() {
    filterBar.classList.add('active');
    filterBackdrop?.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent body scroll on mobile
  }

  if (filterToggle && filterBar) {
    filterToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (filterBar.classList.contains('active')) {
        closeFilter();
      } else {
        openFilter();
      }
    });

    // Mobile close button
    filterClose?.addEventListener('click', closeFilter);
    
    // Backdrop click
    filterBackdrop?.addEventListener('click', closeFilter);

    // Close when clicking outside on desktop
    document.addEventListener('click', (e) => {
      if (window.innerWidth > 768) { // Only for desktop
        if (!filterBar.contains(e.target) && !filterToggle.contains(e.target)) {
          closeFilter();
        }
      }
    });
  }

  // Search functionality
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      filterContent();
    }, 300));
  }

  // Custom Select Initialization
  const customSelects = document.querySelectorAll('.custom-select');
  customSelects.forEach(select => {
    const selected = select.querySelector('.select-selected');
    const items = select.querySelector('.select-items');

    if (selected && items) {
      selected.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('select-arrow-active');
        items.classList.toggle('select-show');
      });

      const selectItems = items.querySelectorAll('.select-item');
      selectItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.stopPropagation();
          
          // Remove selected class from all items
          selectItems.forEach(i => i.classList.remove('selected'));
          // Add selected class to clicked item
          this.classList.add('selected');
          
          const label = this.querySelector('.item-label')?.textContent || this.textContent;
          selected.textContent = label;
          selected.dataset.value = this.dataset.value;
          
          items.classList.remove('select-show');
          selected.classList.remove('select-arrow-active');
          
          // Call filterContent when selection changes
          filterContent();
        });
      });
    }
  });

  // Close selects when clicking outside
  document.addEventListener('click', function() {
    const items = document.querySelectorAll('.select-items');
    const selected = document.querySelectorAll('.select-selected');
    items.forEach(item => item.classList.remove('select-show'));
    selected.forEach(sel => sel.classList.remove('select-arrow-active'));
  });

  // Initialize theme
  initializeTheme();
});

function filterContent() {
  const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
  const selectedCategory = document.querySelector('.category-filter .select-selected')?.dataset.value || '';
  const selectedGrowth = document.querySelector('.growth-filter .select-selected')?.dataset.value || '';
  
  const items = document.querySelectorAll('.note-item');
  
  items.forEach(item => {
    const title = item.querySelector('.note-title')?.textContent.toLowerCase() || '';
    const excerpt = item.querySelector('.note-excerpt')?.textContent.toLowerCase() || '';
    const itemCategory = item.dataset.category || '';
    const itemGrowth = item.dataset.growth || '';

    const matchesSearch = !searchTerm || 
      title.includes(searchTerm) || 
      excerpt.includes(searchTerm);

    const matchesCategory = !selectedCategory || itemCategory === selectedCategory;
    const matchesGrowth = !selectedGrowth || itemGrowth === selectedGrowth;

    item.style.display = (matchesSearch && matchesCategory && matchesGrowth) ? '' : 'none';
  });

  // Update URL
  const params = new URLSearchParams(window.location.search);
  if (searchTerm) params.set('search', searchTerm);
  else params.delete('search');
  if (selectedCategory) params.set('category', selectedCategory);
  else params.delete('category');
  if (selectedGrowth) params.set('growth', selectedGrowth);
  else params.delete('growth');

  const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
  history.replaceState(null, '', newUrl);
}

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

function initializeTheme() {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
} 