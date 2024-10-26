// Access the form and input elements
const loginForm = document.getElementById("loginForm") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;

// Function to validate email format
const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

// Handle form submission
loginForm.addEventListener("submit", (event: Event) => {
    event.preventDefault(); // Prevent form from submitting

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

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
    console.log("Form submitted successfully:", { email, password });
    alert("Login successful!");
});
