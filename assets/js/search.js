document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.querySelector('.category-filter');
  const growthFilter = document.querySelector('.growth-filter');
  const noteItems = document.querySelectorAll('.note-item');
  
  // Debounce for better performance with many notes
  function debounceSearch(callback, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback.apply(this, args), wait);
    };
  }

  function updateResults() {
    const searchTerm = searchInput?.value.toLowerCase() || '';
    const selectedCategory = categoryFilter?.querySelector('.select-selected')?.dataset.value || '';
    const selectedGrowth = growthFilter?.querySelector('.select-selected')?.dataset.value || '';
    
    // Use requestAnimationFrame for smooth UI updates
    requestAnimationFrame(() => {
      noteItems.forEach(item => {
        const title = item.querySelector('.note-title a').textContent.toLowerCase();
        const category = item.dataset.category || '';
        const growth = item.dataset.growth || '';
        
        const matchesSearch = !searchTerm || title.includes(searchTerm);
        const matchesCategory = !selectedCategory || category.toLowerCase() === selectedCategory.toLowerCase();
        const matchesGrowth = !selectedGrowth || growth.toLowerCase() === selectedGrowth.toLowerCase();
        
        item.classList.toggle('hidden', !(matchesSearch && matchesCategory && matchesGrowth));
      });
    });
    
    // Update URL parameters only if enabled
    if (siteConfig.filters?.persistState) {
      const params = new URLSearchParams(window.location.search);
      const prefix = siteConfig.filters?.paramPrefix || '';
      
      [
        ['search', searchTerm],
        ['category', selectedCategory],
        ['growth', selectedGrowth]
      ].forEach(([key, value]) => {
        const paramKey = prefix + key;
        if (value) params.set(paramKey, value);
        else params.delete(paramKey);
      });
      
      const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
      if (siteConfig.filters?.updateHistory) {
        history.replaceState(null, '', newUrl);
      } else {
        window.location.hash = params.toString();
      }
    }
  }
  
  // Add event listeners with debouncing
  const handleSearch = debounceSearch(updateResults, 150);
  
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('change', function() {
      if (!this.value) updateResults();
    });
  }

  [categoryFilter, growthFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('select-change', function(e) {
        const selected = e.target.querySelector('.select-item.selected');
        if (selected) {
          const label = selected.querySelector('.item-label')?.textContent || selected.textContent;
          const value = selected.dataset.value;
          const selectedDisplay = this.querySelector('.select-selected');
          selectedDisplay.textContent = label;
          selectedDisplay.dataset.value = value;
        }
        updateResults();
      });
    }
  });
  
  // Initialize from URL parameters if enabled
  if (siteConfig.filters?.persistState) {
    const params = new URLSearchParams(window.location.search);
    const prefix = siteConfig.filters?.paramPrefix || '';
    
    if (params.has(prefix + 'search') && searchInput) {
      searchInput.value = params.get(prefix + 'search');
    }
    // ... initialize other filters from URL ...
  }
}); 