var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var previousSlide = document.querySelector(".left-slide");
var index = 0;

nextSlide.onclick = function() {
    next("next");
}

previousSlide.onclick = function() {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == slides.length) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = slides.length - 1;
        } else {
            index--;
        }
    }

    for (i = 0, i; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

