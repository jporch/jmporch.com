function showTab(id) {
    var active = document.getElementsByClassName("active");
    for (var a = 0; a < active.length; ++a) {
        active[a].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}

function isMobile() {
    return window.matchMedia("screen and (max-width: 940px)").matches;
}
function isDesktop() {
    return window.matchMedia("screen and (min-width: 941px)").matches;
}

function toggleSidebar() {
    if (isMobile()){
        nav = document.getElementById("nav-content");
        nav.classList.toggle("visible");
        if(nav.classList.contains("visible")) {
            nav.style.maxHeight = nav.scrollHeight + 'px';
        } else {
            nav.style.maxHeight = 0;
        }
    }
}