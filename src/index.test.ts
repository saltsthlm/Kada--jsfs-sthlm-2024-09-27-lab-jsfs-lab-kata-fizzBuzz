import { deepEqual, ok } from "node:assert/strict";
import test from "node:test";
import { fizzBuzz } from ".";

test("Write a trivial test that will fail", () => {
  ok(true);
});

test("should log empty array", () => {
  const result = fizzBuzz([]);
  deepEqual(result, "Please provide a number. Can't be an empty array");
});

test("Should provide a number.", () => {
  const result = fizzBuzz(["banan"]);
  deepEqual(result, ["Please provide a number. Try again"]);
});

test("Should provide a positive number.", () => {
  const result = fizzBuzz([-2]);

  deepEqual(result, ["Please provide a positive number. Try again"]);
});

test("Should provide a number below 100.", () => {
  const result = fizzBuzz([2215]);
  deepEqual(result, ["Please provide a number below 100"]);
});

test("Should provide FizzBuzz.", () => {
  const result = fizzBuzz([90]);
  deepEqual(result, ["FizzBuzz"]);
});

test("Should provide Fizz.", () => {
  const result = fizzBuzz([21]);
  deepEqual(result, ["Fizz"]);
});

test("Should provide Buzz.", () => {
  const result = fizzBuzz([55]);
  deepEqual(result, ["Buzz"]);
});
