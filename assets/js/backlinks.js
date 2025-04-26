document.addEventListener('DOMContentLoaded', function() {
  const expandButton = document.querySelector('.expand-backlinks');
  if (expandButton) {
    expandButton.addEventListener('click', function() {
      const hiddenBacklinks = document.querySelectorAll('.backlink-item.hidden');
      hiddenBacklinks.forEach(item => {
        item.classList.remove('hidden');
      });
      expandButton.style.display = 'none';
    });
  }
}); 