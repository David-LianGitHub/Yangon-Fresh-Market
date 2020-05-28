
$(document).ready(function(){

    $('h1').click(function(){
        $('h1').css('color','#111');
    })





    $('.js--startSticky').waypoint(function(direction){
         if(direction=='down'){
             $('nav').addClass('sticky');
         }else{
             $('nav').removeClass('sticky');
         }
         
    },{
        offset:'150'
    })


    
    $('.js--startSticky').waypoint(function(direction){
        if(direction=='down'){
            $('.goTopArrow').addClass('arrow-up');
        }else{
            $('.goTopArrow').removeClass('arrow-up');
        }
        
   },{
       offset:'150'
   })
/*
   $('.js--nav-icon').click(function(){
    var icon= $('.js--nav-icon i');   

   
     $('.linksFor3Bars').slideToggle(200);
    if(icon.hasClass('fa-times')){             
        icon.addClass('fa-bars');	
        icon.removeClass('fa-times');	
    }else{				
        icon.addClass('fa-times');	 
        icon.removeClass('fa-bars');  
    }
    
})
*/


/*-----------------------List Slid----------------------*/
$('.js--nav-icon').click(function(){
    var icon= $('.js--nav-icon i');   
     
    if(icon.hasClass('fa-bars')){  
        
        $('.linksFor3Bars').
          slideToggle(1000).  css('display', 'block');
        
        icon.addClass('fa-times');	
        icon.removeClass('fa-bars');
    }else{				
        $('.linksFor3Bars').
           slideToggle(1000, function(){ $('.linksFor3Bars').css('display','none')});
        icon.addClass('fa-bars');	 
        icon.removeClass('fa-times');  
    }
    

})



})


/*
var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imageHolder");

  if (n > slides.length) {slideIndex =1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i]. classList.remove("active");
  }
  
  slides[slideIndex]
  console.log(slides.length)
  console.log(n);

}*/





