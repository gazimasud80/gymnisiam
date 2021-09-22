$(document).ready(function(){

  // benner slider

    $('.benner-slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
       
      });
      // venobox js
      
    $('.venobox').venobox({
        closeBackground:'#e23e38',
    }); 

    //team slider

    $('.team-slider').slick({
        slidesToShow: 4,
        slidesToScroll:1,
        arrows:false,
    });


    // Testimonial Slider


	
    $('.testimonial-slider').slick({
        slidesToShow: 2,
   
        slidesToScroll:1,
        arrows:false,
        dots:true,
    });

    //conter
    $('.counter').counterUp({
     
    });
			



});