let ul = document.createElement("ul");
document.querySelector("main").appendChild(ul);
ul.classList.add("cards");

let barSum = document.createElement("div");
let barQtd = document.createElement("div");
let pQtd = document.createElement("p");
let pQuanti = document.createElement("p");
let barTotal = document.createElement("div");
let pTotal = document.createElement("p");
let pSum = document.createElement("p");

barQtd.classList.add("barrasSoma");
barTotal.classList.add("barrasSoma");
barSum.classList.add("barSum");
pQuanti.innerText = `Quantidade:`;
pQtd.innerText = ``;
pTotal.innerText = `Total:`;
pSum.innerText = ``;

function listar(produtos) {
  for (let i = 0; i < produtos.length; i++) {
    let produto = produtos[i];
    ul.appendChild(render(produto));
  }
}
listar(data);

function render(produtos) {
  let id = produtos.id;
  let img = produtos.img;
  let nameItem = produtos.nameItem;
  let description = produtos.description;
  let value = produtos.value;
  let buttonId = produtos.id;
  let addCart = produtos.addCart;

  let tag = produtos.tag;

  let li = document.createElement("li");
  let divImg = document.createElement("div");
  let image = document.createElement("img");
  let divInfo = document.createElement("div");
  let pTipo = document.createElement("p");
  let h3Nome = document.createElement("h3");
  let h5Description = document.createElement("h5");
  let h5Price = document.createElement("h5");
  let buttonAdd = document.createElement("button");

  li.classList.add("produto");
  divInfo.classList.add("infoProduto");
  divImg.classList.add("divImg");
  pTipo.classList.add("tipoProduto");
  buttonAdd.classList.add("addCartButton");

  image.src = `${img}`;
  image.alt = `fotoProduto`;
  pTipo.innerText = `${tag}`;
  h3Nome.innerText = `${nameItem}`;
  h5Description.innerText = `${description}`;
  h5Price.innerText = `R$ ${value},00`;
  buttonAdd.innerText = `${addCart}`;
  buttonAdd.id = `${buttonId}`;
  buttonAdd.type = "submit";
  divImg.appendChild(image);
  divInfo.append(pTipo, h3Nome, h5Description, h5Price, buttonAdd);
  li.append(divImg, divInfo);
  return li;
}

let tagAside = document.createElement("aside");
let divSearch = document.createElement("div");
let inputSearch = document.createElement("input");
let buttonSearch = document.createElement("button");
let divCarrinho = document.createElement("div");
let h3Title = document.createElement("h3");
let divVazio = document.createElement("div");
let h3Vazio = document.createElement("h3");
let h4Add = document.createElement("h4");

inputSearch.classList.add("searchInput");
buttonSearch.classList.add("buttonSearch");
divCarrinho.classList.add("carrinhoVazio");
divCarrinho.id = "carrinhoVazio";
h3Title.classList.add("carrinhoTitle");
divSearch.classList.add("inputBar");

inputSearch.type = "text";
inputSearch.placeholder = "Digite aqui sua pesquisa...";
buttonSearch.innerText = `Pesquisar`;
h3Title.innerText = `Carrinho de Compras`;
h3Vazio.innerText = `Carrinho vazio`;
h4Add.innerText = `Adicione mais itens`;

divSearch.append(inputSearch, buttonSearch);

divCarrinho.append(divVazio);
divVazio.append(h3Vazio, h4Add);

tagAside.append(divSearch, h3Title, divCarrinho);
document.querySelector("main").appendChild(tagAside);
/////

let buttonAdd = document.getElementsByClassName("addCartButton");
for (let i = 0; i < buttonAdd.length; i++) {
  let botao = buttonAdd[i];

  botao.addEventListener("click", function (event) {
    let element = event.target;
    let elementId = element.id;
    let produto = objFind(elementId);

    if (!produto) {
      alert(`Produto Não Cadastrado!`);
    } else {
      addCart(produto);
      contadorCarrinho++;
      pQtd.innerHTML = `${contadorCarrinho}`;
      somaProdutos += data[i].value;
      pSum.innerText = `R$${somaProdutos},00`;
    }
  });
}

function objFind(elementId) {
  for (let i = 0; i < data.length; i++) {
    let produto = data[i];
    if (produto.id == elementId) {
      return produto;
    }
  }
  return false;
}

let preencherCarrinho = document.createElement("div");
let listaCarrinho = document.createElement("ul");
preencherCarrinho.classList.add("carrinhoFill");
listaCarrinho.classList.add("listaCarrinho");
listaCarrinho.id = "listaCarrinho";

let contadorCarrinho = 0;
let somaProdutos = 0;

function addCart(produto) {
  let carrinhoVazio = document.getElementById("carrinhoVazio");

  let li = document.createElement("li");
  let divProduto = document.createElement("div");
  let divImage = document.createElement("div");
  let img = document.createElement("img");
  let divInfo = document.createElement("div");
  let pNome = document.createElement("p");
  let pPrice = document.createElement("p");
  let buttonRemove = document.createElement("button");
  divVazio.classList.add("hidden");
  divImage.classList.add("divImage");
  buttonRemove.classList.add("removeButton");
  img.classList.add("imgCarrinho");
  divInfo.classList.add("divCarrinho");
  li.classList.add("produtoCarrinho");
  li.id = `1`;
  divProduto.classList.add("divProduto");

  buttonRemove.addEventListener("click", function (event) {
    let li = event.path[2];
    li.remove();
    pQtd.innerText = --contadorCarrinho;

    somaProdutos = somaProdutos - produto.value;
    pSum.innerText = `R$${somaProdutos},00`;
  });

  img.src = produto.img;
  img.alt = produto.nameItem;
  pNome.innerHTML = `<strong>${produto.nameItem}</strong>`;
  pPrice.innerText = `R$ ${produto.value},00`;
  buttonRemove.innerHTML = `Remover produto`;

  divImage.appendChild(img);
  divProduto.append(divImage, divInfo);
  divInfo.append(pNome, pPrice, buttonRemove);
  li.append(divProduto);

  carrinhoVazio.appendChild(li);
}
barQtd.append(pQuanti, pQtd);
barSum.append(barQtd, barTotal);
tagAside.append(barSum);
barTotal.append(pTotal, pSum);
