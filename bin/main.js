$(window).load(function()
{
	var contentHeight = $(".windowContentWrapper iframe").height();
	$(".windowContentWrapper").css("height", contentHeight);
	$(".windowBorder").css("height", contentHeight);
});