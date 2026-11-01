// Configure the WhatsApp number in international format, without +, spaces or punctuation.
// Example: 5511999999999. Replace this sample before publishing.
const WHATSAPP_NUMBER = '5511999999999';
const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;
document.querySelectorAll('[data-wa]').forEach((link) => {
  const message = link.dataset.message || 'Olá! Gostaria de saber mais sobre os serviços da Grambelle.';
  link.href = `${waBase}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
