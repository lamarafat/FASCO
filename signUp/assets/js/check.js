document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    const errorMessage = document.getElementById('error-message');

    if (signUpForm && errorMessage) {
        signUpForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password').value;
            const verifyPassword = document.getElementById('verifyPassword').value;

            if (password !== verifyPassword) {
                event.preventDefault();
                errorMessage.textContent = "Passwords do not match.";
                errorMessage.style.display = "block";
                return;
            }
            if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
                event.preventDefault();
                errorMessage.textContent = "Password must be at least 8 characters long and include a number and an uppercase letter.";
                errorMessage.style.display = "block";
                return;
            }

            errorMessage.style.display = "none"; 
        });
    } else {
        console.error("Form or error message element not found!");
    }
});



