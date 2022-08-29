const numeros = document.querySelectorAll(".js-numeros button");
const tela = document.querySelector(".js-tela");
const atalhosNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const atalhosOperacao = ["Delete", "Backspace", "=", "+", "*", "/", "-"];
let keyDown = "";

function adicionaClick(event) {
  tela.innerHTML += +event.target.innerText;
}

function adicionaTecla() {
  tela.innerHTML += +keyDown;
}

numeros.forEach((n) => {
  n.addEventListener("click", adicionaClick);
});

function keyAtalhos(event) {
  atalhosNum.forEach((t) => {
    if (event.key === t) {
      keyDown = event.key;
      adicionaTecla(keyDown);
    }
  });
  atalhosOperacao.forEach((t) => {
    if (event.key === t) {
      console.log("Não concatena");
    }
  });
}

window.addEventListener("keydown", keyAtalhos);
