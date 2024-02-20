function run(fn){
    return `Resultado: ${fn()}`
}

function sayHeello(){
    console.log('Hello')
}

run(sayHeello);

run( function (){
    console.log('Run!!');
})

const result = run(Math.random);

console.log(result);


