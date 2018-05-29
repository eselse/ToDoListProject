// $('li').click(function(){
// 	// if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)") {
// 		// turn it black
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else{
// 		// turn it gray
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

// Check Off Specific Todos By Clicking
$("li").click(function(){
	$(this).toggleClass('done');
});

// Click on X to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(550, function() {
    	$(this).remove();
    });
    event.stopPropagation();
});
