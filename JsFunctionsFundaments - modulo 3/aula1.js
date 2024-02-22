const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.primeiro = teste => console.log(teste[0]);

Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]);
}

Object.defineProperty(Array.prototype, 'segundo', {
    get: function() {
        return this[1];
    }
});

teste.primeiro(teste);
teste.ultimo();
console.log(teste.segundo);