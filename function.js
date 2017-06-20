var $animation_elements = $('.animation-element');
var $window = $(window);
var window_height = $window.height();

function check_if_in_view(window_height) {

    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('animate');
        }
    });
}

$(window).resize(function (){
    window_height = $window.height();
});

$(window).scroll(function () {
    if (window.scrollY > 50) {
        $('header').css('background-color', '#fcfcfc');
    } else {
        $('header').css('background-color', 'transparent');
    }
        console.log(window.scrollY,(window_height / 2));
    if ((window.scrollY + 75) > ((window_height / 2))) {
        $('#logo').addClass('scroll');
        $('#logo-container').addClass('scroll');
    }else {
        $('#logo').removeClass('scroll');
        $('#logo-container').removeClass('scroll');
    }

    check_if_in_view(window_height);

});

$(window).resize();
$(window).scroll();