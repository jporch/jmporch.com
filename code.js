var $ = jQuery;
$(document).ready(function() {
  $(".sidebar-header").click(function(){
    toggleSidebar();
  })
  $('.sidebar-buttons').children().click(function(event) {
    window.location.hash = $(this).attr('class');
    event.preventDefault();
    toggleSidebar();
  });
  $(window).on('hashchange', function() {
    // Handles skipping navbar for accessibility
    if (window.location.hash == '#content') {
      history.replaceState(null,null,window.location.href.split("#")[0]);
      return;
    }
    dispTab();
  });
  $('.collapse-heading').click(function() {
    toggleIcon($(this).children('span')[0]);
    $(this).next('.collapse-body').slideToggle(400);
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

function toggleIcon(element) {
  element.classList.toggle('minus-icon');
  element.classList.toggle('plus-icon');
}

function clearPage() {
  $('.content-panel').hide();
};

function newPage() {
  dispTab(0);
};

function dispTab(speed=400) {
  clearPage();
  var hash = window.location.hash;
  if (!(['#about','#work','#education','#portfolio','#hobbies'].includes(hash))) {
    hash = '#about';
  }

  $(hash).fadeIn(speed);
  if (isDesktop()) {
    $(hash+'-text').scrollTop(0);
  } else {
    window.scrollTo(0,0);
  }
}
