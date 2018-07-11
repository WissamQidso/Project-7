/* MENU CONTROL SELECTION */
$(".nav li").on("click", function(){
    
   $('.nav li').removeClass("active");
   $(this).addClass("active");
    
});

/* PHOTO SLIDER SELECTION */
$(function(){
    
    $('.carousel').carousel({
       interval: 3000,
       wrap: true,
       pause: false,
       keyboard: true
    });
    
});

/* TOOLTIP HOVER */
$(function(){
                
    $('[data-toggle="tooltip"]').tooltip();
                
});

