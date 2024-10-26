const Home = function () {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = "Savor the Extraordinary";

  content.appendChild(h1);
  content.classList.add("home-background");
  content.classList.add("home-content");
};

export default Home;
