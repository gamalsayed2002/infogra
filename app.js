window.onscroll = function () {
  if (scrollY > 50) {
    let header = document.querySelector("header");

    header.style.top = "0";
    header.style.padding = "30px 0";
    header.style.background = "rgba(0 0 0 / 70%)";
    header.style.backdropFilter = "blur(5px)";
  } else {
    let header = document.querySelector("header");

    header.style.padding = "40px 0";
    header.style.background = "transparent";
  }
};
// show nav
let menu = document.querySelector(".container .menu");
let ul = document.querySelector("header nav ul");
let line_1 = document.querySelector("header nav .menu .line-1");
let line_2 = document.querySelector("header nav .menu .line-2");
let line_3 = document.querySelector("header nav .menu .line-3");

menu.addEventListener("click", () => {
  ul.classList.toggle("show");
  line_1.classList.toggle("line-1-clicked");
  line_2.classList.toggle("line-2-clicked");
  line_3.classList.toggle("line-3-clicked");
});
// start nav on media screen

