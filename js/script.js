const numeros = document.querySelectorAll(".js-numeros button");
const tela = document.querySelector(".js-tela p");
const atalhosNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const atalhosOperacao = [
  "Delete",
  "Backspace",
  "=",
  "+",
  "*",
  "/",
  "-",
  "Escape",
];
let keyDown = "";

function tamanhoTela() {
  const tamanhoTela = tela.innerHTML.length;
  if (tamanhoTela >= 14 && tamanhoTela < 22) {
    tela.classList.add("l15");
  } else if (tamanhoTela >= 22 && tamanhoTela < 26) {
    tela.classList.replace("l15", "l22");
  } else if (tamanhoTela >= 26 && tamanhoTela < 30) {
    tela.classList.replace("l22", "l26");
  } else if (tamanhoTela >= 30) {
    tela.classList.replace("l26", "l30");
  }
}

let left = "";
let right = "";
function adicionaClick(event) {
  const target = +event.target.innerText;
  tela.innerHTML += target;
  tamanhoTela();
  if (tela.innerHTML.includes("+")) {
    right += target;
  } else {
    left += target;
  }
}

function adicionaTecla(key) {
  tela.innerHTML += +key;
  tamanhoTela();
  if (tela.innerHTML.includes("+")) {
    right += key;
  } else {
    left += key;
  }
}

let total = 0;
function operacoes(key) {
  if (key === "+") {
    tela.innerHTML += key;
    total = +left + +right;
  }
}

function keyAtalhos(event) {
  let key = event.key;
  atalhosNum.forEach((t) => {
    if (key === t) {
      adicionaTecla(key);
      // operacoes(t);
    }
  });
  atalhosOperacao.forEach((t) => {
    if (key === t) {
      console.log("nao concatena");
      // operacoes(t);
    }
  });
}

numeros.forEach((n) => {
  n.addEventListener("click", adicionaClick);
});

window.addEventListener("keydown", keyAtalhos);
