$(document).ready(function() {
  $(window).scroll(function() {
    if( $(window).scrollTop() > 40) {
      $('.navbar').addClass('navbar-fixed');
    }else {
      $('.navbar').removeClass('navbar-fixed');
    }

    if( $(window).scrollTop() <= 1599) {
      $('a.active').removeClass('active');
      $('#vs1').addClass('active');
    }else if( $(window).scrollTop() >= 1600 && $(window).scrollTop() < 4200) {
      $('a.active').removeClass('active');
      $('#order1').addClass('active');
    }else {
      $('a.active').removeClass('active');
      $('#chaos1').addClass('active');
    }
  });

  $('a').on('click', function(e){
    e.preventDefault();
    $('a.active').removeClass('active');
    $(this).closest('a').addClass('active');
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });

  $('.nav-icon').on('click', function() {
    if ( $('.sub-nav').hasClass('open')) {
      $('.sub-nav').removeClass('open');
    }else {
      $('.sub-nav').addClass('open');
    }
  });

  $('.sub-nav-list a').on('click', function() {
    if ( $('.sub-nav').hasClass('open')) {
      $('.sub-nav').removeClass('open');
    }else {
      $('.sub-nav').addClass('open');
    }
  });
});
