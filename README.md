# fizzbuzz-tdd
A FizzBuzz code kata for TDD demonstration purposes in Node _(with babel)_.

## Instructions
In this exercise, you will have to create a function named `fizzbuzz`. This function will accept a single integer parameter and will return, depending on the value:

    If a number is not a multiple of 3 or 5, return the number itself
    If a number is a multiple of 3, it will return "fizz"
    If a number is a multiple of 5, it will return "buzz"
    If a number a multiple of both 3 and 5, it will return "fizzbuzz"

## Directions
* You will find a placeholder function & corresponding test suite file in `src/fizzbuzz.js` & `src/fizzbuzz.test.js`.
* Test drive your implementation. No code inside the `fizzbuzz` function can be written until an accompaning unit test is failing.
* Write a test case for each of the cases above.
* For extra credit, think of any additional test cases or edge cases that come to mind and test drive those exceptional circumstances.
* I have also included a finished example of the kata inside the example files. I would encourage you to not look at those files until you are finished. Where did our opinions differ? Did you think of cases that I missed? Was our implementaton/code style different?

## Usage
* Install project dependencies:
```
$: yarn
```
* In the root directory of the project run:
```
$: npm run test
```
* To keep your tests continuously running as you make changes:
```
$: npm run test:watch
```
* To run the example tests:
```
$: npm run test:example:watch
```
