window.onload = function () {
  const navbar = document.getElementById("navbar");
  const iframe = document.getElementsByTagName("iframe")[0];
  for (var i = 0; i < navbar.childElementCount; i++) {
    navbar.children[i].addEventListener("click", function () {
      iframe.setAttribute("src", this.innerHTML + ".html");
    });
  }
};
