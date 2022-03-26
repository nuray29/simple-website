const text = document.querySelector(".animation");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span1>" + splitText[i] + "</span1>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span1 = text.querySelectorAll("span1")[char];
    span1.classList.add("fade");
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}
function complete() {
    clearInterval(timer);
    timer = null;
}



var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}



var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
    slide.style.transform = "translateX(0px)";
    for (i = 0; i < 3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function () {
    slide.style.transform = "translateX(-1000px)";
    for (i = 0; i < 3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function () {
    slide.style.transform = "translateX(-2000px)";
    for (i = 0; i < 3; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}


const scrollToTop = document.querySelector(".scroll");
let isMilestonesLoaded = false;

window.addEventListener("scroll", () => {
    window.pageYOffset > 400
        ? (scrollToTop.style.display = "block")
        : (scrollToTop.style.display = "none");
});
scrollToTop.addEventListener("click", () => {
    window.scroll({ top: 0 });
});