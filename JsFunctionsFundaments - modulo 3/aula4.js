Array.prototype.meuMap = function (fn) {
    const arrayMapped = []
    for (let i = 0; i < this.length; i++) {
        arrayMapped.push(`Item ${i + 1}: ${fn(this[i], i, this)}`);
    }
    return arrayMapped;
}

const carrinhoProdutos = [
    { nome: 'Teclado Gamer', quantidade: 5, preco: 540.99 },
    { nome: 'Mouse Gamer', quantidade: 3, preco: 198.80 },
    { nome: 'Headset Gamer', quantidade: 7, preco: 825.99 },
    { nome: 'Monitor Gamer', quantidade: 9, preco: 1200.99 }
],
    getNomes = el => el.nome,
    getQuantidade = el => `Qtd: ${el.quantidade} und`,
    getPrecos = el => `Valor und: R$ ${el.preco}`,
    getValorTotalItens = el => `Total item: R$ ${(el.quantidade * el.preco).toFixed(2)}`,
    totalCarrinho = (carrinhoProdutos.reduce((acc, el) => acc + (el.quantidade * el.preco), 0)).toFixed(2),
    totalQuantidadeCarrinho = carrinhoProdutos.reduce((acc, el) => acc + el.quantidade, 0);

const nomesProdutos = carrinhoProdutos.meuMap(getNomes);
const quantidadesProdutos = carrinhoProdutos.meuMap(getQuantidade);
const precosProdutos = carrinhoProdutos.meuMap(getPrecos);
const totalItens = carrinhoProdutos.meuMap(getValorTotalItens);

console.log(nomesProdutos);
console.log(quantidadesProdutos);
console.log(precosProdutos);
console.log(totalItens);
console.log(' Quantidade de itens no carrinho: ' + totalQuantidadeCarrinho);
console.log(' Total Carrinho : R$ ' + totalCarrinho);

