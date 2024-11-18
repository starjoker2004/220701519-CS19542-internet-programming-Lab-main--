const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active")
});
loginBtn.addEventListener('click', () =>{
    container.classList.remove("active")
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    container.classList.add('fade-in'); // Add the fade-in class when the page loads
});
