
//Nav Bar

$(function(){  //to make scroll we want to attach the scroll event to the window

$(window).scroll(doTheScrollThing)

threshold = $('#sticky').offset().top

})



function doTheScrollThing(){
    var distance= $(document).scrollTop()
    console.log(distance)  //no quotes means variable, quotes means a string

    var threshold = 450
    

    if(distance > threshold) {
        $('#sticky').addClass('stick')
    }else{
        $('#sticky').removeClass('stick')
    }

    if(distance < threshold) {
      $('#sticky').addClass('invisible')  
    } else {
        $('#sticky').removeClass('invisible')
    }

}

//make a click even on the button

//Portfolio Slider

jQuery(document).ready(function($) {
 
  $('#content-slider-1').royalSlider({
    autoHeight: true,
    arrowsNav: false,
    fadeinLoadedSlide: false,
    controlNavigationSpacing: 0,
    controlNavigation: 'tabs',
    imageScaleMode: 'none',
    imageAlignCenter:false,
    loop: false,
    loopRewind: true,
    numImagesToPreload: 6,
    keyboardNavEnabled: true,
    usePreloader: false
  });
});

//Lightbox

$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });
});

// //Click event
// $(function(event) {

//   // scroll down when the button is clicked
//   $('.click').click(function(){
    
//     $('.click').toggleclass("open-->this is the class that you want your action to end on");
//   });

// });



