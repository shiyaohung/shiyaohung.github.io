$(function () {

    var isZoomIn = 0;
    var isZoomOut = 0;
    var liClass = "os";

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        var postition = "0px " + scrollVal + "px";
        //        $("nav").text(postition + "   " + $(window).width());

        if (scrollVal > 100) {
            //            $("nav").text(postition + "   " + $(window).width());
            $("nav").css('position', 'fixed');
            $("nav").css('top', '0px');
            $("nav").css('background-color', 'rgba(255, 255, 255, 0.9)');
            //            $("nav img").css("top", "0px");
            $(".part1").css("margin-top", "100px");
            $("a").css('color', '#888');
            if (!isZoomIn) {
                zoomOut();
            }

        } else {
            //            $("nav").text(postition + "   " + $(window).width());
            $("nav").css('position', '');
            $("nav").css('top', '0px');
            $("nav").css('background-color', '#8db1f1');
            $("a").css('color', 'white');
            $(".part1").css("margin-top", "0px");
            //$("nav img").css("top", "0px");
            if (isZoomIn) {
                zoomIn();
            }
            //$("nav img").css("top", "-100px");
        }
        //$(".back").css("background-position", postition);
    });

    $(".head li").mouseover(function () {
        liClass = this.id;
        $("nav ul.os").css("display", "none");
        $("nav ul." + liClass).css("display", "inline-block");
        //$(".part1").text(liClass);
    });

    $(".head li").mouseout(function () {
        liClass = this.id;
        $("nav ul." + liClass).css("display", "none");
        $("nav ul.os").css("display", "inline-block");
        //$(".part1").text(liClass);
    });

    $("nav").mouseenter(function () {
        $("nav ul.os").css("display", "none");
        $("nav ul." + liClass).css("display", "inline-block");
        //$(".part1").text("124" + liClass);
    });

    $("nav").mouseleave(function () {
        $("nav ul." + liClass).css("display", "none");
        $("nav ul.os").css("display", "inline-block");
        //$(".part1").text("liClass");
        liClass = "os";
    });


    function zoomIn() {
        isZoomIn = 0;
        $("nav img").animate({
            width: "200px",
            height: "200px",
            top: "-103px",
            left: "-=50px"
        }, 100, function () {
            //$("nav img").css("top", "-100px");
        });

        $("nav").css("box-shadow", "0px 3px 10px #888888");
    }

    function zoomOut() {
        isZoomIn = 1;
        $("nav img").animate({
            width: "100px",
            height: "100px",
            top: "-60px",
            left: "+=50px"
        }, 100, function () {
            //$("nav img").css("top", "0px");
        });
    }
});
