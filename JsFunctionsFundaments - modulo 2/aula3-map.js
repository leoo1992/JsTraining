const array = [1, 2, 3, 4, 5, 6],
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
    newArray = array.map(item => item * 2),
    newArray2 = array2.map(item => item.score),
    getNota = el => el.nota,
    resultUp = array3.map(getNota).map(Math.ceil),
    resultDown = array3.map(getNota).map(Math.floor);

console.log(array);
console.log(array2);
console.log(array3);
console.log(newArray);
console.log(newArray2);
console.log(resultUp);
console.log(resultDown);