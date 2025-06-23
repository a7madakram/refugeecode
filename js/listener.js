window.addEventListener("scroll", function(){
    // var header = document.querySelector("header");
    document.body.classList.toggle("sticky", window.scrollY >50);
});