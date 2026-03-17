const img = document.getElementById("rotateImg");
let rotation = 0;

function rotateImage() {
    rotation += 0.2; //speed control
    img.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateImage)
}
rotateImage()

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

