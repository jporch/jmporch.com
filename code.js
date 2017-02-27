function clearPage() {
  $('div#about').hide();
  $('div#work').hide();
  $('div#education').hide();
  $('div#portfolio').hide();
  $('div#hobbies').hide();
};

function newPage() {
  var hash = window.location.hash;	
  switch(hash.toString()) {
    case '#about':
      dispAbout();
      break;
    case '#work':
      dispWork();
      break;
    case '#education':
      dispEducation();
      break;
    case '#portfolio':
      dispPortfolio();
      break;
	case '#hobbies':
      dispHobbies();
      break;
    default:
      dispAbout();
      break;
	}
};

function dispAbout() {
  clearPage();
  $('div#about').fadeIn(400);
  $('div#about-text').scrollTop(0);
};

function dispWork() {
  clearPage();
  $('div#work').fadeIn(400);
  $('div#work-text').scrollTop(0);  
};

function dispEducation() {
  clearPage();
  $('div#education').fadeIn(400);
  $('div#education-text').scrollTop(0);
};

function dispPortfolio() {
  clearPage();
  $('div#portfolio').fadeIn(400);
  $('div#portfolio-text').scrollTop(0);
};

function dispHobbies() {
  clearPage();
  $('div#hobbies').fadeIn(400);
  $('div#hobbies-text').scrollTop(0);
};