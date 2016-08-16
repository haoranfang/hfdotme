$( window ).ready(function() {
  var windowInnerHeight = $( window ).innerHeight();
  var windowInnerWidth = $( window ).innerWidth();


  $('.parallax-section-image')
    .css("height", windowInnerHeight + "px")
    .parallax()
    .css("background-position-x", "40%"); // 40% offset for background image
})
.resize(function() {
  if (!navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    $('.parallax-section-image').css("height", $( window ).innerHeight() + "px")
  }
});
