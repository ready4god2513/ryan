$(function(){
	
	$("a").click(function(){
		$.ajax({
			url: $(this).attr("href"),
			success: function(data)
			{
				$("#body-content").slideUp("normal", function(){
					$("#body-content .guts").html(data);
					$("#body-content").slideDown("normal", function(){
						$("body").scrollTo(".guts", 800);
					});
				});
				
				
				
			}
		});
		
		return false;
	});
	
});