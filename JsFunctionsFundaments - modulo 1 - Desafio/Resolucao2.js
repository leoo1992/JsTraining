//logica refatorada
function range(a, b, s = 1, nums = []) {
    let n1 = b === undefined ? 1 : a,
        n2 = b === undefined ? a : b,
        step = (n1 <= n2) ? Math.abs(s) : -Math.abs(s);

    for (let i = n1; (n1 <= n2) ? i <= n2 : i >= n2; i += step) nums.push(i);

    return console.log(nums);
};

range(5);
range(6, 11);
range(10, 19, 2);
range(6, 2);
range(8, -3, 4);