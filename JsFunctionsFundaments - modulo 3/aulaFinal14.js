// orientação a objetos

function Produto(nome, preco, desc = 0.15) {

    this.nome = nome;
    this.preco = preco;
    this._desc = desc;

    this.precoFinal = () => this.preco * (1 - this._desc);
}

Produto.prototype.log = function () {
    console.log(`Nome: ${this.nome}, Preco: ${this.preco}, Desconto: ${this._desc}`);
}

Object.defineProperty(Produto.prototype, 'desc', {
    get: function () {
        return this._desc;
    },

    set: function (novoDesc) {

        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc;
        }
        return this._desc;
    }
})
Object.defineProperty(Produto.prototype, 'descString', {
    get: function () {
        return `${this._desc * 100} % de desconto`;;
    }
})

const p1 = new Produto('Camiseta', 50),
    p2 = new Produto('Cueca', 20),
    p3 = new Produto('Caneta', 3);

console.log(p1.nome, p1.preco, p1.precoFinal());
p1.log();
console.log(p1.desc);
console.log(p1.descString);
p1.desc = 0.25;
console.log(p1.descString);