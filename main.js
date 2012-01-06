$(function(){
	
	$("a").click(function(){
		$.ajax({
			url: $(this).attr("href"),
			success: function(data)
			{
				$("#body-content .guts").html(data);
			}
		});
		
		return false;
	});
	
});