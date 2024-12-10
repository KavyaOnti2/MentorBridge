document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const role = document.getElementById('role').value;
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (fullName && email && password) {
      alert(`Thank you for registering, ${fullName}! You are registered as a ${role}.`);
      window.location.href = 'mentor-profile.html';
  } else {
      alert('Please fill in all the required fields.');
  }
});
