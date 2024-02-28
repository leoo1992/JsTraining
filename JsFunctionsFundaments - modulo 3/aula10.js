// async / Await
function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo);
    });
};

// esperarPor()
//     .then(() => console.log('Esperou e executou a Promise 1'))
//     .then(esperarPor)
//     .then(() => console.log('Esperou e executou a Promise 2'))
//     .then(esperarPor)
//     .then(() => console.log('Esperou e executou a Promise 3'))
//     .then(esperarPor)
//     .then(() => console.log('Esperou e executou a Promise 4'))



function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}


async function executar() {
    let valor = await retornaValor();

    await esperarPor(1500);
    console.log(`Async/Await ${valor}`);
    await esperarPor(4000);
    console.log(`Async/Await ${valor + 1}`);
    await esperarPor(3000);
    console.log(`Async/Await ${valor + 2}`);
}

executar()