document.addEventListener('DOMContentLoaded', () => {
  const folderLinks = document.querySelectorAll('.folder');

  folderLinks.forEach(folder => {
    const subnav = folder.querySelector('.subnav');

    folder.addEventListener('mouseenter', () => {
      if (subnav) {
        subnav.style.display = 'block';
      }
    });

    folder.addEventListener('mouseleave', () => {
      if (subnav) {
        subnav.style.display = 'none';
      }
    });
  });

  // Mobile menu toggle (if needed)
  const mobileToggle = document.getElementById('mobileMenuLink');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const nav = document.getElementById('topNav');
      if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      }
    });
  }
});
