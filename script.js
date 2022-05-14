// business Logic for my calculator

function add(number1, number2){
    return number1 + number2;
}
//  alert(add(10,12));

// using prompt to collect user input
let number1 = parseInt(prompt("type any number"));
let number2 = parseInt(prompt("type another number"));
console.log((number1, number2));

// invoking on the function

document.write(add(number1, number2));
alert(add(number1, number2));
