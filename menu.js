const crossButton = document.querySelector('.close-btn');
const mobileMenuOverlay = document.querySelector('.mobile-menu');
const navHamIcon = document.querySelector('.hamburger');
const mobileMenuLinks = document.querySelectorAll('.menu-item-link > a');

navHamIcon.addEventListener('click', () => {
  mobileMenuOverlay.style.right = '0';
  mobileMenuOverlay.style.display = 'flex';
});

crossButton.addEventListener('click', () => {
  mobileMenuOverlay.style.right = '100%';
  mobileMenuOverlay.style.display = 'none';
});

mobileMenuLinks.forEach((mobileMenuLink) => {
  mobileMenuLink.addEventListener('click', () => {
    mobileMenuOverlay.style.right = '100%';
    mobileMenuOverlay.style.display = 'none';
  });
});