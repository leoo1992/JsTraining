//inputs
const array = [
    { name: 'Leonardo', nota: 8.4 },
    { name: 'Maria', nota: 7.9 },
    { name: 'João', nota: 8.2 },
    { name: 'José', nota: 6.9 }
],
    //gets
    getNotaMaiorQue8 = item => item.nota > 8,
    getNota = item => item.nota,
    getMedia = (accumulator, item, index, array) => (index === array.length - 1) ? (accumulator + item) / array.length : accumulator + item,
    //fns of reduce
    fnReduce = (array, fn, start = 0) => array.reduce(fn, start),
    //var of results
    result = array.filter(getNotaMaiorQue8).map(getNota).reduce(getMedia);
//outputs
console.log(result);

