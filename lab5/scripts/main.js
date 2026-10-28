// Variáveis
const passaPorAqui = document.querySelector("#passa-por-aqui");
const frase = document.querySelector("#frase");
const pinta = document.querySelector("#pinta");
const escreve = document.querySelector("#escreve");
const corFundo = document.querySelector("#cor-fundo");
const direcao = document.querySelector("#direcao");
const caixa = document.querySelector("#caixa");
const formulario = document.querySelector("form");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const saudacao = document.querySelector("#saudacao");
const contador = document.querySelector("#contador");
const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const repor = document.querySelector("#repor");
const segundos = document.querySelector("#segundos");

const cores = ["red", "green", "blue", "orange"];
let indiceCor = 0;
let contagem = Number(localStorage.getItem("contagem")) || 0;
let tempo = 0;

// Funções
function entrar() {
  passaPorAqui.textContent = "Obrigado por passares!";
}

function sair() {
  passaPorAqui.textContent = "Passa o rato por aqui!";
}

function pintar() {
  pinta.textContent = "Pintado!";
  pinta.style.backgroundColor = "yellow";
}

// Arrow function: alterna 4 cores a cada tecla
const mudarCor = () => {
  escreve.style.color = cores[indiceCor];
  indiceCor = (indiceCor + 1) % cores.length;
};

// Função normal para o this ser o select
function mudarFundo() {
  document.body.style.backgroundColor = this.value;
}

function mudarDirecao() {
  caixa.style.flexDirection = this.value;
}

function mostrarContagem() {
  contador.textContent = contagem;
  localStorage.setItem("contagem", contagem);
}

function incrementar() {
  contagem++;
  mostrarContagem();
}

function decrementar() {
  contagem--;
  mostrarContagem();
}

function reporContagem() {
  contagem = 0;
  mostrarContagem();
}

function contar() {
  tempo++;
  segundos.textContent = tempo;
}

// Eventos
passaPorAqui.addEventListener("mouseover", entrar);
passaPorAqui.addEventListener("mouseout", sair);
pinta.addEventListener("dblclick", pintar);
escreve.addEventListener("keydown", mudarCor);
corFundo.addEventListener("change", mudarFundo);
direcao.addEventListener("change", mudarDirecao);
mais.addEventListener("click", incrementar);
menos.addEventListener("click", decrementar);
repor.addEventListener("click", reporContagem);

document.querySelectorAll("button.color").forEach((botao) => {
  botao.addEventListener("click", () => {
    frase.style.color = botao.dataset.color;
  });
});

formulario.onsubmit = (e) => {
  e.preventDefault(); // para não recarregar a página
  saudacao.textContent =
    "Olá, o " + nome.value + " tem " + idade.value + " anos!";
};

mostrarContagem();
setInterval(contar, 1000);
