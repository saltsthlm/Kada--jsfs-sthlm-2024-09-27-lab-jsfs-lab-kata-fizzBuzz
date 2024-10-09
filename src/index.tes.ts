import { deepEqual, ok } from "node:assert/strict";
import test from "node:test";
import { fizzBuzz } from ".";


// if (typeof element !== "number") return "Please provide a number. Try again";
        
//         if (element < 0) return "Please provide a positive number. Try again";
        
//         if (element > 100) return "Please provide a number below 100";
                
//         if (element % 15 === 0) return "FizzBuzz";
        
//         if (element % 3 === 0) return "Fizz";

//         if (element % 5 === 0) return "Buzz";


test("Write a trivial test that will fail", () => {
  ok(true);
});

test("should log empty array",() => {
    const result = fizzBuzz([]);
    deepEqual(output, "Please provide a number. cant be an empty array");
});

test("Should provide a number.",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz(["banan"]);
    deepEqual(output, "Please provide a number. Try again");
});

test("Should provide a positive number.",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([-2]);
    deepEqual(output, "Please provide a positive number. Try again");
});


test("Should provide a number below 100.",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([2215]);
    deepEqual(output, "Please provide a number below 100");
});


test("Should provide FizzBuzz.",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([90]);
    deepEqual(output, "FizzBuzz");
});

test("Should provide Fizz.",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([21]);
    deepEqual(output, "Fizz");
});

test("Should provide Buzz.",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([55]);
    deepEqual(output, "Buzz");
});

