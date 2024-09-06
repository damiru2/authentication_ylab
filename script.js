document
  .querySelector('.loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
    } else {
      errorMessage.textContent = 'Invalid email or password';
    }
  });
