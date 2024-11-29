let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoSlideInterval;
const slideLength = slides.length

console.log(slideLength);


function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    // Show the current slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = ((currentIndex - 1) + totalSlides) % totalSlides; // Loop back to the last slide
    showSlide(currentIndex);
}

// Start the slideshow
setInterval(nextSlide, 10000); // Automatically change slide every 3 seconds

showSlide(currentIndex);


const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);