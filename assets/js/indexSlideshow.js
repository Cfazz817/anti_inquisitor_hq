// 1. We build the reusable function and give it a 'speed' parameter
function initializeSlideshows(speed) {
    const frames = document.querySelectorAll('.picFrame');

    frames.forEach(function (frame) {
        const slides = frame.querySelectorAll('.slide');

        if (slides.length <= 1) return;

        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        // We use the 'speed' variable here instead of a hardcoded number
        setInterval(nextSlide, speed);
    });
}

// 2. We wait for the page to load, then trigger our new function!
document.addEventListener("DOMContentLoaded", function () {

    // Run the slideshows and change pictures every 5000 milliseconds (5 seconds)
    initializeSlideshows(5000);

});