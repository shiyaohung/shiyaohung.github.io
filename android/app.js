$(function () {
    var windowWidth = 0;
    var isLiClick = [0, 0, 0];
    windowWidth = $(window).width();
    $(".part1 #right").css("width", windowWidth);
    $(".box").css("width", (windowWidth + "400px"));
    //    $("nav .right").text(windowWidth);
    var isClicked = 0;
    $("nav .left").click(function () {
        if (!isClicked) {
            isClicked = 1;
            //            $("nav .right").text("clicked");
            $(".box").animate({
                left: "+=400px"
            }, 1000);
            $(".part1 #right").animate({
                width: "-=400px"
            }, 1000);
            $(".part1 #right").addClass("overlay");
            if (windowWidth < 768) {
                $(".part1 #right").css("background-color", "black");
                $(".part1 #right").css("opacity", "0.7");
            }
        } else {
            isClicked = 0;
            //            $("nav .right").text("unclicked");
            $(".box").animate({
                left: "-=400px"
            }, 1000);
            $(".part1 #right").animate({
                width: "+=400px"
            }, 1000);
            $(".part1 #right").css("background-color", "#abdfdf");
            $(".part1 #right").css("opacity", "1");
        }
    });

    $(window).resize(function () {
        windowWidth = $(window).width();
        $(".part1 #right").css("width", windowWidth);

        if (isClicked) {
            $(".part1 #right").css("width", windowWidth - 400);
        }

        if (windowWidth < 768 && isClicked) {
            $(".part1 #right").css("background-color", "black");
            $(".part1 #right").css("opacity", "0.7");
        } else {
            $(".part1 #right").css("background-color", "#abdfdf");
            $(".part1 #right").css("opacity", "1");
        }

    });

    $(".part1 #right").click(function () {
        if (windowWidth < 768 && isClicked) {
            isClicked = 0;
            //            $("nav .right").text("unclicked");
            $(".box").animate({
                left: "-=400px"
            }, 1000);
            $(".part1 #right").animate({
                width: "+=400px"
            }, 1000);
            $(".part1 #right").css("background-color", "#abdfdf");
            $(".part1 #right").css("opacity", "1");
        }
    });

    $(".part1 #left ul li").click(function () {
        var id = parseInt(this.id);

        if (!isLiClick[id - 1]) {
            $(".li" + id + " li").css("display", "block");
            //            $("nav .right").text(id);
            isLiClick[id - 1] = 1;
            $(".li" + id + " .icon").css("transform", "rotate(45deg)");
        } else {
            $(".li" + id + " li").css("display", "none");
            //            $("nav .right").text(id);
            isLiClick[id - 1] = 0;
            $(".li" + id + " .icon").css("transform", "rotate(0deg)");
        }
    });
});
