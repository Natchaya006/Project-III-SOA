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
});