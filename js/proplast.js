// start scroll -----------------------------------------------------------------------
// $(document).ready(function () {
//     $(document).on("scroll", onScroll);

//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");

//         $('a').each(function () {
//             $(this).removeClass('active');
//         })
//         $(this).addClass('active');

//         var target = this.hash;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 500, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
//     var scrollPosition = $(document).scrollTop();
//     $('nav a').each(function () {
//         var currentLink = $(this);
//         var refElement = $(currentLink.attr("href"));
//         if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//             $('nav ul li a').removeClass("active");
//             currentLink.addClass("active");
//         }
//         else{
//             currentLink.removeClass("active");
//         }
//     });
// }

// end scroll ---------------------------------------------------------------------------
// smoth scroll ----------------------------------------------------------------------
$('.scroll-effect a, .head-arrow, .up').click(function(e){
    e.preventDefault();		//evitar el eventos del enlace normal
    var strAncla=$(this).attr('href'); //id del ancla
    $('body,html').stop(true,true).animate({
        scrollTop: $(strAncla).offset().top
    },1000);
});
$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
});    
// end smoth scroll ------------------------------------------------------------------
//   Slide show automatico -------------------------------------------------------------
// var slideIndex = 0;

// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 3000); // Change image every 2 seconds
// }

// Fin slide show -----------------------------------------------------------------------

// menu 2 ----------------------------------------------------------------
$(document).ready(main);
var contador = 1;
function main() {
    $('.burguerbtn').click(function () {
        if (contador == 1) {
            contador = 0;
            $('nav').animate({ left: '0' });
            $('body').addClass('noscroll');
        }
        else {
            contador = 1;
            $('nav').animate({ left: '-100%' });
            $('body').removeClass('noscroll');
        }
    });
    $(window).resize(function () {
        contador = 1;
        if (window.innerWidth > 768) {
            $('nav').removeAttr('style');
            $('body').removeClass('noscroll');
        }
    });
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
}  
$(document).ready(function(){
    $('.burguerbtn').click(function(){
          $('.fa-bars').toggleClass("activeM");
          $('.fa-times').toggleClass("activeM");
      });   
  });