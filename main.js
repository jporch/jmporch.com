var $ = jQuery;
$(document).ready(function() {
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
  newPage();
});

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
