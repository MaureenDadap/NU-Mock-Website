$(function () {
    $(document).scroll(function () {
      var $navHome = $(".navbar.homepage");
      var $nav = $(".navbar");
      var $navBrand = $(".navbar-brand"); 

     // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height());

      $navHome.toggleClass('scrolled', $(this).scrollTop() > $navHome.height());
      $navHome.toggleClass('fixed-top', $(this).scrollTop() > $navHome.height());
      $navBrand.toggleClass('scrolled', $(this).scrollTop() > $navHome.height());
    });
  });