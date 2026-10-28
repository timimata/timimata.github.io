// A. Estado e variáveis com referência de elementos do DOM
const nodeProdutos = document.querySelector("#produtos div");

if (!localStorage.getItem("produtos-selecionados")) {
  localStorage.setItem("produtos-selecionados", JSON.stringify([]));
}

// B. Funções utilitárias
function criarProduto(produto) {
  const article = document.createElement("article");

  const titulo = document.createElement("h3");
  titulo.textContent = produto.title;

  const imagem = document.createElement("img");
  imagem.src = produto.image;
  imagem.alt = produto.title;

  const preco = document.createElement("p");
  preco.textContent = `Custo total: ${produto.price.toFixed(2)} €`;

  const descricao = document.createElement("p");
  descricao.textContent = produto.description;

  const rating = document.createElement("p");
  rating.textContent = `Rating: ${produto.rating.rate} (${produto.rating.count})`;

  const botao = document.createElement("button");
  botao.textContent = "+ Adicionar ao cesto";
  botao.addEventListener("click", () => {
    const lista = JSON.parse(localStorage.getItem("produtos-selecionados"));
    lista.push(produto);
    localStorage.setItem("produtos-selecionados", JSON.stringify(lista));
  });

  article.append(titulo, imagem, preco, descricao, rating, botao);
  return article;
}

// C. Event handlers
function renderizarProdutos(produtos) {
  produtos.forEach((produto) => {
    nodeProdutos.append(criarProduto(produto));
  });
}

// D. Event Listeners

// E. Inicialização
renderizarProdutos(produtos);
