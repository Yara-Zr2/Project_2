// Code for nav bar when scrolling
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Add the class when scrolling down
    } else {
        header.classList.remove('scrolled'); // Remove the class when scrolling to the top
    }
});

// Code for slideshow to make it move after a certain amount of time
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
