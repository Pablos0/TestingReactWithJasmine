const factorial = (inputNumber) => {
    if (typeof inputNumber !== "number") throw new Error("Has to be a number.");
    
    if (inputNumber < 0)
    throw Error("We don't allow factorial of a negative number.");

    if (inputNumber === 1 || inputNumber === 0) return 1;

    return inputNumber * exports.factorial(inputNumber - 1);
};

exports.factorial = factorial;