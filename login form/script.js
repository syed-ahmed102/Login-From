// Access the form and input elements
var loginForm = document.getElementById("loginForm");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");
// Function to validate email format
var isValidEmail = function (email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};
// Handle form submission
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();
    // Clear any previous error message
    errorMessage.textContent = "";
    // Validation logic
    if (!email || !password) {
        errorMessage.textContent = "Both fields are required.";
        return;
    }
    if (!isValidEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters long.";
        return;
    }
    // If validation passes
    console.log("Form submitted successfully:", { email: email, password: password });
    alert("Login successful!");
});
