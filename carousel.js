// Esta es otra sintaxis para $(document).ready();
$(function(){
	var elements = document.getElementById('frames').getElementsByTagName('img');
	// listItems.foto.src = listItems[1];

	$("#next_frame").on("click", function(){
		var frames_style = $("#frames").attr("style");
    if (frames_style == "left: 0px;") {
	    animate_left("-360px");
    }
    if (frames_style == "left: -360px;"){
			// $("#frames").removeAttr("style")
		  animate_left("-720px");
    }
    else if (frames_style == "left: -720px;") {
    	animate_left("0px");
    } else {
    	animate_left("0px");    	
    }
	});

	$("#previous_frame").on("click", function(){
		var frames_style = $("#frames").attr("style");
    if (frames_style == null) {
	    animate_left("360px");
    }
    if (frames_style == "left: -360px;"){
			// $("#frames").removeAttr("style")
		  animate_left("0px");
    }
    else if (frames_style == "left: -720px;") {
    	animate_left("0px");
    }
	});
});


function animate_left(px){
	$("#frames").animate({
	left: px}, function(){
		console.log(this);
	});
}

// function toggleSlide(direction) {
//     var elements = document.getElementsByClassName("hideable"); // gets all the "slides" in our slideshow
//     // Find the LI that's currently displayed
//     var visibleID = getVisible(elements);
//     elements[visibleID].style.display = "none"; // hide the currently visible LI
//     if(!direction) {
//         var makeVisible = prev(visibleID, elements.length); // get the previous slide
//     } else {
//         var makeVisible = next(visibleID, elements.length); // get the next slide
//     }
//     elements[makeVisible].style.display = "block"; // show the previous or next slide
// }
// function getVisible(elements) {
//     var visibleID = -1;
//     for(var i = 0; i < elements.length; i++) {
//         if(elements[i].style.display == "block") {
//             visibleID = i;
//         }
//     }
//     return visibleID;
// }
// function prev(num, arrayLength) {
//     if(num == 0) return arrayLength-1;
//     else return num-1;
// }
// function next(num, arrayLength) {
//     if(num == arrayLength-1) return 0;
//     else return num+1;
// }