var $ = jQuery;

$(document).ready(function() {
  $(".sidebar-header").click(function(){
    toggleSidebar();
  })
  $('.sidebar-buttons').children().click(function() {
    window.location.hash = $(this).attr('class');
  });
  $(window).on('hashchange', function() {
    dispTab();
  });
  newPage();
});

function isMobile() {
  return window.matchMedia("screen and (max-width: 640px)").matches;
}
function isDesktop() {
  return window.matchMedia("screen and (min-width: 641px)").matches;
}

function toggleSidebar(speed=400) {
  if (isMobile()){
    $(".sidebar-nav").slideToggle(speed);
    $(".no-scroll").slideToggle(speed);
  }
}

function clearPage() {
  $('.content-panel').hide();
};

function newPage() {
  dispTab(false);
};

function dispTab(minimizeNav=true) {
  clearPage();
  var hash = window.location.hash;
  if (!(['#about','#work','#education','#portfolio','#hobbies'].includes(hash))) {
    hash = '#about';
  }

  $(hash).fadeIn(400);
  if (isDesktop()) {
    $(hash+'-text').scrollTop(0);
  } else {
    window.scrollTo(0,0);
    if(minimizeNav) {
      toggleSidebar();
    }
  }
}
