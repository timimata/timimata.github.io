let contagem = 0;

const zona = document.querySelector("#zona");
const mensagem = document.querySelector("#mensagem");
const imagem = document.querySelector("#imagem");
const contador = document.querySelector("#contador");
const botaoMais = document.querySelector("#botao-mais");
const posicao = document.querySelector("#posicao");

// 1. click: aumenta o contador
function somar() {
  contagem++;
  contador.textContent = contagem;
  contador.style.color = "green";
}

// 2. mouseover: o rato entra na imagem
function entrar() {
  mensagem.textContent = "Bem-vindo ao Palácio da Pena!";
  imagem.style.opacity = "0.6";
}

// 3. mouseout: o rato sai da imagem
function sair() {
  mensagem.textContent = "Passa o rato por cima da imagem.";
  imagem.style.opacity = "1";
}

// 4. dblclick: duplo clique na imagem
function duploClique() {
  mensagem.textContent = "Duplo clique na imagem!";
  imagem.style.borderRadius = "50%";
}

// 5. mousemove: mostra a posição do rato
function mover(evento) {
  posicao.textContent =
    "Posição do rato: " + evento.clientX + ", " + evento.clientY;
  posicao.style.color = "blue";
}

botaoMais.addEventListener("click", somar);
imagem.addEventListener("mouseover", entrar);
imagem.addEventListener("mouseout", sair);
imagem.addEventListener("dblclick", duploClique);
zona.addEventListener("mousemove", mover);
