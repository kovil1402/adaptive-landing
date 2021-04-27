new WOW().init();
// SITE LOADER

$(window).on('load', function () {
  $('body').addClass('loaded_hiding');
  window.setTimeout(function () {
    $('body').addClass('loaded');
    $('body').removeClass('loaded_hiding');
  }, 300);
});

// Owl Carousel 

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

//STICKY NAVBAR
window.onscroll = function() {stickyFunction()};

let navbar = document.getElementById("nav");

let offset = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= offset) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
};

let ham = document.getElementById('hamburger')

ham.addEventListener('click',function(){
  document.querySelector('.slider-container').classList.toggle("slider-toggle");
});

// Required form tags
/* 
document.querySelector('#header form').submit((function(){
  let requiredName = document.querySelector('header form #form1-name');
  let requiredEmail = document.querySelector('header form #form1-email');
  let hasNoErrors = true;
  if(requiredName.innerHTML == ''){
    document.getElementById('form1-name').style.display = "block";
    hasNoErorrs = false;
  }else if(requiredEmail.innerHTML == ''){
    document.getElementById('form1-email').style.display = "block";
    hasNoErorrs = false;
  };
  console.log(hasNoErrors);
  return hasNoErrors ;

})); */

function validate() {
  var name = document.getElementById('form1-name');
  var email = document.getElementById('form1-email');
  let hasNoErrors = true;
  if (name.value !=="") {
    document.getElementById('error-text1').style.display = "none";
    document.getElementById('form1-name').setAttribute("style","border:none;");
  } else {
    document.getElementById('error-text1').style.display = "block";
    document.getElementById('form1-name').setAttribute("style","border:3px solid red;");
    hasNoErrors = false;
  }
  if (email.value !=="") {
    document.getElementById('error-text2').style.display = "none";
    document.getElementById('form1-email').setAttribute("style","border:none;");
  } else {
    document.getElementById('error-text2').style.display = "block";
    document.getElementById('form1-email').setAttribute("style","border:3px solid red;");
    hasNoErrors = false;
  }
  return hasNoErrors;
}



