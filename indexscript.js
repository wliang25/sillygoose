document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('login-form');
  const passwordInput = document.getElementById('password');
  const usernameInput = document.getElementById('username');

  form.addEventListener('submit', (event) => {
      const usernameValue = usernameInput.value;
      const requiredUsername = 'sillygoose';
      if (usernameValue !== requiredUsername) {
        event.preventDefault();
        alert('Incorrect username bb gurl. Please try again.');
      }      
      const passwordValue = passwordInput.value;
      const requiredPassword = '06191997';
      console.log(passwordValue);
      if (passwordValue !== requiredPassword) {
          event.preventDefault(); // Prevent form submission
          alert('Incorrect password bb gurl. Please try again.');
      }
  });
});