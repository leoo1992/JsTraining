const fileSystem = require('fs'),
    path = require('path'),
    caminho = path.join(__dirname, 'aula3Dados.txt'),
    conteudo = fileSystem.readFileSync(caminho).toString();

exibirConteudo = (err, conteudo) => conteudo ? console.log(conteudo.toString()) : console.log(err);

//assincrono  
console.log('Inicio Assync');
fileSystem.readFile(caminho, {}, exibirConteudo);
console.log('Fim Assync');

//sincrono
console.log('Inicio Sync');
console.log(conteudo);
console.log('Fim Sync');