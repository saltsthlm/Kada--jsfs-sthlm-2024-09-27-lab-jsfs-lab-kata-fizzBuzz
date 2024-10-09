# Salt Kata Series

## Kata FizzBuzz

#### What you will be working on
Today you will be solving the classic FizzBuzz kata. By the end of the lab we want you to:

- Have gained even better understanding of Node.js.
- Get even better at unit testing and get comfortable with Jest a bit more.
- Get better at solving problems as a team.

#### Linting

Set up the project to use ESLint with the recommended lint config. You can find the instructions on how to use our recommended lint tool [here](https://github.com/appliedtechnology/jsfs-lab-lintingDemo).

#### Testing

Set up the project to use the _Jest_ as test runner. You can find the instructions on how to we recommend using it [here](https://github.com/appliedtechnology/jsfs-lab-testingDemo).


### Lab instructions

We're going to do the classic FizzBuzz kata described [here](http://codingdojo.org/kata/FizzBuzz/) and below.

#### TDD

Here's a quick refresher on how we write tests:

- Red

  - Write a trivial test and make sure it fails.

- Green

  - Write the simplest possible implementation to make the test pass.

- Refactor

  - Refactor the implementation until you're satisfied with the code.

- Go back to red
  - Write a new test

#### Problem Description

Imagine that you are eleven years old, and five minutes before the end of the lesson, the Maths teacher decides they should make the class a bit more “fun”, by introducing a “game”. The teacher explains that they are going to point at each student one by one and ask them to say the next number in the sequence, starting from one. The “fun” part of the game is if the number to be said is divisible by three, you instead say “Fizz” and if it is divisible by five you say “Buzz”.

Now, the Maths teacher starts pointing at all of your classmates one by one, and they happily shout “one!”, “two!”, “Fizz!”, “four!”, “Buzz!”… until the teacher points at you, with a steely gaze…

Time stands still, your mouth dries up, your palms become sweatier until you finally manage to croak “Fizz!”. Doom is avoided, and the pointing finger moves on.

In order to avoid embarrassment in front of your whole class, you had to get the full list imagined in your brain to know what to say. Imagine your class having 33 students. That means the teacher might do an entire round three times before the bell rings for break time. The next Maths lesson is on Thursday. Get coding!

#### Technical Requirements

Write a program which takes an array containing numbers between 1-100 as an input, prints the number or, if the number is a multiple of three, prints “Fizz” instead of the number and for the multiples of five prints “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz“.

However, if the elements in the array are of any other value than numbers between 1-100 you should signal to the user **without throwing any errors!** whether the operation was successful or not. This means that if the call has invalid input, _e.g._ with an array including `-4` or `"foo"`, they should get a message back that says there was an error and some indication on what went wrong and how to fix it.

Sample output when input is _valid_

```text
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
... etc up to 100
```

Sample output when input is _invalid_

```text
1
2
Bogus ... "Please provide a number. Try again"
4
5
-4  ... "Please provide a positive number. Try again"
100012031411 ... "Please provide a number below 100"

```

#### Done? Challenge yourselves
Here are some additional conditions we can add to our FizzBuzz application.

- A number is fizz if it is divisible by 3 or if it has a 3 in it. For example, `33`, `13` both say `Fizz`
- A number is buzz if it is divisible by 5 or if it has a 5 in it. For example, `105`, `517` both say `Buzz`
- A number is fizzbuzz if it divisible by `3 and 5` or has `15` in it. For example, `15`, `2215` both say `FizzBuzz`

---

Good luck and have fun!
