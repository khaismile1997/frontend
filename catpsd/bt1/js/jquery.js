$(function(){
    // show menu
    $('.menu-item').click(function(){
        var $listItem = $(this).closest('li');
        $listItem.addClass('active');
        $listItem.siblings().removeClass('active');
    });

    var toggle       = $('.toggle a');
        menu        = $('.dsmenu ul');
        menuHeight  = menu.height();
 
    $(toggle).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
        menu.css('display','block');
    });
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 767) {
            menu.removeAttr('style');
        }
    });

    // slider
    // Xác định số lượng hình của slide
	var count = $('.slide-image').length;
	
	// Thêm số nút điều khiển bằng với số hình của slide
	for(x=0; x < count ;x++){
		$('.slide-pager ul').prepend("<li class='slide-pager-slot'></li>");
	}
	
	$('.slide-pager-slot:first-child').addClass('focus');
	
	// Khai báo biến dùng để đồng bộ hóa giữa hình ảnh và điều khiển
	var eindex=0;
	
	// Click vào điều khiển sẽ hiện hình tương ứng
	$('.slide-pager-slot').click(function(){
		eindex = $('.slide-pager-slot').index(this);
		$('.slide-image').stop().animate({opacity:0});
		$('.slide-image:eq(' + eindex + ')').stop().animate({opacity:1});
		$('.slide-pager-slot').removeClass('focus');
		$(this).addClass('focus');
	});
	
	// Function xử lý hiển thị cho hình slide và các nút điều khiển tương ứng với eindex
	// Được dùng lại một số lần ở các đoạn code bên dưới
	function setimagefocus(){
		$('.slide-pager-slot').removeClass('focus');
		$('.slide-pager-slot:eq(' + eindex + ')').addClass('focus');
		$('.slide-image').stop().animate({opacity:0});
        $('.slide-image:eq(' + eindex + ')').stop().animate({opacity:1});
        $('.slide-image').css('z-index', '0');
        $('.slide-image:eq(' + eindex + ')').css('z-index', '1');
	}
	
	// function xử lý quay vòng hình ảnh
	function slideswap(){
		// Nếu vị trí hiện tại đã là hình cuối cùng của slide thì sẽ chuyển eindex về -1
		// để sau eindex++ thì eindex sẽ là 0, tương ứng với hình slide đầu tiên
		if(eindex==count-1){eindex=-1;}
		eindex++;
		setimagefocus();
	}
	
	start_slideswap();
	// Thay đổi giá trị biến timeinterval bên dưới để thay đổi thời gian chuyển đổi giữa 2 hình
	function start_slideswap(){
		timeinterval = 1200;
		play = setInterval(slideswap,timeinterval);
	}
	
	// Xử lý khi đưa chuột vào slide thì dừng lại quá trình tự động chuyển hình
	$(".slide-container").hover(function() {
        clearInterval(play);
    }, function(){
        start_slideswap();
    });
	
	// Xử lý khi click nút next và prev
	$('.slide-control-prev').click(function(){
		eindex--;
		// Nếu vị trí hiện tại đã là hình đầu tiên của slide thì sẽ chuyển eindex về hình cuối
		if(eindex==-1){eindex=count-1;}
		setimagefocus();
	});
	$('.slide-control-next').click(function(){
		eindex++;
		// Nếu vị trí hiện tại đã là hình đầu tiên của slide thì sẽ chuyển eindex về hình cuối
		if(eindex==count){eindex=0;}
		setimagefocus();
	});

	// Script Hide show content

	$('.muc-item').click(function(){
		var $kiemtrashow = $(this).find('.hidecontent').css('display');
		//console.log($kiemtrashow);
		if($kiemtrashow == 'flex'){
			//code
			$(this).find('.fas').addClass('fa-chevron-down');
			$(this).find('.fas').removeClass('fa-chevron-up');	
		}else{
			$(this).find('.fas').addClass('fa-chevron-up');
			$(this).find('.fas').removeClass('fa-chevron-down');
		}
		var $hidemuc = $(this).closest('li');
		$hidemuc.find('.hidecontent').slideToggle();
		$hidemuc.find('.hidecontent').css('display','flex');
	});

	$('.numberlike .fa-heart').click(function(){
		var $heart = $(this).closest('i');
		console.log($heart);
		$heart.toggleClass('fas');
		var $p = $(this).parent().find('.countnumber').closest('p');
		console.log($p);
		var $pvalue = $p.html();
		//console.log($pvalue);
		var $result;
		if($heart.hasClass('fas')){
			$result = Number($pvalue)+1;
			console.log($result);
			$p.html($result);
		}else{
			$result = Number($pvalue)-1;
			console.log($result);
			$p.html($result);
		}
	});

	
	var options = {
		  useEasing : true, 
		  useGrouping : true, 
		  separator : ',', 
		  decimal : '.', 
		  prefix : '', 
		  suffix : '' 
		};
	
	var count1 = new CountUp("counter1", 0, 283940, 0, 2, options);
	var count2 = new CountUp("counter2", 0, 345789, 0, 2, options);
	var count3 = new CountUp("counter3", 0, 694, 0, 2, options);
	var count4 = new CountUp("counter4", 0, 1273890, 0, 2, options);
	var count5 = new CountUp("counter5", 0, 3637, 0, 2, options);
	
	$(window).scroll(function(event){
		var pos_body = $('html, body').scrollTop();
		if(pos_body>50){
			$('.menu-bar').addClass('fixed-top');
		}else{
			$('.menu-bar').removeClass('fixed-top');
		}

		if(pos_body>500){
			$('.back-to-top').addClass('hien-ra');
		}else{
			$('.back-to-top').removeClass('hien-ra');
		}
			
		if(pos_body>2350){
			count1.start();
			count2.start();
			count3.start();
			count4.start();
			count5.start();
		}
	});
		

	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop: 0}, 1500);
	});


	$('#exampleSlider').multislider({
        interval: 4000,
        slideAll: true,
        duration: 1500
    });
	
	

});