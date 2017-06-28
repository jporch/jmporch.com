var $ = jQuery;

$(document).ready(function() {
  $(".sidebar-header").click(function(){
    toggleSidebar();
  })
  $(".sidebar-buttons").children().click(function(event){
    window.location.hash = $(this).attr('value');
    dispTab();
    event.preventDefault();
    return false;
  });
  newPage();
});

function toggleSidebar(speed=400) {
  if ($(window).width() < 500){
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
  if ($(window).width() >= 500) {
    $(hash).scrollTop(0);
  } else {
    window.scrollTo(0,0);
    if(minimizeNav) {
      toggleSidebar();
    }
  }
}
