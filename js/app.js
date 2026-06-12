let listaComprasNomes = [];
let listaComprasValores = [];


let carrinhoDeCompras = document.getElementById ('lista-produtos');
let valorTotal = document.getElementById('valor-total');

function adicionar() {

    let produto = document.getElementById('produto').value;

     //este replace serve para remover o valor e deixar apenas o nome do produto.
    let nomeProduto = produto.replace(/ - R\$.*$/, '');
    let quantidade = Number(document.getElementById('quantidade').value);

    if (quantidade <= 0 || isNaN(quantidade)){
        alert('Insira uma quantidade válida.');
        return;
    }

    //Este replace serve para remover as letras do produto e manter somente o valor.
    let valorLimpo = produto.replace(/[^0-9.]/g, '');
    let subtotal = valorLimpo * quantidade; 
    listaComprasValores.push(subtotal);

    //Aqui o reduce irá percorrer o array e transformar em um valor unico,
    //(total,atual) =>  faz um callback que executa para cada item,
    // total + Number(atual) soma o valor atual no acumulador; o ,0 serve para colocar um valor inicial do total para evitar erros.
    let totalFinal = listaComprasValores.reduce((total, atual) => total + Number(atual), 0);

    valorTotal.textContent = `R$${totalFinal}`;
    

    let textoEmCarrinho = `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span>
        <span class="produto-nome">${nomeProduto}</span>
        <span class="texto-azul">R$${valorLimpo}</span>
      </section>`;

    listaComprasNomes.push(textoEmCarrinho);

    carrinhoDeCompras.innerHTML = listaComprasNomes.join('');

    document.getElementById('quantidade').value = '1';
}



function limpar() {

    carrinhoDeCompras.innerHTML = '';
    listaComprasNomes = [];
    listaComprasValores = [];
    valorTotal.textContent = 'R$0';
    quantidade.value = 1;

}