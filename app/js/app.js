// Global Javascripts

//Nav Bar

$(function() {
    var doTheScrollThing = function() {
        var distance= $(document).scrollTop();
        var threshold = 450;

        if (distance > threshold) {
            $('#sticky').addClass('stick')
            $('#sticky').removeClass('invisible')
        } else {
            $('#sticky').addClass('invisible')    
            $('#sticky').removeClass('stick')
        } 
    } 

    $(window).scroll(doTheScrollThing)

    // threshold = $('#sticky').offset().top
})

