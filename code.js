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
  return window.matchMedia("screen and (max-width: 499px), screen and (max-width: 1440px) and (min-resolution: 2dppx)").matches;
}
function isDesktop() {
  return window.matchMedia("screen and (min-width: 500px) and (max-resolution: 1dppx), screen and (max-width: 1080px) and (min-resolution: 2ddpx)").matches;
}

function toggleSidebar(speed=400) {
  if (isMobile()){
    $(".sidebar-nav").slideToggle(speed);
    $(".no-scroll").slideToggle(speed);
  }
}

function clearPage() {
  $('#about').hide();
  $('#work').hide();
  $('#education').hide();
  $('#portfolio').hide();
  $('#hobbies').hide();
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
