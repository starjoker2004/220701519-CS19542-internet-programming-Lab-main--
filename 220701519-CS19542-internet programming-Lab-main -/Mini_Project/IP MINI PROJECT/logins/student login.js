document.addEventListener('DOMContentLoaded', function () {
    // Container fade-in effect
    const container = document.querySelector('.container');
    container.classList.add('fade-in');

    // Button click handling for switching between login and register
    const containerDiv = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        containerDiv.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        containerDiv.classList.remove("active");
    });

    // Sign in form submission with authentication
    document.getElementById('signin-form').onsubmit = async function (e) {
        e.preventDefault();
        const name = e.target.name.value; // Changed 'username' to 'name'
        const password = e.target.password.value;

        const response = await fetch('http://localhost:5000/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, password }) // Changed 'username' to 'name'
        });

        if (response.ok) {
            const data = await response.json();
            alert(`Signed in! Token: ${data.token}`);
            // Store the token if needed
            localStorage.setItem('token', data.token);
            setTimeout(function () {
                // Redirect to the student profile page after a short delay
                window.location.href = 'student profile.html';
            }, 500); // Delay for 0.5 seconds for animation effect
        } else {
            const error = await response.text();
            alert(`Error: ${error}`);
        }
    };

    // Sign up form submission
    document.getElementById('signup-form').onsubmit = async function (e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert('User created!');
        } else {
            const error = await response.text();
            alert(`Error: ${error}`);
        }
    };
});
