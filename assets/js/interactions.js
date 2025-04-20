let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.classList.remove('scrolled');
    return;
  }
  
  if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
    // Scroll down
    header.classList.add('scrolled');
  } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
    // Scroll up
    header.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Add smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-transition');
}); 