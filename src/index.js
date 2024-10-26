// Styles
import "./css/normalize.css";
import "./css/styles.css";

import Home from "./home.js";
import About from "./about.js";
import Menu from "./menu.js";

const Controller = (function () {
  function homePage() {
    Home();
  }

  function menuPage() {
    Menu();
  }

  function aboutPage() {
    About();
  }

  function notFound() {
    NotFound();
  }

  function controlPage(page) {
    return page === "home"
      ? homePage()
      : page === "menu"
        ? menuPage()
        : page === "about"
          ? aboutPage()
          : notFound();
  }

  return { controlPage };
})(Home);

const UI = (function (controller) {
  const buttons = document.querySelectorAll("button");
  for (let button of buttons) {
    button.addEventListener("click", clickHandler);
  }

  function clearUi() {
    const content = document.querySelector("#content");
    content.classList = null;
    content.innerHTML = "";
  }

  function clickHandler(event) {
    clearUi();
    controller.controlPage(event.target.innerText.toLowerCase());
  }

  function initialPage() {
    Home();
  }
  return { initialPage };
})(Controller);

UI.initialPage();
