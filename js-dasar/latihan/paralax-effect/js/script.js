$(window).scroll(function(){

    // get scroll pos relative to top window area
    var wScroll = $(this).scrollTop();

    // apply translate to h1
    $('h1').css({
        'transform' : 'translate(0px, ' + wScroll + 'px)'
    });

    // apply translate to kotak
    $('.kotak').css({
        'transform' : 'translate(0px, ' + wScroll/5 + '%)'
    });

    //console.log(wScroll);
});