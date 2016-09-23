$(function () {
    //$(".col-md-8").text("SOMETHING");
    //$(window).click(function () {
    $(".col-md-4").animate({
        left: "0px"
    }, 200, function () {
        $(".col-md-4 .headshot").animate({
            top: "80px"
        }, 100);
    });
    $(".col-md-8").animate({
        left: "0px"
    }, 200);
    //$(".col-md-8").text("SOMETHING CLICK");
    // });


});
