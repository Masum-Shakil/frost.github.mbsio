$(document).ready(function()
{
	$(".filter").click(function()
	{
		var value=$(this).attr("data-filter");
		if(value=="all")
		{
			$(".single_portfolio").show("1000");
		}
		else
		{
			$(".single_portfolio").not("."+value).hide("1000");
			$(".single_portfolio").filter("."+value).show("1000");
		}
		$("ul .filter").click(function()
		{
			$(this).addClass('active').siblings().removeClass('active');
		})
	})
	$('.testimonial').owlCarousel({
		items:1, 
		singleItem:true,
		pagination:false,
		navigation:true,
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	});
})