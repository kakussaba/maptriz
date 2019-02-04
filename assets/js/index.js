$(document).ready(function() {
    $('.animsition').animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 600,
      outDuration: 400,
      linkElement: 'a:not([target="_blank"]):not([href^="#"]):not(.ignore-link):not([data-ignore]):not(.yith-wcan-reset-navigation):not([href^="tel"]):not([href^="mailto"])',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingClass: 'animsition-loading',
      loadingInner: '',
      timeout: 3000,
      onLoadEvent: true,
      transition: function(url){ window.location.href = url; }
    });

    $('.menu-item a').click(function() {
      let element = $(this).prop('hash');
      let offset = 0;

      $('html, body').animate({
        scrollTop: $(element).offset().top + offset
      }, 2000);

      $('a').removeClass('active');
      $(this).addClass('active');

    });

  $('#conheca-nossas-solucoes').click(function() {
    let element = $(this).prop('hash');
    let offset = 0;

    $('html, body').animate({
      scrollTop: $(element).offset().top + offset
    }, 2000);
  });

    $('#clientes .carousel.carousel-slider').carousel({
      fullWidth: true,
      duration: 100,
      indicators: true
    });

  $('.modal').modal();

  $('.produto').mouseenter(
    function () {
      let id = $(this).attr('id');
      let tag = '#' + id.toString() + '-tag';

      $(tag).addClass('hovered');
    });

  $('.produto').mouseleave(function () {
      let id = $(this).attr('id');

      $('#' + id + '-tag').removeClass('hovered');
    }
  ).mouseleave();
});

(function() {
  let css = document.createElement('link');
  css.href = 'assets/fonts/font-awesome.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(css);

  $('html, body').animate({scrollTop: 0}, 'fast');
})();
