// A. declaração de variáveis
const form = document.querySelector("form");
const nodeInputNumero = document.querySelector('form input[type="number"]');
const nodeUlColecao = document.querySelector("#colecao ul");
const nodeTotalColecao = document.querySelector("#colecao span");
const nodeUlRepetidos = document.querySelector("#repetidos ul");
const nodeTotalRepetidos = document.querySelector("#repetidos span");

const colecao = JSON.parse(localStorage.getItem("colecao")) || [];
const repetidos = JSON.parse(localStorage.getItem("repetidos")) || [];

// B. event handlers
function guardaCarta() {
  const numero = Number(nodeInputNumero.value);

  if (colecao.includes(numero)) {
    repetidos.push(numero);
    repetidos.sort((a, b) => a - b);
  } else {
    colecao.push(numero);
    colecao.sort((a, b) => a - b);
  }

  nodeInputNumero.value = "";
  atualizaPagina();
}

function atualizaLista(lista, nodeUl) {
  nodeUl.innerHTML = "";
  lista.forEach((numero) => {
    if (lista === repetidos) {
      nodeUl.innerHTML += `<li>${numero} <button type="button">eliminar</button></li>`;
    } else {
      nodeUl.innerHTML += `<li>${numero}</li>`;
    }
  });
}

function eliminaRepetido(indice) {
  repetidos.splice(indice, 1);
  atualizaPagina();
}

function atualizaPagina() {
  atualizaLista(colecao, nodeUlColecao);
  atualizaLista(repetidos, nodeUlRepetidos);
  nodeTotalColecao.textContent = colecao.length;
  nodeTotalRepetidos.textContent = repetidos.length;

  localStorage.setItem("colecao", JSON.stringify(colecao));
  localStorage.setItem("repetidos", JSON.stringify(repetidos));

  // os botões são criados de novo, por isso o evento é ligado aqui
  nodeUlRepetidos.querySelectorAll("button").forEach((botao, indice) => {
    botao.onclick = () => eliminaRepetido(indice);
  });
}

// C. event listeners
form.onsubmit = (event) => {
  event.preventDefault();
  guardaCarta();
};

atualizaPagina();
