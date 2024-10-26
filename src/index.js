// Styles
import "./css/normalize.css";
import "./css/styles.css";

import Home from "./home.js";
import About from "./about.js";

const Controller = (function () {
  function homePage() {
    Home();
  }

  function menuPage() {
    // Menu();
  }

  function aboutPage() {
    About();
  }

  function notFound() {
    // NotFound();
  }

  function controlPage(page) {
    return page === "Home"
      ? homePage()
      : page === "Menu"
        ? menuPage()
        : page === "About"
          ? aboutPage()
          : notFound;
  }

  return { controlPage };
})(Home);

const UI = (function (controller) {
  function clearUi() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
  }
  function clickHandler(event) {
    clearUi();
    controller.controlPage(event.target.innerText);
  }
  const buttons = document.querySelectorAll("button");
  for (let button of buttons) {
    button.addEventListener("click", clickHandler);
  }
})(Controller);
