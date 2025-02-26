document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.querySelector('.category-filter');
  const growthFilter = document.querySelector('.growth-filter');
  const noteItems = document.querySelectorAll('.note-item');
  
  let searchTimeout;

  function debounceSearch(callback, wait) {
    return (...args) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => callback.apply(this, args), wait);
    };
  }

  function updateResults() {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const selectedCategory = categoryFilter?.querySelector('.select-selected')?.dataset.value || '';
    const selectedGrowth = growthFilter?.querySelector('.select-selected')?.dataset.value || '';
    
    noteItems.forEach(item => {
      const title = item.querySelector('.note-title a').textContent.toLowerCase();
      const category = item.dataset.category || '';
      const growth = item.dataset.growth || '';
      
      const matchesSearch = !searchTerm || title.includes(searchTerm);
      const matchesCategory = !selectedCategory || category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesGrowth = !selectedGrowth || growth.toLowerCase() === selectedGrowth.toLowerCase();
      
      if (matchesSearch && matchesCategory && matchesGrowth) {
        item.classList.remove('hidden');
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
        item.classList.add('hidden');
      }
    });
    
    // Update URL for sharing
    const params = new URLSearchParams(window.location.search);
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');  // Remove search param if empty
    }
    if (selectedCategory) {
      params.set('category', selectedCategory);
    } else {
      params.delete('category');  // Remove category param if "All Categories"
    }
    if (selectedGrowth) {
      params.set('growth', selectedGrowth);
    } else {
      params.delete('growth');  // Remove growth param if "All"
    }
    
    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    history.replaceState(null, '', newUrl);
  }
  
  const handleSearch = debounceSearch(() => {
    updateResults();
  }, 150);

  // Add event listeners
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    // Add event listener for search clearing
    searchInput.addEventListener('change', function() {
      if (!this.value) {
        updateResults();
      }
    });
  }

  // Listen for custom select changes
  [categoryFilter, growthFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('select-change', () => {
        updateResults();  // Immediate update when filter changes
      });
    }
  });
  
  // Initialize from URL params and show all items if no filters
  const params = new URLSearchParams(window.location.search);
  if (params.toString()) {
    if (searchInput && params.has('search')) {
      searchInput.value = params.get('search');
    }
    if (categoryFilter && params.has('category')) {
      const value = params.get('category');
      const selected = categoryFilter.querySelector('.select-selected');
      const item = categoryFilter.querySelector(`.select-item[data-value="${value}"]`);
      if (selected && item) {
        selected.textContent = item.textContent;
        selected.dataset.value = value;
      }
    }
    if (growthFilter && params.has('growth')) {
      const value = params.get('growth');
      const selected = growthFilter.querySelector('.select-selected');
      const item = growthFilter.querySelector(`.select-item[data-value="${value}"]`);
      if (selected && item) {
        selected.textContent = item.textContent;
        selected.dataset.value = value;
      }
    }
    updateResults();
  } else {
    // Show all items if no filters
    noteItems.forEach(item => {
      item.classList.remove('hidden');
      item.classList.add('visible');
    });
  }
}); 