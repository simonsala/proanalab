


$(document).ready(function(){

    $(document).foundation();





    $('.home-banner-section__slider').slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: ".home-banner-section__button-prev",
        nextArrow: ".home-banner-section__button-next",
        draggable :false,
        responsive:  [
    
            {
                breakpoint: 640,
                settings: {
                arrows: true,
                draggable: true
                }
            }
          
    
            
        ]
    });

    
    $('.home-clients-section__slider').slick({
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite:true,
        draggable: false,
        accessibility: false,
        pauseOnFocus: false,
        arrows: false,
        pauseOnHover: false,
    });

    $('.home-posts-section__slider').slick({
        centerMode:true,
        centerPadding: '50px',
        prevArrow: ".home-posts-section__button-prev",
        nextArrow: ".home-posts-section__button-next",
        draggable :false,
        variableWidth: true, 
        responsive: [
    
            {
                breakpoint: 640,
                settings: {
                arrows: true,
                slidesToShow: 1,
                centerMode: true
                }
            }
          
    
            
        ]
    });


 
    
});








