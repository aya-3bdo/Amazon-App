/* Resize select width according to selected text */
$(document).ready(function () {
  $("#option-width").html($("#select-menu option:selected").text());
  $("#select-menu").width($("#select-width").width());

  $("#select-menu").change(function () {
    $("#option-width").html($("#select-menu option:selected").text());
    $(this).width($("#select-width").width());
  });

  // $(".responsive").slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 400,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ],
  // });


});
