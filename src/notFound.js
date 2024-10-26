const NotFound = function () {
  const content = document.querySelector("#content");

  const notFound = document.createElement("h1");
  notFound.innerText = "404 Not Found";

  content.appendChild(notFound);
};
