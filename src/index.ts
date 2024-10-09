export const fizzBuzz = (fizzArray: (number | string)[] ) => {
    if (fizzArray.length === 0) console.log("please provide a number. cant be an empty array");
    fizzArray.forEach(element => {
        if (typeof element !== "number") console.log("Please provide a number. Try again");
        
        if (typeof element === "number" && element < 0) console.log("Please provide a positive number. Try again");

        if (typeof element === "number" && element > 100)console.log("Please provide a number below 100");
    });
};
