requirejs.config({
	paths: {
		app: 'StzCommonSetting',
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        phaser_nine_patch: "//stzhyegeun.github.io/libs/StzCommon/plugin/nine-patch-phaser-plugin"
	}
});


requirejs(['StzCommon', 'jquery'], function(_instance, $) {
	
	setLockOrientationElements();
});


function setLockOrientationElements() {
	$('head').append("<style type='text/css' id='css_lock_orientation'></style>");	
	
	$('body').css({
		"background": "black",
		"margin": 0, 
		"padding": 0
	});
	$('body').append("<div id='lock_orientation_view'></div>");
	$('#lock_orientation_view').css({
        "width": "100%", 
        "height": "100%",
        "position": "fixed",
        "top": "0px", 
        "left": "0px",
        "background-color": "white",
        "background-repeat": "no-repeat", 
        "background-position": "center center"
    });
	
	if (StzGameConfig.LOCK_ORIENTATION == "PORTRAIT") {
		$('#css_lock_orientation').text('@media only screen and (orientation: portrait) { #lock_orientation_view {display: none;}} @media only screen and (orientation: landscape) { #lock_orientation_view {display: block;}}');
		$('#lock_orientation_view').css("background-image", "url('//stzhyegeun.github.io/libs/StzCommon/image/playportrait.png'");
	} else if (StzGameConfig.LOCK_ORIENTATION == "LANDSCAPE") {
		$('#css_lock_orientation').text('@media only screen and (orientation: portrait) { #lock_orientation_view {display: block;}} @media only screen and (orientation: landscape) { #lock_orientation_view {display: none;}}');
		$('#lock_orientation_view').css("background-image", "url('//stzhyegeun.github.io/libs/StzCommon/image/playlandscape.png'");
	}
} 