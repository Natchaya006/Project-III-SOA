$(function () {
    $("#sessionID").text(localStorage.getItem("name"));
    var urlGetAllCustomer = "https://customer-api-shopping.herokuapp.com/api/customers/" + localStorage.getItem("id");
    $.ajax({
        type: "GET",
        url: urlGetAllCustomer,
        dataType: "json",
        success: function (data) {
            $(".detail").append("<li><b>User ID >>> " + data.id + "</b></li><br><li><b>Name >>> " + data.name + " " + data.lastname + "</b></li><br><li><b>Email >>> " + data.email + "</b></li><br><li><b>Address >>> " + data.address + "</b></li>");
        }
    });
    $.ajax({
        type: "GET",
        url: "https://api-payment.herokuapp.com/api/payment/"+localStorage.getItem("id"),
        dataType: "json",
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                $(".tableDetail").append("<tr><td>" + data[i].orderId + "</td><td>" + data[i].userId + "</td><td>" + data[i].price + "</td><td>" + data[i].dateTime + "</td></tr>");
            }
        }
    });
    $.ajax({
        type: "GET",
        url: "https://api-payment.herokuapp.com/api/user/" + localStorage.getItem("id"),
        dataType: "json",
        success: function (data) {
            $(".detail").append("<li><b>Blance >>> " + data[0].balance + " bath.</b></li><br>");
        }
    });
});