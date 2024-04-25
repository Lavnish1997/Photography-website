// Define an array of background images
const images = ['img/slider-00-img.jpg', 'img/slider-01-img.jpg', 'img/slider-02-img.jpg', 'img/slider-03-img.jpg'];
let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    document.getElementById('hero').style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 3 seconds
setInterval(changeBackground, 3000);

// Initially set the background image
changeBackground();