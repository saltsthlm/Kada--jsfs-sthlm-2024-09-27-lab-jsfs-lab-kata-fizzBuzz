import { deepEqual, ok } from "node:assert/strict";
import test from "node:test";
import { fizzBuzz } from "./index-old";

test("Write a trivial test that will fail", () => {
  ok(true);
});

test("should log empty array", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz([]);
  deepEqual(output, "Please provide a number. cant be an empty array");
});

test("Should provide a number.", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz(["banan"]);
  deepEqual(output, "Please provide a number. Try again");
});

test("Should provide a positive number.", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz([-2]);
  deepEqual(output, "Please provide a positive number. Try again");
});

test("Should provide a number below 100.", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz([2215]);
  deepEqual(output, "Please provide a number below 100");
});

test("Should provide FizzBuzz.", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz([90]);
  deepEqual(output, "FizzBuzz");
});

test("Should provide Fizz.", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz([21]);
  deepEqual(output, "Fizz");
});

test("Should provide Buzz.", () => {
  let output = "";
  console.log = (msg) => {
    output = msg;
  };

  fizzBuzz([55]);
  deepEqual(output, "Buzz");
});
