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
$("ul").on("click", "li", function(){
	$(this).toggleClass('done');
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(550, function() {
    	$(this).remove();
    });
    event.stopPropagation();
});

// add a list item when press Enter
$('input[type="text"]').keypress(function(event){
    if(event.which === 13) {
    	// grabbing new todo text from input
    	var todoText = $(this).val();
    	// create a new li and add to ul
    	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
    	$('input[type="text"]').val("");
    }
});

$(".fa-pencil-alt").click(function(){
	$('input[type="text"]').fadeToggle();
});