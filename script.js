
const click = document.querySelector("#myButton");
click.addEventListener("click", function (event) {
  if (event.target === click) {
    window.location.href = "page2.html";
  }
} );