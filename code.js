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

document.addEventListener("DOMContentLoaded", function(){
    var collapse = document.getElementsByClassName("collapse");
    for (var c = 0; c < collapse.length; ++c) {
        collapse[c].children[0].onclick = function() {
            toggleIcon(this.children[0]);
            console.log(this.nextElementSibling);
            this.nextElementSibling.classList.toggle("minimized");
        };
    }
});