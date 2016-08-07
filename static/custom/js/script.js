
function fixHeight() {
  var container = document.getElementsByClassName('parallex-section');
  for(i=0; i < container.length; i+=1){
    container[i].style.height = window.innerHeight + "px";
  }
}

window.addEventListener('resize', fixHeight);
window.onload = function() {
  fixHeight();
  $('.parallex-section').parallax();
}
