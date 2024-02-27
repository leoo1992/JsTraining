//promise

let a = 1,
    p = new Promise(resolve => resolve(['Leo', 4, 5, 6]));

p.then(value => console.log(value))
p.then(value => console.log(value[0]))

function getPrimeiroElementoArray(array) {
    return array[0];
};
function getPrimeirLetraElemento(string) {
    return string[0];
};
function ConvertePrimeiraLetraParaMinuscula(string) {
    return string.toLowerCase();
};


p
.then(getPrimeiroElementoArray)
.then(getPrimeirLetraElemento)
.then(ConvertePrimeiraLetraParaMinuscula)
.then(letraMinuscula => console.log(letraMinuscula + a * 5));
