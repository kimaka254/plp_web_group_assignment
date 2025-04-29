
  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('#main-header'); 

    if (window.scrollY > hero.offsetHeight) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


  function animateCounter(el, target, duration) {
    let start = 0;
    let increment = target / (duration / 16); 
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        el.innerText = target;
        clearInterval(counter);
      } else {
        el.innerText = Math.floor(start);
      }
    }, 16);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-item h3");
    stats.forEach(stat => {
      const target = parseInt(stat.textContent);
      stat.textContent = "0";
      animateCounter(stat, target, 2000); 
    });
  });

  const btn = document.getElementById("backToTop");
  window.onscroll = () => {
    btn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
  };
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });


  