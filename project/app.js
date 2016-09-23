$(function () {
    var x = 0;
    $(window).scroll(function () {
        //        var postition = "px 0px";
        //        $(".back").style.backgroundPosition = x + postition;
        //        $(".block").text(x);

    });

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        var postition = "0px " + scrollVal / 2 + "px";
        //        $(".block").text(postition + "   " + $(window).width());
        $(".back").css("background-position", postition);
    });

    $("a#toggle").click(function () {
        $("#contact").slideToggle();
        return false;
    });


    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 3000);
    });


    var slideCount = $('#slider ul li').length;
    var slideWidth = $(window).width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    var carsoleNow = 1;

    $('#slider ul li').css({
        width: slideWidth
    });
    $('#slider').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slider ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });


    //    $(window).resize(function () {
    //        $(".block").text($(window).width());
    //    });
    $(window).resize(function () {
        $(".block").text($(window).width());
        slideWidth = $(window).width();
        $('#slider ul li').css({
            width: slideWidth
        });
        $('#slider').css({
            width: slideWidth,
            height: slideHeight
        });

        $('#slider ul').css({
            width: sliderUlWidth,
            marginLeft: -slideWidth
        });
    });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $("#list" + carsoleNow).animate({
            backgroundPositionX: -slideWidth / 2
        }, 2000);
        $("#list" + carsoleNow).animate({
            backgroundPositionX: 0
        }, 20);
        $('#slider ul').animate({
            left: +slideWidth
        }, 2000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
            carsoleNow--;
            if (carsoleNow === 0)
                carsoleNow = 4;
            //            $(".block").text("carsoleNow = " + carsoleNow);
        });
    };

    function moveRight() {
        var brforSlider;

        $("#list" + carsoleNow).animate({
            backgroundPositionX: slideWidth / 2
        }, 2000);
        $("#list" + carsoleNow).animate({
            backgroundPositionX: 0
        }, 0);
        $('#slider ul').animate({
            left: -slideWidth
        }, 2000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
            //            $('[id^=list]').css('background-position', '0px');
        });
        carsoleNow++;
        if (carsoleNow === 5)
            carsoleNow = 1;
        //        $(".block").text("carsoleNow = " + carsoleNow);

        //        if (carsoleNow === 1)
        //            brforSlider = 4;
        //        $("#list" + carsoleNow).css('background-position', '');

    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

    //    $(".block").text(x);

    $("[class^=dot]").click(function () {
        var dotId = this.id;
        var dotintId = parseInt(dotId);
        var jump;
        var i;
        //        $(".block").text("clicked" + dotId);

        if (dotintId > carsoleNow)
            jump = dotintId - carsoleNow;
        else
            jump = dotintId - carsoleNow + 4;

        if (jump === 4)
            jump = 0;
        //        for (i = 0; i < jump; i++){
        //            moveRight();
        //            
        //        }
        if (jump === 1) {
            moveRight();
        } else if (jump > 1) {
            moveRight();
            timeoutMoveRight(jump - 1);
        }

    });

    $(".runbar").click(function () {
        var dotId = this.id;
        var dotintId = parseInt(dotId);
        var jump;
        var i;
        //$(".part3 .runbar [class^=xrun]").stop();
        //$(".part3 .runbar [class^=xrun]").css('width', '0px');
        //        $(".block").text("clicked" + dotId);

        if (dotintId > carsoleNow)
            jump = dotintId - carsoleNow;
        else
            jump = dotintId - carsoleNow + 4;

        if (jump === 4)
            jump = 0;
        //        for (i = 0; i < jump; i++){
        //            moveRight();
        //            
        //        }
        if (jump === 1) {
            moveRight();
        } else if (jump > 1) {
            moveRight();
            timeoutMoveRight(jump - 1);
        }
        $(".part3 .runbar [class^=xrun]").start();

    });

    function timeoutMoveRight(i) {
        if (i > 0) {
            setTimeout(function () {
                moveRight();
                timeoutMoveRight(i - 1);
                $(".block").text(i);
            }, 2000);
        }
    }

    function run() {
        if (carsoleNow === 1)
            $(".part3 .runbar [class^=xrun]").css('width', '0px');

        $(".part3 .runbar .xrun" + carsoleNow).animate({
            width: "60px"
        }, 10000, function () {
            moveRight();
            run();
        });
    };

    run();



});
