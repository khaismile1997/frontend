$(document).ready(function(){
    var slides = document.getElementsByClassName("slideimg");
    var slideimg=0;

    setInterval(changeSlide,5000);
    function changeSlide()
    {
        for(var i=0; i<slides.length; i++)
    {
        slides[i].style.display="none";
    }
         slideimg++;
        if(slideimg > slides.length-1)
    {
        slideimg=0;
    }
        slides[slideimg].style.display="block";

    }

    $(window).scroll(function(event){
        var pos_body = $('html, body').scrollTop();
        if(pos_body>20){
            $('.menutop').addClass('customnavbar');
            $('.custombrand').addClass('customlogoa').removeClass('custombrand');
            $('ul.inhoa .nav-item .nav-link').addClass('customnavlink');
            $('ul.inhoa .nav-item.active .nav-link').addClass('customactive');
            $('.nutsignup').addClass('customsignup');
        }else{
            $('.menutop').removeClass('customnavbar');
            $('.customlogoa').addClass('custombrand').removeClass('customlogoa');
            $('ul.inhoa .nav-item .nav-link').removeClass('customnavlink');
            $('ul.inhoa .nav-item.active .nav-link').removeClass('customactive');
            $('.nutsignup').removeClass('customsignup');
        }
    });

    $('.config-trigger').click(function(){
        if($('.config-panel').css('display') == 'none'){
            $('.config-panel').css('display', 'block');
        }else{
            $('.config-panel').css('display', 'none');
        }
    });
    $('.close').click(function(){
        $('.config-panel').css('display', 'none');
    });

    // var themearr = document.querySelectorAll('.theme');
    // console.log($('.theme').children().click()[0]);
    // var count = 0;
    // $('.theme').children().click(function(){
    //     count++;
    //     console.log(count);
    // });

    // var elementClicked;

    // $('.theme').children().click(function(){
    //     $(this).data('clicked', true);
    //     console.log($(this).data());
    // });

    $('.theme').click(function(){
        // elementClicked = true;
        // if(elementClicked==true) {
        //     $('.theme').addClass('active');
        //     $('.theme').siblings().removeClass('active');
        // }
        var $listItem = $(this).closest('li');
            $listItem.addClass('active');
	        $listItem.siblings().removeClass('active');
    });

    // $('#color-options a').on('click', function(e) { 
    //     var $styleSheet = $(this).attr('data-style');
	// 	$('#theme-style').attr('href', $styleSheet);	
				
	// 	var $listItem = $(this).closest('li');
	// 	$listItem.addClass('active');
	// 	$listItem.siblings().removeClass('active');
		
	// 	e.preventDefault();
		
	// });
    
});