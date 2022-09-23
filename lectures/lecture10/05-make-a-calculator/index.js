const addNumbers = (ev) => {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
   let firstNumber= document.querySelector("#num1").value;


    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    let secondNumber= document.querySelector("#num2").value;
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    let sum = firstNumber + secondNumber;
    secondNumber= Number (secondNumber)

    // 4. Add the two numbers together.
    let sum = firstNumber + secondNumber

    // 5. Write the result to the #answer section
    document.querySelector("#answer").innerHTML
}

const subtractNumbers = (ev) => {
    // Same as above but subtract!
}

const multiplyNumbers = (ev) => {
    // Same as above but multiply!
}

const divideNumbers = (ev) => {
    // Same as above but divide!
}

