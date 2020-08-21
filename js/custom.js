/*global $, alert, console*/

$(function () {
   
    'use strict';
    
    //Adjust Header Height
    
    var myheader = $('.header');
	
	var mySlider = $('.bxslider');
    
    myheader.height($(window).height());
    
    myheader.width($(window).width());
        
    $(window).resize(function () {
        
        myheader.height($(window).height());
        
        myheader.width($(window).width());
		
		mySlider.each(function () {
		
		    $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
		
	    });
        
    });
    
    //Add Links Active
    
    $('.links li a').click(function () {
       
        $(this).parent().addClass('active').siblings().removeClass('active');
        
    });
    
    //Smoth Scroll To Div
    
    $('.links li a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 1000);
		
	});
	
	//Adjust BoxSlider Center
	
	mySlider.each(function () {
		
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
		
	});
	
    //Trigger BoxSlider
	
	mySlider.bxSlider({
		pager: false
	});
	
    // Auto Slider
	
    (function autoSlider() {
		
		$('.slider .active').each(function () {
			
			if (!$(this).is(':last-child')) {
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass('active').next().addClass('active').fadeIn();
					
					autoSlider();
					
				});
				
			} else {
				
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass('active');
					
					$('.slider div').eq(0).addClass('active').fadeIn();
					
					autoSlider();
					
				});
				
			}
			
		});
		
	}());
	
	//Trigger MixitUp
	
	$('#container').mixItUp();
	
	//Adjust Shuffle Links
	
	$('.shuffle li').click(function () {
		
		$(this).addClass('active').siblings().removeClass('active');
		
	});
});



















