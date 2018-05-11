$(function () {
    $("#sessionID").text(localStorage.getItem("name"));
    $.ajax({
        type: "GET",
        url: "https://productapi977377.herokuapp.com/Products.php/api/products",
        dataType: "text",
        success: function (data) {
            var obj = jQuery.parseJSON(data);
            console.log(obj);
            for (i = 0; i < obj.length; i++) {
                var id = obj[i].productID;
                var title = obj[i].title;
                var img = obj[i].picture;
                var price = obj[i].price;
                $('#rowHome').append('<div class="col-lg-3 showProduct"><div id="title">' +
                    '<h3><b><u>' + title + '</u></b></h3></div><div id="pic"><img class="show" src' +
                    '="' + img + '" alt="' + title + '"></div><p></p><div id="desc"><ul class="list-inline">' +
                    '<li><h4>Price : ' + price + ' bath</h4></li><li><button id="addChart" type="button"' +
                    ' value="' + id + '" class="btn .btn-xs btn-success">Buy Now</button></li></ul>' +
                    '</div><div id="review"><ul class="list-inline"><li><span class=' +
                    '"glyphicon glyphicon-star"></span><b>Rating</b> : 4/5 </li><li><span class' +
                    '="glyphicon glyphicon-comment"></span><b>Comment</b> : well done</li><li><b>' +
                    'Rating?</b> : <input id="inputRat" type="text">&nbsp;*(0-5)</li><br><p></p><li>' +
                    '<b>Comment?</b> : <input id="inputCom" type="text"></li><li><button id=' +
                    '"reviewProduct" type="button" value="' + id + '" class="btn .btn-xs btn-info">Review' +
                    '</button></li></ul></div></div>');
            }
        }
    });
    $(".showProduct").mouseover(function () {
        $(".showProduct").css("background-color", "rgba(255, 255, 255, 0.164)");
    });
    $(".showProduct").mouseout(function () {
        $(".showProduct").css("background-color", "");
    });
    $("#addChart").click(function (e) {

    });
    $("#addChart").click(function (e) {

    });
});