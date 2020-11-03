

console.log(typeof number1)
console.log(typeof number2)
var parsedNumber1 = parseInt(number1)
var parsedNumber2 = parseInt(number2)

function calc(number1, operation, number2) {
    if (operation === "+") {
        var sum = add(number1, number2);
        console.log(sum);
        return sum;
    }
    if (operation === "-") {
        var sum = subtract(number1, number2);
        console.log(sum)
        return sum;
    }
    if (operation === "*") {
        var sum = multiply(number1, number2);
        console.log(sum)
        return sum;
    }
    if (operation === "/") {
        var sum = divide(number, number2);
        console.log(sum)
        return sum;
    }
}
function add(number1, number2) {
    return number1 + number2
}
function subtract(number1, number2) {
    return number1 - number2
}
function multiply(number1, number2) {
    return number1 * number2
}
function divide(number1, number2) {
    return number1 / number2
}
calc(parsedNumber1, operation, parsedNumber2)