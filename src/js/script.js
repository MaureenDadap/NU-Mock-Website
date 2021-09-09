$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar.homepage");
      var $navBrand = $(".navbar-brand"); 
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());
      $navBrand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });