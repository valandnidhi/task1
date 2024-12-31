    document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let isValid = true;

    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        alert('Full Name is required.');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (email === '' || !email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    const password = document.getElementById('password').value.trim();
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        isValid = false;
    }

    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    if (confirmPassword !== password) {
        alert('Passwords do not match.');
        isValid = false;
    }

    const dob = document.getElementById('dob').value.trim();
    if (!dob || age < 18) {
        alert('You must be at least 18 years old.');
        isvalid = false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Please select your gender.');
        isValid = false;
    }

    const country = document.getElementById('country').value;
    if (country === '') {
        alert('Please select your country.');
        isValid = false;
    }

    const terms = document.getElementById('terms').checked;
    if (!terms) {
        alert('You must agree to the terms and conditions.');
        isValid = false;
    }

    if (isValid) {
        alert('Registration Successful!');
    }
});
