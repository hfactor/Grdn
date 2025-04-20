// Single DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Filter toggle functionality
  const filterToggle = document.getElementById('filter-toggle');
  const filterBar = document.querySelector('.filter-bar');
  
  if (filterToggle && filterBar) {
    const filterBackdrop = document.querySelector('.filter-backdrop');
    
    filterToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      filterBar.classList.toggle('active');
      filterBackdrop?.classList.toggle('active');
      document.body.style.overflow = filterBar.classList.contains('active') ? 'hidden' : '';
    });

    // Close on backdrop click
    filterBackdrop?.addEventListener('click', () => {
      filterBar.classList.remove('active');
      filterBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Initialize custom select dropdowns
  document.querySelectorAll('.custom-select').forEach(select => {
    const selected = select.querySelector('.select-selected');
    const items = select.querySelector('.select-items');
    const filterType = select.getAttribute('data-filter-type');

    if (!selected || !items || !filterType) return;

    // Toggle dropdown visibility
    selected.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      // Close other dropdowns
      document.querySelectorAll('.custom-select').forEach(otherSelect => {
        if (otherSelect !== select) {
          otherSelect.querySelector('.select-items')?.classList.remove('select-show');
          otherSelect.querySelector('.select-selected')?.classList.remove('select-arrow-active');
        }
      });

      // Toggle current dropdown
      items.classList.toggle('select-show');
      selected.classList.toggle('select-arrow-active');
    });

    // Handle item selection
    items.querySelectorAll('.select-item').forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const value = this.getAttribute('data-value');
        const label = this.querySelector('.item-label');
        const text = label ? label.textContent : this.textContent;

        // Update selected text and state
        selected.textContent = text;
        selected.setAttribute('data-value', value);

        // Update selected state
        items.querySelectorAll('.select-item').forEach(i => i.classList.remove('selected'));
        this.classList.add('selected');

        // Hide dropdown
        items.classList.remove('select-show');
        selected.classList.remove('select-arrow-active');

        // Update URL and trigger filter
        updateURLParameter(filterType, value);
      });
    });
  });

  // Add this new function to sync UI with URL parameters
  function syncUIWithURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // Sync category filter
    const categorySelect = document.querySelector('.category-filter');
    if (categorySelect) {
      const categoryValue = urlParams.get('category');
      if (categoryValue) {
        const categoryItem = categorySelect.querySelector(`[data-value="${categoryValue}"]`);
        if (categoryItem) {
          const text = categoryItem.querySelector('.item-label')?.textContent || categoryItem.textContent;
          const selected = categorySelect.querySelector('.select-selected');
          selected.textContent = text;
          selected.setAttribute('data-value', categoryValue);
          categoryItem.classList.add('selected');
        }
      }
    }

    // Sync growth filter
    const growthSelect = document.querySelector('.growth-filter');
    if (growthSelect) {
      const growthValue = urlParams.get('growth');
      if (growthValue) {
        const growthItem = growthSelect.querySelector(`[data-value="${growthValue}"]`);
        if (growthItem) {
          const text = growthItem.querySelector('.item-label')?.textContent || growthItem.textContent;
          const selected = growthSelect.querySelector('.select-selected');
          selected.textContent = text;
          selected.setAttribute('data-value', growthValue);
          growthItem.classList.add('selected');
        }
      }
    }
  }

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
      document.querySelectorAll('.select-items').forEach(items => {
        items.classList.remove('select-show');
      });
      document.querySelectorAll('.select-selected').forEach(selected => {
        selected.classList.remove('select-arrow-active');
      });
    }
  });

  // Initialize filters and sync UI on page load
  syncUIWithURLParams();
  updateFilters();
});

// Update filters function
function updateFilters() {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedCategory = urlParams.get('category');
  const selectedGrowth = urlParams.get('growth');
  const searchQuery = urlParams.get('q');

  console.log('Applying filters:', { selectedCategory, selectedGrowth, searchQuery }); // Debug log

  document.querySelectorAll('.note-item').forEach(item => {
    let show = true;
    
    if (selectedCategory && selectedCategory !== 'all') {
      const itemCategory = item.getAttribute('data-category');
      if (itemCategory !== selectedCategory) {
        show = false;
      }
    }
    
    if (selectedGrowth && selectedGrowth !== 'all') {
      const itemGrowth = item.getAttribute('data-growth');
      if (itemGrowth !== selectedGrowth) {
        show = false;
      }
    }
    
    if (searchQuery) {
      const title = item.querySelector('.note-item-title')?.textContent.toLowerCase() || '';
      if (!title.includes(searchQuery.toLowerCase())) {
        show = false;
      }
    }
    
    item.style.display = show ? '' : 'none';
  });

  // Update counters if needed
  updateFilterCounts();
}

// Add function to update filter counts
function updateFilterCounts() {
  const visibleItems = document.querySelectorAll('.note-item[style=""]').length;
  const totalCount = document.querySelector('.total-count');
  if (totalCount) {
    totalCount.textContent = visibleItems;
  }
}

// Helper function to update URL parameters
function updateURLParameter(key, value) {
  if (!key) return;
  
  const urlParams = new URLSearchParams(window.location.search);
  
  if (!value || value === '' || value === 'all') {
    urlParams.delete(key);
  } else {
    urlParams.set(key, value);
  }
  
  const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
  
  // Trigger filter update
  updateFilters();
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  updateFilters();
});