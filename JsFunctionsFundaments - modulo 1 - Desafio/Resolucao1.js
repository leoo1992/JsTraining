
function range(max = 1, min = max, step = 1, array = []) {
    if (min === max) {
        for (let i = 1; i <= max; i += step) array.push(i); return console.log(array);;
    }

    if (max >= min && step === 1) {
        for (let i = max; i >= min; i -= step) array.push(i); return console.log(array);
    }

    if (max >= min && min < 0) {
        for (let i = max; i > min; i -= step) array.push(i); return console.log(array);
    };

    if (max >= min) {
        for (let i = min; i <= max; i += step) array.push(i); return console.log(array);
    };

    if (max <= min) {
        for (let i = max; i <= min; i += step) array.push(i); return console.log(array);
    };
};

range(5)
range(6, 11)
range(10, 19, 2)
range(6, 2);
range(8, -3, 4);

