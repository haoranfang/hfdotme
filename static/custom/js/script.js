$( window ).ready(function() {
  var windowInnerHeight = $( window ).innerHeight() + "px";
  var img = new Image();
  img.src = $('.parallex-section').attr("data-image-src");


  $('.parallex-section')
    .css("height", windowInnerHeight)
    .parallax()
    .css("background-position-x", img.width * 0.4); // 40% offset for background image
})
.resize(function() {
  $('.parallex-section').css("height", $( window ).innerHeight() + "px")
});
