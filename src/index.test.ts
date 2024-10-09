import { deepEqual, ok } from "node:assert/strict";
import test from "node:test";
import { fizzBuzz } from ".";


test("Write a trivial test that will fail", () => {
ok(true);
});

test("should log empty array",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([]);
    deepEqual(output, "please provide a number. cant be an empty array");
});

test.skip("Should log number 1 from array",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([]);
    deepEqual(output, "1");
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

