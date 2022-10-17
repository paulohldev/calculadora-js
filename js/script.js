const screen = document.querySelector("[data-tela]");
const numbers = document.querySelectorAll(".btn");
const options = document.querySelectorAll(".operacoes button");
const result = document.querySelector(".igual");
const backspace = document.querySelector(".delete");
const clear = document.querySelector(".ac");
const elementsArray = [numbers, options];
const click = "click";

function handleScreen(event) {
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operations = ["*", "/", "-", "+", "=", "."];

  event.key === "Backspace" ? backspaceScreen() : false;
  event.key === "Escape" ? clearScreen() : false;
  event.key === "Enter" ? operation() : false;

  if (numbers.includes(event.key)) {
    screen.innerText += event.key;
  } else if (operations.includes(event.key)) {
    screen.innerText += event.key;
  }

  if (this != window) {
    screen.innerText += this.innerText;
  }
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
  const evalMethod = eval(screen.innerText);
  if (!isFinite(evalMethod) || isNaN(evalMethod)) {
    screen.innerText = "Número invalido";
    setTimeout(() => {
      screen.innerText = "";
    }, 1000);
  } else screen.innerText = eval(evalMethod);
}

elementsArray.forEach((element) => {
  element.forEach((contentElement) => {
    contentElement.addEventListener(click, handleScreen);
  });
});

result.addEventListener(click, operation);
backspace.addEventListener(click, backspaceScreen);
clear.addEventListener(click, clearScreen);
window.addEventListener("keydown", handleScreen);
