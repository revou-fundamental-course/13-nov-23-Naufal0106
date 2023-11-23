var images = document.querySelectorAll('#testimonials img');
var currentIndex = 0;
function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}
setInterval(showNextImage, 2000);

function validateForm() {
    var nameInput = document.getElementById('name-form');
    var emailInput = document.getElementById('email-form');
    var comboBox = document.getElementById('combo-box');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || comboBox.value === '') {
        alert('Please fill in all fields');
    } else {
        console.log('Form submitted successfully');
    }
    
}
