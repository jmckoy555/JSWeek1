let userInput = prompt("Write a message in either all captial letters, all lowercase letters or regular sentence structure.")
console.log(userInput)

function processInput(a) {
    var upper = a.toLocaleUpperCase();
    var lower = a.toLocaleLowerCase();
    if (a === upper) {
        console.log("Why are you yelling?")
    } else if (a === lower) {
        console.log("Why are you whispering?")
    } else {
        console.log("You are speaking in a normal tone.")
    }

}
processInput(userInput)
