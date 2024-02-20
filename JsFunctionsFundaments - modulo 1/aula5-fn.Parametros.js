// parametros

function logParams(a, b) {
    console.log(a, b);
}

logParams(1, 2);

// ignorando parametros

logParams(1, 2, 3, 4);
logParams();

//parametros default

function defaultParams(a = 1, b = 2) {
    console.log(a, b);
}

defaultParams();
defaultParams(3);
defaultParams(3, 4);

// spread / rest
function logNums(...nums) {
    console.log(nums);
}

logNums(1, 2, 3, 4, 5, 6, 7);

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(sumAll(1, 2)); 