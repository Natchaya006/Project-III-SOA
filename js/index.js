$(function () {
	//---------------Login/Register-----------------------
	$('#login-form-link').click(function (e) {
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function (e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	//----------------------------------------------------
	//---------------Product Show-------------------------
	// $.ajax({
	// 	type: "GET",
	// 	url: "https://productapi977377.herokuapp.com/Products.php/api/products",
	// 	dataType: "text",
	// 	success: function (data) {
	// 		console.log(data);
	// 		var obj = JSON.parse(data);
	// 		console.log(obj);
	// 		alert(obj);
	// 	}
	// });
	$(".showProduct").mouseover(function () {
		$(".showProduct").css("background-color", "rgba(255, 255, 255, 0.164)");
	});
	$(".showProduct").mouseout(function () {
		$(".showProduct").css("background-color", "");
	});
	$(".showProduct").click(function (e) {});
	//----------------------------------------------------
});