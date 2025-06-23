window.addEventListener("scroll", function(){
    // var header = document.querySelector("header");
    document.body.classList.toggle("sticky", window.scrollY >50);
});

function myFunction() {
    var x = document.getElementById("topNav");
    if (x.className === "main-container-links") {
      x.className += " responsive";
    } else {
      x.className = "main-container-links";
    }
  }
