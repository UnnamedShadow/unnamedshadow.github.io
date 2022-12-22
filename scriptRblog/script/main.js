document.onload = function () {
  const navbar = document.getElementsByTagName("nav")[0];
  const iframe = document.getElementsByTagName("iframe")[0];

  for (var i = 0; i < navbar.childElementCount; i++) {
    navbar.children[i].addEventListener("click", function () {
      iframe.src = "./" + this.innerHTML + ".html";
    });
  }
};
