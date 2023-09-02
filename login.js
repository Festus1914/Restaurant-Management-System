// script.js
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Handle form submission (you can add your own logic here)
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your login logic here
    alert('Login form submitted!');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your signup logic here
    alert('Signup form submitted!');
});
