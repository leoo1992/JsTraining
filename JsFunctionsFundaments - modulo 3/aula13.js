class Carro {
    constructor(marca, modelo, motor, ano) {
        this._marca = marca;
        this._motor = motor;
        this._modelo = modelo;
        this._ano = ano;
    }

    get juntarMarcaModeloMotor() {
        return `${this._marca} ${this._modelo} ${this._motor}`;
    }

    andar() {
        return console.log(`Andando num carro ${this._marca} ${this._modelo} com motor ${this._motor} e ano ${this._ano}`);
    };

    set trocarMotor(novoMotor) {
        this._motor = novoMotor;
    }
}

const p1 = new Carro('Ford', 'Fiesta', '1.0', 2010);
const motorzao = '2.0 Turbo';
p1.andar();
console.log(p1.juntarMarcaModeloMotor);
p1.trocarMotor = motorzao;
p1.andar();