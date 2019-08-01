$(document).ready(function(){
    $(window).scroll(function(event){
        var pos_body = $("html, body").scrollTop();
        if(pos_body>50){
            $('.menutop').addClass('doi-bg-menu');
            $('.custombrand').addClass('doi-mau-brand');
            $('.navbar-light.menutop .navbar-nav .nav-link').addClass('doi-mau-menu');
        }else{
            $('.menutop').removeClass('doi-bg-menu');
            $('.custombrand').removeClass('doi-mau-brand');
            $('.navbar-light.menutop .navbar-nav .nav-link').removeClass('doi-mau-menu');
        }

        if(pos_body > 500 && pos_body<1100){
            $('.navbar-light.menutop .navbar-nav li:nth-child(1) .nav-link.doi-mau-menu').addClass('doi-chu-cam');
        }else{
            $('.navbar-light.menutop .navbar-nav li:nth-child(1) .nav-link.doi-mau-menu').removeClass('doi-chu-cam');
        }
        if(pos_body >= 1100 && pos_body < 1600){
            $('.navbar-light.menutop .navbar-nav li:nth-child(2) .nav-link.doi-mau-menu').addClass('doi-chu-cam');
        }else{
            $('.navbar-light.menutop .navbar-nav li:nth-child(2) .nav-link.doi-mau-menu').removeClass('doi-chu-cam');
        }
        if(pos_body >= 1600 && pos_body < 2400){
            $('.navbar-light.menutop .navbar-nav li:nth-child(3) .nav-link.doi-mau-menu').addClass('doi-chu-cam');
        }else{
            $('.navbar-light.menutop .navbar-nav li:nth-child(3) .nav-link.doi-mau-menu').removeClass('doi-chu-cam');
        }
        if(pos_body >= 2400){
            $('.navbar-light.menutop .navbar-nav li:nth-child(4) .nav-link.doi-mau-menu').addClass('doi-chu-cam');
        }else{
            $('.navbar-light.menutop .navbar-nav li:nth-child(4) .nav-link.doi-mau-menu').removeClass('doi-chu-cam');
        }


        if(pos_body>500){
            $('.back-to-top').addClass('hien-ra');
            $('.menutop').addClass('one-edge-shadow');
        }else{
            $('.back-to-top').removeClass('hien-ra');
            $('.menutop').removeClass('one-edge-shadow');
        }
    });
    $('.back-to-top').click(function(event) {
        $('html,body').animate({scrollTop: 0},1400);
     });

});