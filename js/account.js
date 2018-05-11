$(function () {
    $("#sessionID").text(localStorage.getItem("name"));
    $.ajax({
        type: "GET",
        url: "https://api-payment.herokuapp.com/api/user/" + localStorage.getItem("id"),
        dataType: "json",
        success: function (data) {
            $("#balance").val(data[0].balance);
        },
        error: function (data) {
            $.ajax({
                type: "POST",
                url: "https://api-payment.herokuapp.com/api/user/new",
                dataType: "json",
                data: {
                    userId: 50,
                    userName: "testPin"
                },
                success: function (data) {
                    console.log(data);
                    $("#balance").val(data[0].balance);
                }
            });
        }
    });
    $.ajax({
        type: "GET",
        url: "https://customer-api-shopping.herokuapp.com/api/customers/" + localStorage.getItem("id"),
        dataType: "json",
        success: function (data) {
            $("#firstnameA").val(data.name);
            $("#lastnameA").val(data.lastname);
            $("#emailA").val(data.email);
            $("#addressA").val(data.address);
            $("#telNoA").val(data.telno);
        }
    });
    $("#updateProfile").click(function () {
        var formdata = {
            id: localStorage.getItem("id"),
            password: localStorage.getItem("password"),
            address: $("#addressA").val(),
            email: $("#emailA").val(),
            lastname: $("#lastnameA").val(),
            name: $("#firstnameA").val(),
            telno: $("#telNoA").val()
        };
        $.ajax({
            type: "PUT",
            url: "https://customer-api-shopping.herokuapp.com/api/customers/" + localStorage.getItem("id"),
            dataType: "json",
            data: formdata,
            contentType: "application/json",
            success: function (data) {
                alert("Update Complete!");
                location.reload();
            }
        });
    });
    $("#addMoney").click(function () {
        $.ajax({
            type: "GET",
            url: "https://api-payment.herokuapp.com/api/balance/"+localStorage.getItem("id")+"/increase/"+$("#money").val(),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                alert("Complete!");
                location.reload();
            }
        });

    });
});