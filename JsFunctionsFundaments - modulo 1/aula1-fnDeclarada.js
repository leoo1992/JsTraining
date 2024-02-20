// fn declarada

function sayHeello() {
    console.log('Hello')
}
    
sayHeello()

function sayHeelloto(name) {
    console.log('Hello ' + name)
}

sayHeelloto('Leonardo')


function returnHi() {
    return 'Hi'
}

const greetings = returnHi()

console.log(returnHi());
console.log(greetings);

function returnHiTo(name) {
    return 'Hi ' + name
}

console.log(returnHiTo('Leonardo'));
