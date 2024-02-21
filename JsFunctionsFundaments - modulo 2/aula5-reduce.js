//inputs
const array = [1, 2, 3, 4, 5, 6],
    //gets
    getSum = (total, el) => total + el,
    getMedia = (total, el) => total + el / array.length,
    //fns of reduce
    fnReduce = (arr, fn, start = 0) => arr.reduce(fn, start),
    //var of results
    resultSoma = fnReduce(array, getSum);
resultMedia = fnReduce(array, getMedia);
//outputs
console.log(resultSoma);
console.log(resultMedia);


