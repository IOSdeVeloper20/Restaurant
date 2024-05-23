const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const visibleSlides = 3; // Number of visible slides
const slideWidth = 200 + 20; // Width of slide + margin-right

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - visibleSlides) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
});
