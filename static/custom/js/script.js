$( window ).ready(function() {
  var windowInnerHeight = $( window ).innerHeight();
  var windowInnerWidth = $( window ).innerWidth();


  $('.parallax-section-image')
    .css("height", windowInnerHeight + "px")
    .parallax()
    .css("background-position-x", "40%"); // 40% offset for background image
})
.resize(function() {
  $('.parallax-section-image').css("height", $( window ).innerHeight() + "px")
});
