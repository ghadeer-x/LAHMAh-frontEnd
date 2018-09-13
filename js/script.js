$(document).on('ready',function(){
	'use strict'

	// Set revolution slider
	jQuery('.tp-banner').show().revolution({
		
		// Set time and height width
		dottedOverlay:"none",
		delay:1000,
		startwidth:1170,
		startheight:700,
		hideThumbs:200,		
		thumbWidth:100,
		thumbHeight:50,
		thumbAmount:5,
		
		// Set navigation arrow
		navigationType:"bullet",
       	navigationArrows:"solo",
       	navigationStyle:"preview1",
		touchenabled:"on",		
		swipe_velocity: 0.7,
		swipe_min_touches: 1,
		swipe_max_touches: 1,
		drag_block_vertical: false,
		
		// Set parallax effect								
		parallax:"mouse",
		parallaxBgFreeze:"on",
		parallaxLevels:[7,4,3,2,5,4,3,2,1,0],								
		keyboardNavigation:"off",
		soloArrowLeftHalign:"center",
		soloArrowLeftValign:"bottom",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,
		soloArrowRightHalign:"center",
		soloArrowRightValign:"bottom",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,				
		shadow:0,
		fullWidth:"off",
		fullScreen:"on",
		spinner:"spinner4",		
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",		
		autoHeight:"off",						
		forceFullWidth:"off",								
		hideThumbsOnMobile:"off",
		hideNavDelayOnMobile:1500,						
		hideBulletsOnMobile:"off",
		hideArrowsOnMobile:"off",
		hideThumbsUnderResolution:0,		
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		startWithSlide:0,
		fullScreenOffsetContainer: ".header-part"
	});


});

$(window).on('load',function(){
	'use strict'

	$('#pre-loader').delay(1000).fadeOut();

});


