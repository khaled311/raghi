$(function() {

  // Toggle open
  $(".drop").on("click", function(e) {
    $(this).find(".subMenu").slideToggle();
    $(this).siblings().find(".subMenu").slideUp();
    $(this).find(".ar").toggleClass("open");
    $(this).siblings().find(".ar").removeClass("open");
    e.stopPropagation();
});


  // Toggle open
  $(".subMenu > li").on("click", function() {
      $(this).find(".arr-left").toggleClass("open");
  });


  // Toggle open
  $(".subMenu > li").on("click", function() {
      $(this).find(".sub").slideToggle();
      $(this).siblings().find(".sub").slideUp();
      $(this).siblings().find(".arr-left").removeClass("open");
  });


  // open Side Nav
  $(".bars").on("click", function() {
      $(".sideNav").toggleClass("open");
      $(".navover").toggleClass("open");
      $("body").css("overflow", "hidden");
  });


  // Close Side Nav
  $(".navover, .close1").on("click", function() {
      if($(".sideNav").hasClass("open")){
          $(".bars").removeClass("active");
          $(".navover").removeClass("open");
          $(".sideNav").toggleClass("open");
          $("body").css("overflow", "auto");
      }
  });

  $(function () {
    $(".icon").click(function () {
      $(this).toggleClass("active")
    });
  });

  // Search
  $(".srch").on("click", function() {
    $(".xtr form").toggleClass("open");
  });

  $(".xtr form").on("click", function() {
    $(this).removeClass("open");
  });

  $(".xtr form .cont").on("click", function(e) {
    e.stopPropagation();
  });

  // Search
  $(".search form > button").on("click", function(e) {
    e.preventDefault();
    $(".search form .serach-content").addClass("open");
    $(".search .over").addClass("open");
    $(".links").addClass("open");
    $(this).addClass("hide");
  })

  $(".search .over").on("click", function() {
    $(this).removeClass("open");
    $(".search form > button").removeClass("hide");    
    $(".search form .serach-content").removeClass("open");
    $(".links").removeClass("open");
  })

  // Sticky Navbar
  $(window).on("scroll", function() {
    if($(window).scrollTop() >= $("nav").innerHeight()){
        $("nav").addClass("scroll")
    }else{
        $("nav").removeClass("scroll")
    }
  });

  // Document Animation
  $("header .bottom").on("click", function() {
    $("html, body").animate({
      scrollTop: $(".main").offset().top
    }, 1000)
  })

  // Clients Slider
  $('.clients .owl-carousel').owlCarousel({
    autoplay: false,
    rtl:true,
    loop:true,
    items: 6,
    smartSpeed: 1000,
    responsive:{
      0:{
        items:1,
        nav: false,
        dots: true
      },
      600: {
        items: 2
      },
      768:{
        items:3
      },
      992:{
        items:4,
        nav: true,
        dots: false
      },
      1200:{
        items:6
      }
    },
    navText: ["<span></span>","<span></span>"]
  });

  if($(window).width() < 768){
    $(".companies .content").addClass("owl-carousel")
  }else{
    $(".companies .content").removeClass("owl-carousel")
  }

  $('.companies .owl-carousel').owlCarousel({
    rtl:true,
    autoplay: false,
    loop:true,
    margin:5,
    nav:false,
    dots: true,
    items: 1,
    responsive:{
      0:{
        items:1,
      },
      600:{
        items:2
      }
    }
  });
})


try {
  // Map
  var x = 0;
  var locations = [
      ['قصر السرايا الرياض', 24.6764335,46.6721885, ++x]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 6,
      center: new google.maps.LatLng(24.75,46.68),
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  var marker, i;

  for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          icon: '../images/pin.png',
          map: map
      });
  }
} catch (error) {
  
}

try {
  // Parallax Effect
  $(window).on("scroll", function() {
    var ypos = window.pageYOffset,
    img = document.querySelector("header > img");
    if(img){
      img.style.top = (ypos * 0.3) + "px";
    }
  });
} catch (error) {
  
}