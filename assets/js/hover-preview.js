document.addEventListener('DOMContentLoaded', () => {
  const previewEl = document.getElementById('hover-preview');
  if (!previewEl) return;

  let hideTimeout;
  const previewDelay = parseInt(previewEl.dataset.delay || '300');

  function showPreview(link) {
    try {
      const noteData = JSON.parse(link.dataset.note || '{}');
      if (!noteData.title) return;

      clearTimeout(hideTimeout);

      // Update content
      previewEl.querySelector('.preview-title').textContent = noteData.title;
      
      const dateEl = previewEl.querySelector('.preview-date');
      const categoryEl = previewEl.querySelector('.preview-category');
      const excerptEl = previewEl.querySelector('.preview-excerpt');
      
      if (dateEl && noteData.date) {
        dateEl.textContent = noteData.date;
      }
      
      if (categoryEl && noteData.category) {
        categoryEl.textContent = noteData.category;
      }
      
      if (excerptEl && noteData.excerpt) {
        excerptEl.textContent = noteData.excerpt;
      }

      // Position the preview
      const rect = link.getBoundingClientRect();
      let left = rect.left;
      let top = window.scrollY + rect.bottom + 10;

      // Adjust position if it would go off-screen
      if (left + 300 > window.innerWidth) {
        left = window.innerWidth - 310;
      }

      previewEl.style.top = `${top}px`;
      previewEl.style.left = `${left}px`;

      // Show the preview
      previewEl.classList.add('visible');
    } catch (e) {
      // Silently handle errors without logging
    }
  }

  function hidePreview() {
    hideTimeout = setTimeout(() => {
      previewEl.classList.remove('visible');
    }, 200);
  }

  // Add listeners to all internal links with data-note attribute
  document.querySelectorAll('a[data-note]').forEach(link => {
    let showTimeout;
    
    link.addEventListener('mouseenter', () => {
      clearTimeout(showTimeout);
      showTimeout = setTimeout(() => showPreview(link), previewDelay);
    });

    link.addEventListener('mouseleave', () => {
      clearTimeout(showTimeout);
      hidePreview();
    });
  });

  // Prevent preview from disappearing when hovering over it
  previewEl.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  previewEl.addEventListener('mouseleave', hidePreview);
}); 