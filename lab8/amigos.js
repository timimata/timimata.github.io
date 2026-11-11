const url = "https://amigos.pw.deisi.ulusofona.pt/amigos/";
const form = document.querySelector("form");
const nodeNome = document.querySelector('input[type="text"]');
const nodeIdade = document.querySelector('input[type="number"]');
const nodeLista = document.querySelector("ul");

function carregaAmigos() {
  fetch(url)
    .then((response) => response.json())
    .then((amigos) => {
      nodeLista.innerHTML = "";
      amigos.forEach((amigo) => nodeLista.append(criaAmigo(amigo)));
    })
    .catch((erro) => console.log(erro));
}

function criaAmigo(amigo) {
  const li = document.createElement("li");
  li.textContent = `${amigo.nome} (${amigo.idade}) `;

  const botaoAnos = document.createElement("button");
  botaoAnos.textContent = "Fazer anos (PATCH)";
  botaoAnos.addEventListener("click", () => {
    pedido(`${url}${amigo.id}/`, "PATCH", { idade: amigo.idade + 1 });
  });

  const botaoEditar = document.createElement("button");
  botaoEditar.textContent = "Editar (PUT)";
  botaoEditar.addEventListener("click", () => {
    const nome = prompt("Novo nome", amigo.nome);
    const idade = Number(prompt("Nova idade", amigo.idade));
    pedido(`${url}${amigo.id}/`, "PUT", { nome, idade });
  });

  const botaoApagar = document.createElement("button");
  botaoApagar.textContent = "Apagar (DELETE)";
  botaoApagar.addEventListener("click", () => {
    pedido(`${url}${amigo.id}/`, "DELETE");
  });

  li.append(botaoAnos, botaoEditar, botaoApagar);
  return li;
}

function pedido(endereco, metodo, dados) {
  fetch(endereco, {
    method: metodo,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  })
    .then(() => carregaAmigos())
    .catch((erro) => console.log(erro));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  pedido(url, "POST", {
    nome: nodeNome.value,
    idade: Number(nodeIdade.value),
  });
  form.reset();
});

carregaAmigos();
