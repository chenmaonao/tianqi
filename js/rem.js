(function($){
	var maxWidth = 375;
	
	var screenWidth = screen.width;
	//console.log(screen.width)
	var size = screenWidth/maxWidth*100;
	//console.log(size)
	var id = "rem"+new Date().getTime();
	var style = $(`<style id="${id}">html{
		font-size:${size}px;
	}</style>`);
	$("head").append(style);
	
})(jQuery)