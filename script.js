const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
toggle?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
});
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  mobileNav.setAttribute('aria-hidden', 'true');
}));

document.querySelectorAll('.question-list button').forEach((item) => item.addEventListener('click', () => {
  item.classList.toggle('selected');
  item.querySelector('span').textContent = item.classList.contains('selected') ? '−' : '+';
}));

const form = document.querySelector('#contact-form');
const result = document.querySelector('.form-success');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  result.textContent = 'Спасибо! Демонстрационная заявка сформирована. Перед публикацией добавьте телефон, почту или ссылку на мессенджер специалиста.';
  result.style.display = 'block';
  form.reset();
});
