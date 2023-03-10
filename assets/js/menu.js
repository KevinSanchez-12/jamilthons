function mostrarMenu(){
    var menu = document.getElementById("menu");
    menu.style.left = "0";
}
function cerrarMenu(){
    var menu = document.getElementById("menu");
    menu.style.left = "-100%";
    menu.style.transition = "left .4s";
}
function mostrarSearch(){
    var search = document.getElementById("search");
    search.style.top = "0";
}
function cerrarSearch(){
    var search = document.getElementById("search");
    search.style.top = "-100%";
    search.style.transition = "top .4s";
}