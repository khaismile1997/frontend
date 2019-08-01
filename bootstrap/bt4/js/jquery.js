$(document).ready(function() {
    $(window).scroll(function(event) {
       var pos_body = $('html,body').scrollTop();
       console.log(pos_body);
       if(pos_body>500){
          $('.menutop').addClass('doi-bg-menu');
       }
       else {
          $('.menutop').removeClass('doi-bg-menu');
       }
       if(pos_body>500){
          $('.back-to-top').addClass('hien-ra');
       }
       else{
          $('.back-to-top').removeClass('hien-ra');
       }
    });
    $('.back-to-top').click(function(event) {
       $('html,body').animate({scrollTop: 0},1400);
    });
 });