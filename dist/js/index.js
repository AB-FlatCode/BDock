// Hero stroke text
const strokeTagline = document.querySelector('#textStroke path');


let mouse = document.querySelector(".cursor");
let mouseTxt = mouse.querySelector("span");


function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;
  if (item.classList.contains('btn') || item.classList.contains('hero-socials__item') ||
    item.classList.contains('header-logo__img') || item.classList.contains('header-menu') ||
    item.classList.contains('header-menu__text')) {
    mouse.classList.add('cursor-active-link');
    mouseTxt.innerHTML = "";

  } else {
    mouse.classList.remove('cursor-active-link');
  }

  if (item.classList.contains('showcase-wrapper') || item.classList.contains('showcase-content') ||
    item.classList.contains('showcase-content__category') ||
    item.classList.contains('showcase-content__title')) {
    mouse.classList.add('showcase-active');
    mouseTxt.innerText = "View Project";

  } else {
    mouse.classList.remove('showcase-active');
    mouseTxt.classList.remove('white');
    mouseTxt.innerHTML = "";
  }

  if (item.classList.contains('showcase-wrapper__red') || item.classList.contains('showcase-content__red') ||
    item.classList.contains('showcase-content__red__category') ||
    item.classList.contains('showcase-content__red__title')) {
    mouse.classList.add('showcase-active__red');
    mouseTxt.classList.add('red');
    mouseTxt.innerText = "View Project";

  } else {
    mouse.classList.remove('showcase-active__red');
    mouseTxt.classList.remove('red');
  }

}



window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);