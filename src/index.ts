export const fizzBuzz = (fizzArray: (number | string)[] ) => {
    if (fizzArray.length === 0) console.log("please provide a number. cant be an empty array");
    fizzArray.forEach(element => {
        if (typeof element !== "number") console.log("Please provide a number. Try again");
        
        if (typeof element === "number" && element < 0) console.log("Please provide a positive number. Try again");

        if (typeof element === "number" && element > 100) console.log("Please provide a number below 100");

        if (typeof element === "number" && element % 15 === 0) console.log("FizzBuzz");

        if (typeof element === "number" && element % 3 === 0 && element % 15 !== 0) console.log("Fizz");

        if (typeof element === "number" && element % 5 === 0 && element % 15 !== 0) console.log("Buzz");
    });
};

fizzBuzz([3000000]);
