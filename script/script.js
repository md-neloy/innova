$(".counter").counterUp({
  delay: 10,
  time: 1000,
});
 $(".for_slid").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: ".for_nav",
   prevArrow: '<i class="fa-solid fa-angle-left pre_arr"></i>',
   nextArrow: '<i class="fa-solid fa-chevron-right next_arr"></i>',
 });
 $(".for_nav").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   asNavFor: ".for_slid",
   dots: false,
   arrows: false,
   centerMode: false,
   focusOnSelect: true,
 });