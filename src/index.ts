

export const fizzBuzz = (fizzArray : (number | string)[]) => {
    if (fizzArray.length === 0) return "Please provide a number. Can't be an empty array";

    return fizzArray.map(element => {
        if (typeof element !== "number") return "Please provide a number. Try again";
        
        if (element < 0) return "Please provide a positive number. Try again";
        
        if (element > 100) return "Please provide a number below 100";
                
        if (element % 15 === 0) return "FizzBuzz";
        
        if (element % 3 === 0) return "Fizz";

        if (element % 5 === 0) return "Buzz";
        
        return element;
    });
};
//fizzBuzz([]);
console.log(fizzBuzz([1, 'banan', 3, 15, 5 , 101, -2, 7]));



