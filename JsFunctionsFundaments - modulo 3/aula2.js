
const exec = (cb, a, b) => console.log(cb(a, b)),
    somar = (a, b) => a + b,
    dividir = (a, b) => a / b,
    multiplicar = (a, b) => a * b,
    subtrair = (a, b) => a - b;

exec(somar, 15, 25);
exec(subtrair, 10, 5);
exec(multiplicar, 10, 5);
exec(dividir, 10, 5);