(function () {
  jQuery(function($) {

    // apply polyfill for object-fill css rule
    var $objFitImages = $('.js-ofImg');
    if ($objFitImages.length > 0) {
      objectFitImages($objFitImages);
    }

    // Mach media usage example
    /*
     if(window.matchMedia(mediaBP.medium).matches) {
     // do something on screen bigger than 768px
     }
     */
    var mediaBP = {
      medium: 'only screen and (min-width: 768px)',
      large: 'only screen and (min-width: 1024px)',
      xlarge: 'only screen and (min-width: 1200px)',
      xxlarge: 'only screen and (min-width: 1440px)'
    };

    // Toggle function $('.js-toggle') should have data-toggle attr with class name or ID of target element
    /* <button class="js-toggle" data-toggle=".target-element-class">Menu</button> */
    var $toggleElem = $('.js-toggle');

    $toggleElem.click(function (e) {
      e.preventDefault();
      var $toggleTarget = $($(this).data('toggle'));
      $toggleTarget.toggleClass('is-open');
      e.stopPropagation();
      hideOnClickOutside($(this).data('toggle'));
    });

    function hideOnClickOutside(element) {
      $(document).click(function(event) {
        if(!$(event.target).closest(element).length) {
          if($(element).is(":visible")  && $(element).hasClass('is-open')) {
            $(element).removeClass('is-open');
          }
        }
      });
    }
    $('.slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

      $("a.section_link__first").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__first" });
          $('body').addClass('js-section-popup');
      });
      $("a.section_link__second").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__second" });
          $('body').addClass('js-section-popup');
      });
      $("a.section_link__third").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__third" });
          $('body').addClass('js-section-popup');
      });
      $("a.section_link__forth").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__forth" });
          $('body').addClass('js-section-popup');
      });
      $("a.section_link__fifth").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__fifth" });
          $('body').addClass('js-section-popup');
      });
      $("a.section_link__sixth").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__sixth" });
          $('body').addClass('js-section-popup');
      });
      $("a.section_link__seventh").on("click", function(e) {
          e.preventDefault();
          $(this).simplePopup({ type: "html", htmlSelector: "#section_popup__seventh" });
          $('body').addClass('js-section-popup');
      });
      $(".close").on("click", function(e) {
          e.preventDefault();
          $('body').removeClass('js-section-popup');
      });
      $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href")
        if ($(window).width()>1023) {
          var destination = $(elementClick).offset().top-120;
        }
        else {
          var destination = $(elementClick).offset().top;
        }
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 1000);
        return false;
      });
      $('.site_header-nav a').click(function (e) {
        $('.site_header').removeClass('is-open');
      });
  });
  
})();
