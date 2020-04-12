// header
var header = document.querySelector('#header')

// show year
var tahun = new Date().getFullYear()
var doc = document.querySelector('#tahun')
doc.textContent = tahun

//hidden menu
var hiddenMenu = document.querySelector('#hiddenMenu')

var showBtn = document.querySelector('#showHiddenMenu')
showBtn.addEventListener('click', function () {
	hiddenMenu.style.display = 'block'
})

var closeBtn = document.querySelector('#closeHiddenMenu')
closeBtn.addEventListener('click', function () {
	hiddenMenu.style.display = 'none'
})

// back to top
mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.cssText = "background-color: #fff; box-shadow: 0 0 5px grey; color: #000;padding: 0;"
    mybutton.style.display = "block";
  } else {
    header.style.cssText = "background-color: transparent; color: #fff;padding: 32px 0;"
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// slideshow
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";		  
}

// modal
var btnLogin = document.querySelector('#btnLogin')
var modal = document.querySelector('.modal')
var closeModal = document.querySelector('#closeModal')

btnLogin.addEventListener('click', function () {
  modal.style.display = 'flex'
})

closeModal.addEventListener('click', function () {
  modal.style.display = 'none'
})
