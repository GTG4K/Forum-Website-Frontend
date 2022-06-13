const slideshowImages = document.querySelectorAll(".slideshow-img");

const NextImageDelay = 3000; //3 seconds
let currentImageCount = 0;

slideshowImages[currentImageCount].style.opacity = 1;

function nextImg(){
    slideshowImages[currentImageCount].style.opacity = 0;
    currentImageCount = (currentImageCount + 1) % slideshowImages.length;
    slideshowImages[currentImageCount].style.opacity = 1;
}

setInterval(nextImg, NextImageDelay);