$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top;
    const art2Height = $art2.outerHeight(true);

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight(true);

    const $art4 = $('.art4');
    const art4FromTop = $art3.offset().top;
    const art4Height = $art3.outerHeight(true);


    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        $art2.addClass('active');
    }
    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        $art3.addClass('active');
    }

    if (scrollValue > art4FromTop + art4Height - windowHeight) {
        $art4.addClass('active');
    }

    // sekcja nr 2

    const  $op1= $('.op1');
    const  $op2= $('.op2');

    const op1FromTop=$op1.offset().top;
    const op2FromTop=$op2.offset().top;

    const op1Height = $op1.outerHeight();
    const op2Height = $op2.outerHeight();

    if (scrollValue > op1FromTop + op1Height / 2 - windowHeight ){
        $op1.addClass('active');
    }
        if (scrollValue > op2FromTop + op2Height / 2 - windowHeight){
        $op2.addClass('active');
    }


    if (scrollValue < 100) {
        $('article').removeClass('active');
    }

})

function addActive(x) {
    $(x).addClass('active');
}
