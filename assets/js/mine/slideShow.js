function openPhotoBox() { 
    document.getElementById("photoGallery").style.display = "block";
}

function closePhotoBox() {
    document.getElementById("photoGallery").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var s = document.getElementsByClassName("slides");

    if (n > s.length) {slideIndex = 1}
    if (n < 1) {slideIndex = s.length}
    for (i = 0; i < s.length; i++) {
        s[i].style.display = "none";
    }
    s[slideIndex-1].style.display = "block";
    innerHTML = [slideIndex-1];
}
