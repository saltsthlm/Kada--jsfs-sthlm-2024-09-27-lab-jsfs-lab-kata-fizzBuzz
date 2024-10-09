// const dividedNumbersLeaveNoRest = (numberToDivide: number, numberToDivideWith: number) => {
//     return numberToDivide % numberToDivideWith === 0;
// };

// export const fizzBuzz = (fizzArray: (number | string)[] ) => {
//     if (fizzArray.length === 0) console.log("Please provide a number. cant be an empty array");
//     fizzArray.forEach(element => {
//         if (typeof element !== "number") console.log("Please provide a number. Try again");

//         if (typeof element === "number" && element < 0) console.log("Please provide a positive number. Try again");

//         if (typeof element === "number" && element > 100) console.log("Please provide a number below 100");

//         if (typeof element === "number" && element <= 100 && element > 0 && !dividedNumbersLeaveNoRest(element, 3) && !dividedNumbersLeaveNoRest(element, 5) && !dividedNumbersLeaveNoRest(element, 15)) console.log(`${element}`);

//         if (typeof element === "number" && dividedNumbersLeaveNoRest(element, 15) && element <= 100) console.log("FizzBuzz");

//         if (typeof element === "number" && dividedNumbersLeaveNoRest(element, 3) && !dividedNumbersLeaveNoRest(element, 15) && element <= 100) console.log("Fizz");

//         if (typeof element === "number" && dividedNumbersLeaveNoRest(element, 5) && !dividedNumbersLeaveNoRest(element, 15) && element <= 100) console.log("Buzz");
//     });
// };

// //fizzBuzz([3, 5, 15, 5, 7, 'b', 3]);
// fizzBuzz([-2]);
