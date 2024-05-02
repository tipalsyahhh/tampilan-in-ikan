function toggleForms() {
var loginForm = document.querySelector('.from-login');
var registerForm = document.querySelector('.from-register');

loginForm.classList.add('hidden');
registerForm.classList.remove('hidden');
}