const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navbar');
const navLinks1 = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
  navLinks1.classList.toggle('active');
});
