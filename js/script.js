const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.addEventListener('click', (event) => {
	if (event.target.matches('a')) {
		navLinks.classList.remove('is-open');
		menuToggle.setAttribute('aria-expanded', 'false');
	}
});

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = new FormData(contactForm).get('name');
	formStatus.textContent = `Obrigada pela mensagem, ${name}! Este formulário está em modo de demonstração.`;
	contactForm.reset();
});
