// orientação a objetos

function Produto(nome, preco, desc = 0.15) {

    this.nome = nome;
    this.preco = preco;
    this.desc = desc;

    this.precoFinal = () => this.preco * (1 - this.desc);
}


const p1 = new Produto('Camiseta', 50),
    p2 = new Produto('Cueca', 20),
    p3 = new Produto('Caneta', 3);

console.log(p1.nome, p1.preco, p1.precoFinal());

