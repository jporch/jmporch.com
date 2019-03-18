function showTab(id) {
    console.log(id);
    var active = document.getElementsByClassName("active");
    for (var a = 0; a < active.length; ++a) {
        active[a].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}