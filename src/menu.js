const Menu = function () {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = "Menu";

  content.appendChild(h1);
  content.classList.add("menu-background");
  content.classList.add("menu-content");
};

export default Menu;
