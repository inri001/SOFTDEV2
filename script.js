// Get elements
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const submitBtn = document.getElementById('submit-btn');
const mainContent = document.querySelector('main');
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');

// Set the correct credentials
const correctUsername = 'admin'; // Change this to your desired username
const correctPassword = '12345'; // Change this to your desired password

// Check if user is already logged in
if (localStorage.getItem('loggedIn') === 'true') {
    mainContent.style.display = 'block';
    loginForm.style.display = 'none';
}

// Handle login
submitBtn.addEventListener('click', () => {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        localStorage.setItem('loggedIn', 'true'); // Set login status
        mainContent.style.display = 'block'; // Show main content
        loginForm.style.display = 'none'; // Hide login form
    } else {
        alert('Incorrect username or password. Please try again.');
    }
});

// Handle logout
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn'); // Remove login status
    mainContent.style.display = 'none'; // Hide main content
    loginForm.style.display = 'block'; // Show login form
})