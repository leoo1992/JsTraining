
// setTimeout(() => {
//     console.log('Executou o callback dentro do setTimeout');

//     setTimeout(() => {
//         console.log('Executou o callback 2 dentro do setTimeout 2');

//         setTimeout(() => {
//             console.log('Executou o callback 3 dentro do setTimeout 3');

//         }, 2000);
//     }, 2000);
// }, 2000);

function esperarPor ( tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executou a Promise');
            resolve();
        }, tempo);
    });
};


esperarPor()
.then(esperarPor)
.then(esperarPor);
