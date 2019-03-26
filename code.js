function showTab(id) {
    var active = document.getElementsByClassName("active");
    for (var a = 0; a < active.length; ++a) {
        active[a].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}

function isMobile() {
    return window.matchMedia("screen and (max-width: 640px)").matches;
}
function isDesktop() {
    return window.matchMedia("screen and (min-width: 641px)").matches;
}

function toggleSidebar(spd=400,que=false) {
    if (isMobile()){
    }
}

function toggleIcon(element) {
    element.classList.toggle('minus-icon');
    element.classList.toggle('plus-icon');
}

function toggleCollapse(collapse) {
    toggleIcon(collapse.children[0]);
    collapse.nextElementSibling.classList.toggle("visible");
    if(collapse.nextElementSibling.classList.contains("visible")) {
        collapse.nextElementSibling.style.maxHeight = collapse.nextElementSibling.scrollHeight + 'px';
    } else {
        collapse.nextElementSibling.style.maxHeight = 0;
    }
}