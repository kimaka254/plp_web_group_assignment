
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('#main-header'); 

    if (window.scrollY > hero.offsetHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

