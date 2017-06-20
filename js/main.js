$(document).ready(function() {
  $(window).scroll(function() {
    if( $(window).scrollTop() > 70) {
      $('.navbar').addClass('navbar-fixed');
    }else {
      $('.navbar').removeClass('navbar-fixed');
    }
  });
});
