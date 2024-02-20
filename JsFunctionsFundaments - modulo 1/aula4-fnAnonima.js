//fn anonima 

(function (a, b, c) {
    console.log(`Resultado 0: ${a + b + c}`);
});

//IIDE - immediately invoked function expression

(function (a, b, c) {
    console.log(`Resultado 1: ${a + b + c}`);
})(1, 2, 3);

(function (a, b, c) {
    console.log(`Resultado 2: ${a + b + c}`);
})(3, 3, 3);


// arrow  IIDE 
((a, b, c) => {
    console.log(`Resultado 3: ${a + b + c}`)
})(4, 4, 4);


// arrow  IIDE abreviada
((a, b, c) => console.log(`Resultado 4: ${a + b + c}`))(1, 1, 1);