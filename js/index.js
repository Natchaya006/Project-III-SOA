$(function () {
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
	$("#login-submit").click(function () {
		var usernameInput = $("#usernameL").val();
		var passwordInput = $("#passwordL").val();
		var urlGetAllCustomer = "https://customer-api-shopping.herokuapp.com/api/customers/" + usernameInput;
		$.ajax({
			type: "GET",
			url: urlGetAllCustomer,
			dataType: "json",
			success: function (data) {
				if (passwordInput == data.password) {
					location.replace('product-catagory.html');
					localStorage.setItem("id", usernameInput);
					localStorage.setItem("name", data.name);
					localStorage.setItem("password", data.password);
				} else {
					alert('Username or Password Wrong!');
					location.reload();
				}
			}
		});
	});
	$("#register-submit").click(function (e) {
		var formdata = {
			address: $("#addressR").val(),
			email: $("#emailR").val(),
			lastname: $("#lastnameR").val(),
			name: $("#firstnameR").val(),
			password: $("#passwordR").val(),
			telno: $("#telNoR").val()
		};
		var urlPostCustomer = "https://customer-api-shopping.herokuapp.com/api/customers/";
		$.ajax({
			type: "POST",
			url: urlPostCustomer,
			dataType: "json",
			contentType: "application/json",
			data: formdata,
			success: function (data) {
				alert("Register Complete! ::: Username is " + data.id);
			}
		});
	});
});