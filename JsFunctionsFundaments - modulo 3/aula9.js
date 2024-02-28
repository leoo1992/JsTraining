function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('Erro')
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

setInterval(() => {
    funcionarOuNao('Testando...', 0.2)
        .then(valor => `Valor: ${valor}`)
        .then(
            valor => console.log(`Valor: ${valor}`),
            //err => console.log(`Erro 2 Ocorreu : ${err}`)
        )
        .catch(err => console.log(`Erro: ${err}`));
}, 1000)