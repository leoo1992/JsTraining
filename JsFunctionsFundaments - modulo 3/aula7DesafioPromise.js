const fileSystem = require('fs'),
    path = require('path'),
    caminho = path.join(__dirname, 'aula3Dados.txt');

function exibirConteudo(caminho) {
    return new Promise(resolve => {
        fileSystem.readFile(caminho, function (_, conteudo) {
            resolve(conteudo.toString());
        });
        console.log('Depois de Ler o conteudo');
    });
}


exibirConteudo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log);
