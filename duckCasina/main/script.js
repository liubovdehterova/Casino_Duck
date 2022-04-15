let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
setInterval(() => {
    showSlides(slideIndex += 1);
}, 3000);
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".banners-slider__item-container");
    let dots = document.querySelectorAll(".fe-slider__dots-item");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

let buttonMenu = document.querySelector('.header__main__right__mob');
let buttonClose = document.querySelector('.sidebar__header-close');
buttonMenu.addEventListener('click', () => {
    let menuMob = document.querySelector('.header__main__right__mob__menu');
    if(menuMob.style.display !== 'block') {
        menuMob.style.display = 'block';
    }
});
buttonClose.addEventListener('click', () => {
    let menuMob = document.querySelector('.header__main__right__mob__menu');
    if(menuMob.style.display === 'block') {
        menuMob.style.display = 'none';
    }
});
