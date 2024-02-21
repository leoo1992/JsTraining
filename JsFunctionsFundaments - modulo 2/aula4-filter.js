const
    //inputs
    array = [1, 2, 3, 4, 5, 6],
    array2 = [
        { name: 'Leonardo', score: 32 },
        { name: 'Maria', score: 42 },
        { name: 'João', score: 52 },
        { name: 'José', score: 22 }
    ],
    array3 = [
        { name: 'Leonardo', nota: 8.4 },
        { name: 'Maria', nota: 7.9 },
        { name: 'João', nota: 8.2 },
        { name: 'José', nota: 6.9 }
    ],

    //gets
    getPar = el => el % 2 === 0,
    getImpar = el => el % 2 !== 0,
    getScoreMaiorQue30 = el => el.score > 30,
    getNotaMaiorQue8 = el => el.nota > 8,

    //filters
    filtrarArray = (el, arr) => arr.filter(el),

    //results functions
    resultPar = filtrarArray(getPar, array),
    resultImpar = filtrarArray(getImpar, array),
    resultScoreMaiorQue30 = filtrarArray(getScoreMaiorQue30, array2),
    resultNotaMaiorQue8 = filtrarArray(getNotaMaiorQue8, array3);

//outputs
console.log(array);
console.log(array2);
console.log(resultPar);
console.log(resultImpar);
console.log(resultScoreMaiorQue30);
console.log(resultNotaMaiorQue8);