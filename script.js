// Example: Display a welcome message
document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to my portfolio!');
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;
    let slideInterval;

    const showSlide = (i) => {
        if (i >= slide.length) index = 0;
        if (i < 0) index = slide.length - 1;
        slides.style.transform = `translateX(${-index * 100}%)`;
    };

    const autoSlide = () => {
        slideInterval = setInterval(() => {
            index++;
            showSlide(index);
        }, 3000); // Change slide every 3 seconds
    };

    const stopAutoSlide = () => clearInterval(slideInterval);

    prev.addEventListener('click', () => {
        stopAutoSlide();
        index--;
        showSlide(index);
        autoSlide(); // Restart auto-slide
    });

    next.addEventListener('click', () => {
        stopAutoSlide();
        index++;
        showSlide(index);
        autoSlide(); // Restart auto-slide
    });

    // Initialize auto-slide
    autoSlide();
});

