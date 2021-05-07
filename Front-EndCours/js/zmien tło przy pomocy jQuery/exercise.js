$('.interface').on('click', function () {

    if ($(this).hasClass('orange')) {
        $('body').css({
            "background-color": "orange"
        })
    }

    if ($(this).hasClass('green')) {
        $('body').css({
            "background-color": "green"
        })
    }

    if ($(this).hasClass('increase')) {
        $('p').css("font-size", "+=2px")
    }

    if ($(this).hasClass('move')) {
        $('p').css("margin-left", "+=2px")
    }


})