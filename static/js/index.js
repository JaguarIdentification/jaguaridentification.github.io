// Minimal JS for the project page

document.addEventListener('DOMContentLoaded', () => {
  // Navbar burger toggle (Bulma mobile menu)
  const burgers = document.querySelectorAll('.navbar-burger');
  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const target = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      if (target) target.classList.toggle('is-active');
    });
  });
});
