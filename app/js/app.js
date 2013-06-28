

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