$(document).ready(function() {
  
animationClick('.rollOut1','rollOut'); 
animationClick('.bounce1','bounce'); 
animationClick('.flash1','flash');
animationClick('.pulse1','pulse');
animationClick('.rubberBand1','rubberBand');
animationClick('.shake1','shake');
  animationClick('.tada1','tada');
  animationClick('.swing1','swing');
  animationClick('.wobble1','wobble');
  animationClick('.bounceIn1','bounceIn');
animationClick('.bounceInDown1','bounceInDown');
animationClick('.bounceInLeft1','bounceInLeft');
animationClick('.bounceInRight1','bounceInRight');
animationClick('.bounceInUp1','bounceInUp');
animationClick('.bounceOut1','bounceOut');
animationClick('.bounceOutDown1','bounceOutDown');
animationClick('.bounceOutLeft1','bounceOutLeft');
animationClick('.bounceOutRight1','bounceOutRight');
animationClick('.bounceOutUp1','bounceOutUp');
animationClick('.fadeIn1','fadeIn');
animationClick('.fadeInDown1','fadeInDown');
animationClick('.fadeInDownBig1','fadeInDownBig');
animationClick('.fadeInLeft1','fadeInLeft');
animationClick('.fadeInLeftBig1','fadeInLeftBig');
animationClick('.fadeInRight1','fadeInRight');
animationClick('.fadeInRightBig1','fadeInRightBig');
animationClick('.fadeInUp1','fadeInUp');
animationClick('.fadeInUpBig1','fadeInUpBig');
animationClick('.fadeOut1','fadeOut');
  
animationClick('.fadeOutDown1','fadeOutDown');
animationClick('.fadeOutDownBig1','fadeOutDownBig');
animationClick('.fadeOutLeft1','fadeOutLeft');
animationClick('.fadeOutLeftBig1','fadeOutLeftBig');
animationClick('.fadeOutRight1','fadeOutRight');
animationClick('.fadeOutRightBig1','fadeOutRightBig');
animationClick('.fadeOutUp1','fadeOutUp');
animationClick('.fadeOutUpBig1','fadeOutUpBig'); 
animationClick('.flipInX1','flipInX'); 
  
function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};
        
function animationClick(element, animation){
  element = $(element);
  element.click(
    function() {
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};     
        
        
});