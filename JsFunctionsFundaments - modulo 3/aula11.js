function geraNumerosEntre(min, max, numerosPreenchidos) {
    if (min > max) [max, min] = [min, max];
    return new Promise((resolve, reject) => {

        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;

        if (numerosPreenchidos.includes(aleatorio)) {
            reject('Número repetido!');
        } else {
            resolve(aleatorio);
        }
    });
};
// const array = [1, 2, 4]
// geraNumerosEntre(1, 5, array)
//     .then(console.log)
//     .catch(console.log)

async function gerarMegaSena(qtdeNumeros, tentativa = 1) {
    try {
        const numeros = [];
        for (const _ of Array(qtdeNumeros).fill()) {
            numeros.push(await geraNumerosEntre(1, 60, numeros))
        }
        return numeros.sort((n1, n2) => n1 - n2);
    } catch (error) {
        if (tentativa === 10) {
            throw "Não foi possível gerar a sequência";
        } else {
            return gerarMegaSena(qtdeNumeros, tentativa + 1)
        }
    }
}

gerarMegaSena(6)
    .then(console.log)
    .catch(console.log)