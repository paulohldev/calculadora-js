const screen = document.querySelector("[data-tela]");
const numbers = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".operacoes button");
const result = document.querySelector(".igual");
const backspace = document.querySelector(".delete");
const clear = document.querySelector(".ac");
const elementsArray = [numbers, options];
const click = "click";

function handleScreen() {
  screen.innerText += this.innerText;
}
function backspaceScreen() {
  let currentScreen = screen.innerText.split("");
  currentScreen.pop();
  screen.innerText = currentScreen.toString().replaceAll(",", "");
}
function clearScreen() {
  screen.innerText = "";
}
function operation() {
  screen.innerText = eval(screen.innerText);
}

elementsArray.forEach((element) => {
  element.forEach((contentElement) => {
    contentElement.addEventListener(click, handleScreen);
  });
});
result.addEventListener(click, operation);
backspace.addEventListener(click, backspaceScreen);
clear.addEventListener(click, clearScreen);
