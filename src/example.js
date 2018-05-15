

/*
  Implementation at test 1:
*/

// export default function fizzbuzz(number) {
//   return number
// }

/*
  Implementation at test 2:
*/

// export default function fizzbuzz(number) {
//   if (number % 3 === 0)
//     return 'fizz'

//   return number
// }

/*
  Implementation at test 3:
*/

// export default function fizzbuzz(number) {
//   if (number % 3 === 0)
//     return 'fizz'
//   else if (number % 5 === 0)
//     return 'buzz'

//   return number
// }

/*
  Implementation at test 4:
*/

// export default function fizzbuzz(number) {
//   if (number % 5 === 0 && number % 3 === 0)
//     return 'fizzbuzz'
//   if (number % 3 === 0)
//     return 'fizz'
//   else if (number % 5 === 0)
//     return 'buzz'

//   return number
// }

/*
  NOTE: You're probably thinking, "But James! You TDD'ed and that last implementation looks gross!
    Look at all that duplication.' Yup, you're totally right. Now lets practice some GREEN refactoring.
    Since our cases are written for us, and we know we have code that already passes all of our suites,
    we can refactor with confidence. As long as the tests still pass, we can clean this code however we please.
    I'd personally opt for something like below:
*/
/*
  Implementation when practicing green refacoring:
*/

export default function fizzbuzz(number) {
  const isFizz = number % 3 === 0
  const isBuzz = number % 5 === 0

  if (isFizz && isBuzz)
    return 'fizzbuzz'
  else if (isFizz)
    return 'fizz'
  else if (isBuzz)
    return 'buzz'

  return number
}

/*
  Extra credit edge case implementation:
*/
// export default function fizzbuzz(number) {
//   validateParams(number)

//   const isFizz = number % 3 === 0
//   const isBuzz = number % 5 === 0

//   if (isFizz && isBuzz)
//     return 'fizzbuzz'
//   else if (isFizz)
//     return 'fizz'
//   else if (isBuzz)
//     return 'buzz'

//   return number
// }

// function validateParams(arg) {
//   const isInt = arg === parseInt(arg, 10)
  
//   if (!isInt)
//     throw new Error('Parameter must be an integer')
// }
