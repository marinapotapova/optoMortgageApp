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
});