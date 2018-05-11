$(function () {
    $("#sessionID").text(localStorage.getItem("name"));
    $.ajax({
        type: "GET",
        url: "https://pacific-peak-27279.herokuapp.com/api/ProductReview/",
        dataType: "json",
        success: function (res) {
            $.ajax({
                type: "GET",
                url: "https://productapi977377.herokuapp.com/Products.php/api/products",
                dataType: "text",
                success: function (data) {
                    var obj = jQuery.parseJSON(data);
                    for (i = 0; i < obj.length; i++) {
                        var id = obj[i].productID;
                        var title = obj[i].title;
                        var img = obj[i].picture;
                        var price = obj[i].price;
                        var countProduct = 0;
                        var sumRate = 0;
                        var comment = '';
                        for (j = 0; j < res.length; j++) {
                            if (id == res[j].productID) {
                                countProduct++;
                                sumRate = sumRate + res[j].rating;
                                comment = comment + res[j].comment + ", ";
                            }
                        }
                        $('#rowHome').append('<div class="col-lg-3 showProduct"><div id="title">' +
                            '<h3><b><u>' + title + '</u></b></h3></div><div id="pic"><img class="show" src' +
                            '="' + img + '" alt="' + title + '"></div><p></p><div id="desc"><ul class="list-inline">' +
                            '<li><h4>Price : ' + price + ' bath</h4></li><li><button id="addChart' + id + '" type="button"' +
                            ' value="' + id + '" class="btn .btn-xs btn-success">Buy Now</button></li></ul>' +
                            '</div><div id="review"><ul class="list-inline"><li><span class=' +
                            '"glyphicon glyphicon-star"></span><b>Rating</b> : ' + (sumRate / countProduct).toFixed(1) + '/5 </li><li><span class' +
                            '="glyphicon glyphicon-comment"></span><b>Comment</b> : ' + comment + '</li><li><b>' +
                            'Rating?</b> : <input id="inputRat' + id + '" type="text">&nbsp;*(0-5)</li><br><p></p><li>' +
                            '<b>Comment?</b> : <input id="inputCom' + id + '" type="text"></li><li><button id=' +
                            '"reviewProduct' + id + '" type="button" value="' + id + '" class="btn .btn-xs btn-info re">Review' +
                            '</button></li></ul></div></div>');
                    }
                    $("#reviewProduct1").click(function () {
                        $.ajax({
                            type: "GET",
                            url: "https://pacific-peak-27279.herokuapp.com/api/ProductReview/",
                            dataType: "json",
                            contentType:"application/json",
                            data: {
                                "productID": 1,
                                "rating": $("#inputRat").val(),
                                "comment": $("#inputCom").val(),
                                "reviewer": localStorage.getItem("id")
                            },
                            success: function (res) {
                                alert('Review Complete');
                                location.reload();
                            }
                        });
                    });
                    $("#addChart1").click(function () {
                        $.ajax({
                            type: "POST",
                            url: "https://api-payment.herokuapp.com/api/payment/new",
                            dataType: "json",
                            contentType:"application/json",
                            data: {
                                "userId": localStorage.getItem("id"),
                                "orderId": "001",
                                "webName": "Shopping Center Online",
                                "price": 30
                            },
                            success: function (res) {
                                alert('Buy Complete');
                                location.reload();
                            }
                        });
                    });
                }
            });
        }
    });
    // Problem! Logic for click button and get ProductID from button.
    // So, I can't write use function Review and Buy Now.
    // I fixed problem by write each action by identify id but It's not good fix problem by have ProductID1 of Buy and Review is example..

});