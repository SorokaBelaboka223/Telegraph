$(function(){

window.onscroll = function showHeader() {
    let header = document.querySelector(".header");
    if (window.pageYOffset > 115){
        header.classList.add("header-fixed");
    } 
    else {
        header.classList.remove("header-fixed")
    }
}

new WOW().init();
});