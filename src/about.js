const About = function () {
  const content = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = "About Us";

  content.appendChild(h1);
  content.classList.add("about-content");
  content.classList.add("about-background");
};

export default About;
