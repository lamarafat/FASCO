document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('passwordForm');

    form.addEventListener('submit', function(event) {
        if (!validatePasswords()) {
            event.preventDefault(); 
        }
    });
});
function validatePasswords() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmation = document.getElementById('confirmation').value;
    const errorMessage = document.getElementById('error-message');

    if (newPassword !== confirmation) {
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.display = 'block';
        return false;
    }
    const passwordValidation = isValidPassword(newPassword);
    if (!passwordValidation.isValid) {
        errorMessage.textContent = passwordValidation.errors.join(' ');
        errorMessage.style.display = 'block';
        return false;
    }

    errorMessage.style.display = 'none';
    return true;
}
function isValidPassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[a-zA-Z]/.test(password)) {
        errors.push("Password must contain at least one letter.");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one digit.");
    }
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}




