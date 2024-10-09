import { deepEqual, ok } from "node:assert/strict";
import test from "node:test";
import { fizzBuzz } from ".";


test.skip("Write a trivial test that will fail", () => {
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


test.skip("should log empty array",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([]);
    deepEqual(output, "please provide a number. cant be an empty array");
});

test("Should log number 1 from array",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([1]);
    deepEqual(output, "1");
});

test.skip("should log empty array",() => {
    let output = "";
    console.log = (msg) => { 
        output = msg;
    };

    fizzBuzz([]);
    deepEqual(output, "please provide a number. cant be an empty array");
});


test.skip("Should log number 1",() => {
    const result = fizzBuzz([0]);
    deepEqual(result, 1);
});

test.skip("Should return log for number 3", () => {
    const result = fizzBuzz([]);
    deepEqual(result, 3);
});