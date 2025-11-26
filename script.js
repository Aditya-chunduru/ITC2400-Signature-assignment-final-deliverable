function showError(message) {
   document.getElementById('popupMsg').innerHTML = message;
    document.getElementById('errorPopup').style.display = 'flex';
}

document.getElementById('closePopup').onclick = function() {
    document.getElementById('errorPopup').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let errorMsg = '';

// First letter capitalization for inputs
 ['firstName', 'lastName', 'city', 'zip', 'email'].forEach(function(fieldId) {
    let input = document.getElementById(fieldId);
    input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
 });


// Zip code: must be 5 digits
let zipVal = document.getElementById('zip').value.trim();

if (!/^\d{5}$/.test(zipVal)) {
    errorMsg += 'Zip code must be exactly 5 digits <br>';
}


// Email validation
let emailVal = document.getElementById('email').value;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailVal)) {
    errorMsg += 'Please enter a valid email address.<br>';
}

if (errorMsg) {
    showError(errorMsg);
} else {
    showError('Form Submitted successfully'); // Submit the form if no errors
}
});