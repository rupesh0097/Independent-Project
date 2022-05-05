//!Defining the layout for different viewport
const responsive ={
    320:{
        iteme: 1
    },
    560:{
        iteme: 2
    },
    960:{
        iteme:3
    }
}



$(document).ready(function(){
    
    $nav =$('.nav');
    $toggleCollapse = $('.toggle-collapse');

  
    $toggleCollapse.click(function (){
        $nav.toggleClass('collapse');           
    }) 


    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav:true,

        //! $ is jquery object, calling jquery object
        //! calling owl-navigation and owl-nav-prev 
        navText: [$('.owl-navigation .owl-nav-pre'),$('.owl-navigation .owl-nav-next')],

        //!Making the carousel responsive
        responsive:responsive,
    });
    
}); 


