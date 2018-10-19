$(document).ready(function () {



$("#part1").click(function() {
    $('html, body').animate({
        scrollTop: $("#part1To").offset().top - 100
    }, 1000);
});
    
$("#part2").click(function() {
    $('html, body').animate({
        scrollTop: $("#part2To").offset().top - 100
    }, 1000);
});
    
$("#part3").click(function() {
    $('html, body').animate({
        scrollTop: $("#part3To").offset().top - 100
    }, 1000);
});
    
    
$("#part4").click(function() {
    $('html, body').animate({
        scrollTop: $("#part4To").offset().top - 100
    }, 1000);
});
    
$("#part5").click(function() {
    $('html, body').animate({
        scrollTop: $("#part5To").offset().top - 100
    }, 1000);
});
    
$("#part6").click(function() {
    $('html, body').animate({
        scrollTop: $("#part6To").offset().top - 100
    }, 1000);
});


  $(document).ready(function() {
//code taken from http://dimsemenov.com/plugins/magnific-popup/ //
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
      
    $('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

});
    
$('button').click(function(){ //you can give id or class name here for $('button')
    $(this).text(function(i,old){
        return old=='EXPAND' ?  'COLLAPSE' : 'EXPAND';
    });

    
});
    
document.getElementById('options').onchange = function() {
    var i = 1;
    var myDiv = document.getElementById(i);
    while(myDiv) {
        myDiv.style.display = 'none';
        myDiv = document.getElementById(++i);
    }
    document.getElementById(this.value).style.display = 'block';
};
    
    
    
    
});