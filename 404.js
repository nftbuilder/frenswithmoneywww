// look-out inspired by https://codepen.io/Kodekfebble/pen/dgnjb from Mirco Heusser

$(function() {
  
  var isAfraid = false;
  var isHappy = false;
  var happyCount = 0;
  
  $('.illuminati-body').mouseover(function(e){
    if (!isHappy) {
      happyCount++;
      if (happyCount == 10) {
        happyCount = 0;
        happy();
      }
    }
  });
  function happy() {
    isHappy = true;
    $('.illuminati-eye').finish().removeClass('single-blink double-blink');
    $('.illuminati-pupil').finish().removeClass('look-out');
    
    $('#illuminati').toggleClass('happy');
    
    setTimeout(function() {
      isHappy = false;
        $('#illuminati').toggleClass('happy');        
        blink();
        lookOut();
      }, 5000);
    
  }
  function afraid() {
    
    isAfraid = true;
    
    $('.illuminati-eye').finish().removeClass('single-blink double-blink');
    $('.illuminati-pupil').finish().removeClass('look-out');
    
    $('.illuminati-pupil').toggleClass('pupil-afraid');
    $('.illuminati-eye').toggleClass('eye-afraid');
    
    setTimeout(function() {
      
        isAfraid = false;
      
        $('.illuminati-pupil').finish().toggleClass('pupil-afraid');
        $('.illuminati-eye').finish().toggleClass('eye-afraid');
      
        blink();
        lookOut();
      
      }, 2000);
  }
  
  function blink() {
    $('.illuminati-eye').toggleClass('single-blink double-blink');
  }
  
  function lookOut() {
    $('.illuminati-pupil').toggleClass('look-out');
  }
  
  $('#illuminati').one('click',function(e) {
    afraid();
  });
  
});