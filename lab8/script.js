// A. Estado e variáveis com referência de elementos do DOM
const API = "https://deisishop.pw.deisi.ulusofona.pt";
const nodeProdutos = document.querySelector("#produtos div");
const nodeCesto = document.querySelector("#cesto div");
const nodeTotal = document.querySelector("#cesto span");
const nodeCategoria = document.querySelector("#categoria");
const nodeOrdenar = document.querySelector("#ordenar");
const nodePesquisa = document.querySelector("#pesquisa");
const nodeEstudante = document.querySelector("#estudante");
const nodeCupao = document.querySelector("#cupao");
const nodeComprar = document.querySelector("#comprar");
const nodeResultado = document.querySelector("#resultado");

let todosProdutos = [];

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
    atualizaCesto();
  });

  article.append(titulo, imagem, preco, descricao, rating, botao);
  return article;
}

function criaProdutoCesto(produto) {
  const article = document.createElement("article");

  const titulo = document.createElement("h3");
  titulo.textContent = produto.title;

  const imagem = document.createElement("img");
  imagem.src = produto.image;
  imagem.alt = produto.title;

  const preco = document.createElement("p");
  preco.textContent = `Custo total: ${produto.price.toFixed(2)} €`;

  const botao = document.createElement("button");
  botao.textContent = "- Remover artigo";
  botao.addEventListener("click", () => {
    const lista = JSON.parse(localStorage.getItem("produtos-selecionados"));
    const indice = lista.findIndex((p) => p.id === produto.id);
    lista.splice(indice, 1);
    localStorage.setItem("produtos-selecionados", JSON.stringify(lista));
    atualizaCesto();
  });

  article.append(titulo, imagem, preco, botao);
  return article;
}

// C. Event handlers
function renderizarProdutos(produtos) {
  nodeProdutos.innerHTML = "";
  produtos.forEach((produto) => {
    nodeProdutos.append(criarProduto(produto));
  });
}

function atualizaCesto() {
  const lista = JSON.parse(localStorage.getItem("produtos-selecionados"));
  nodeCesto.innerHTML = "";
  let total = 0;

  lista.forEach((produto) => {
    nodeCesto.append(criaProdutoCesto(produto));
    total += produto.price;
  });

  nodeTotal.textContent = total.toFixed(2);
}

function aplicaFiltros() {
  let lista = todosProdutos;

  if (nodeCategoria.value) {
    lista = lista.filter((produto) => produto.category === nodeCategoria.value);
  }

  const texto = nodePesquisa.value.toLowerCase();
  lista = lista.filter((produto) =>
    produto.title.toLowerCase().includes(texto),
  );

  if (nodeOrdenar.value === "crescente") {
    lista = [...lista].sort((a, b) => a.price - b.price);
  } else if (nodeOrdenar.value === "decrescente") {
    lista = [...lista].sort((a, b) => b.price - a.price);
  }

  renderizarProdutos(lista);
}

function comprar() {
  const lista = JSON.parse(localStorage.getItem("produtos-selecionados"));

  fetch(`${API}/buy`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products: lista.map((produto) => produto.id),
      student: nodeEstudante.checked,
      coupon: nodeCupao.value,
    }),
  })
    .then((response) => response.json())
    .then((dados) => {
      if (dados.error) {
        nodeResultado.textContent = `Erro: ${dados.error}`;
      } else {
        nodeResultado.textContent = `Valor final a pagar: ${dados.totalCost} € | Referência de pagamento: ${dados.reference}`;
      }
    })
    .catch((erro) => console.log(erro));
}

// D. Event Listeners
nodeCategoria.addEventListener("change", aplicaFiltros);
nodeOrdenar.addEventListener("change", aplicaFiltros);
nodePesquisa.addEventListener("input", aplicaFiltros);
nodeComprar.addEventListener("click", comprar);

// E. Inicialização
fetch(`${API}/products`)
  .then((response) => response.json())
  .then((produtos) => {
    produtos.forEach((produto) => {
      produto.price = Number(produto.price);
      produto.image = API + produto.image;
      produto.description = produto.description
        .replace(/[\p{Extended_Pictographic}️‍]/gu, "")
        .trim();
    });
    todosProdutos = produtos;
    aplicaFiltros();
  })
  .catch((erro) => console.log(erro));

fetch(`${API}/categories`)
  .then((response) => response.json())
  .then((categorias) => {
    categorias.forEach((categoria) => {
      const option = document.createElement("option");
      option.textContent = categoria.name;
      nodeCategoria.append(option);
    });
  })
  .catch((erro) => console.log(erro));

atualizaCesto();
