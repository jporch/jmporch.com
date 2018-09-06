var $ = jQuery;
$(document).ready(function() {
  $(".sidebar-header").click(function(){
    toggleSidebar();
  });
});

function isMobile() {
  return window.matchMedia("screen and (max-width: 640px)").matches;
}
function isDesktop() {
  return window.matchMedia("screen and (min-width: 641px)").matches;
}

function toggleSidebar(spd=400,que=false) {
  if (isMobile()){
    $(".sidebar-nav").slideToggle({speed: spd,queue: que});
    $(".no-scroll").slideToggle({speed: spd,queue: que});
  }
}

function toggleIcon(element) {
  element.classList.toggle('minus-icon');
  element.classList.toggle('plus-icon');
}