document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  const usernameInput = document.getElementById('username');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameValue = usernameInput.value;
    const requiredUsername = 'sillygoose';
    let submit = true;
    if (usernameValue !== requiredUsername) {
      alert('Incorrect username bb gurl. Please try again.');
      submit = false;
    }      
    const passwordValue = passwordInput.value;
    const requiredPassword = '06191997';
    if (passwordValue !== requiredPassword) {
      alert('Incorrect password bb gurl. Please try again.');
      submit = false;
    }
    if (submit) window.location.href = 'sillygoose.html';
  });
});