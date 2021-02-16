$(document).ready(function() {
    
    /*for the sticky navigation*/
    $('.js--section--features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
        }, {

    offset: '60px'
 
    });
    
     /*scroll on buttons*/
    $('.js--start').click(function() {
        $('html, body').animate({scrollTop: $().offset().top}, 1000);
        
    });
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section--features').offset().top}, 1000);
        
    });
    $('.js--logo').click(function() {
        $('html, body').animate({scrollTop: $().offset().top}, 1000);
        
    });
    
     /*smooth scrolling*/
    
     $(function(){
     $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
});
});
    
    /*animation on scroll*/
     $('.js--wp-1').waypoint(
    (direction) => {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
      $('.js--wp-2').waypoint(
    (direction) => {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );
    
    $('.js--header').waypoint(
    (direction) => {
      if (direction === 'up') {
        $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
        $('.js--wp-2').removeClass('animate__animated animate__fadeInUp');
      }
    },
    {
      offset: '-25%'
    }
  );
    
    
    /*Mobile navigation*/
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        
        /*if(icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }*/
     if (icon.attr("name") === 'menu') {
          icon.attr("name", 'close' );
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
         
        } else {
          icon.attr("name", 'menu');
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
   
    $(window).resize(function(){

var nav = $('.js--main-nav');

var icon = $('.js--nav-icon i');

if ($(window).width() > 767){

nav.css("display", "block");

icon.addClass('ion-close-round');

icon.removeClass('ion-navicon-round');

} else {

nav.css("display", "none");

icon.addClass('ion-navicon-round');

icon.removeClass('ion-close-round');

}

});
 


});