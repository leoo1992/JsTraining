function geraNumerosEntre(min, max, tempo = 1000) {
    if (min > max) [max, min] = [min, max];
    return new Promise(resolve => {

        setTimeout(() => {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo)

    });
};

function gerarVariosNumeros() {
    return Promise.all([
        geraNumerosEntre(1, 60, 1000),
        geraNumerosEntre(1, 60, 500),
        geraNumerosEntre(1, 60, 4000),
        geraNumerosEntre(1, 60, 100),
        geraNumerosEntre(1, 60, 1500),
    ]);
};

console.time('Promise');

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('Promise')
    });

