const getPrimeiroElementoArray = (array) => array[0],
    getPrimeiraLetraElemento = (string) => string[0],
    convertePrimeiraLetraParaMinuscula = (string) => string.toLowerCase(),
    a = 1,
    p = new Promise(resolve => resolve(['Leo', 4, 5, 6]));

p.then(value => console.log(value));
p.then(value => console.log(value[0]));

p.then(getPrimeiroElementoArray)
    .then(getPrimeiraLetraElemento)
    .then(convertePrimeiraLetraParaMinuscula)
    .then(letraMinuscula => console.log(letraMinuscula + a * 5));
