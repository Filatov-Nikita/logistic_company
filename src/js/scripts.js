$(document).ready(function() {

  $('.slider1').slick({
      arrows: false,
      dots: true,
      dotsClass: 'slick-dots1'
  });

  $('.slider2').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots1',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });

    /*----------------------------*/   
    var slider =  $('.services .slider-container').slick({
      arrows: false,
      dots: false,
      draggable: false,
      fade: true,
      cssEasy: 'step-end',
      waitForAnimate: false
    });
    $('.full .item').on('click', function(event) {
      $('.full .item').css('opacity', '0.7');
      var data = $(this).data('index');
      $(this).css('opacity', '1');
      slider.slick('slickGoTo', data);
    });

});
          