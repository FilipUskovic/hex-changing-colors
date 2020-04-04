const colorsbtn = document.querySelector(".colorsbtn"); //
const bodybackground = document.querySelector("body");

const colors = ["yellow", "red", "green", "#3b5998"];

colorsbtn.addEventListener("click", changeColor);

function changeColor() {
  //bodybackground.style.backgroundColor = colors[2,3];
  let random = Math.floor(Math.random() * colors.length);
  bodybackground.style.backgroundColor = colors[random];
}
