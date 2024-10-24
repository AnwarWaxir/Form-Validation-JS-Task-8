let form = document.getElementById("form");
let uName = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let info = document.getElementById("info");
let password = document.getElementById("password");
let cPassword = document.getElementById("cpassword");
let image = document.getElementById("image");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

let validate = () => {
    
    const showError = (element, message) => {
        let formGroup = element.parentElement;
        formGroup.className = "form-group error";
        formGroup.querySelector('small').innerText = message;
    };

    const showSuccess = (element) => {
        let formGroup = element.parentElement;
        formGroup.className = "form-group success";
    };

    // Name Validation
    if (uName.value.trim() === '') {
        showError(uName, 'Name is required.');
    } else if (uName.value.trim().length < 3) {
        showError(uName, 'Name must be at least 3 characters long.');
    } else if (/\d/.test(uName.value)) {
        showError(uName, 'Name cannot contain numbers.');
    } else {
        showSuccess(uName);
    }

    // Email Validation
    if (email.value.trim() === '') {
        showError(email, 'Email is required.');
    } else if (!email.value.includes('@')) {
        showError(email, 'Please enter a valid email address.');
    } else if (email.value.trim().length < 5) {
        showError(email, 'Email must be at least 5 characters long.');
    } else {
        showSuccess(email);
    }

    // Phone Validation
    if (phone.value.trim() === '') {
        showError(phone, 'Phone number is required.');
    } else if (/[a-zA-Z]/.test(phone.value)) {
        showError(phone, 'Phone number can only contain digits.');
    } else if (phone.value.trim().length < 10) {
        showError(phone, 'Phone number must be at least 10 digits long.');
    } else {
        showSuccess(phone);
    }

    // Info Validation
    if (info.value.trim() === '') {
        showError(info, 'Info is required.');
    } else {
        showSuccess(info);
    }

    // Password Validation
    if (password.value.trim() === '') {
        showError(password, 'Password is required.');
    } else if (password.value.trim().length < 6) {
        showError(password, 'Password must be at least 6 characters long.');
    } else {
        showSuccess(password);
    }

    // Confirm Password Validation
    if (cPassword.value.trim() === '') {
        showError(cPassword, 'Confirmation password is required.');
    } else if (password.value !== cPassword.value) {
        showError(cPassword, "Passwords do not match.");
    } else {
        showSuccess(cPassword);
    }

    // Image File Validation
    if (image.value.trim() === '') {
        showError(image, 'Image is required.');
    } else {
        showSuccess(image);
    }
};
