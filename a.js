// If I write []==true,will it show true or false? Check it out.

[] == true;
if (!![] == true) {
  console.log("array is truthy");
}
//  eivabe likhle ki hobe
const yourvar = [];
if (!!yourvar) {
  console.log("yourvar are true");
} else {
  console.log("yourvar are false");
}
// Use === to check if the true === "true" gives true or false.

true === "true";
if (true === "true") {
  console.log("values are true");
} else {
  console.log("values are false");
}

//2.Write an arrow function that will take a parameter and will check if the parameter is a number or not by using isNaN(). And return true or false.

const number = (a) => {
  if (typeof a === "number") {
    return true;
  } else {
    return false;
  }
};

const result = number(10);

console.log(result);

// 3.Change the value stored in the storeFalsyValue variable to a falsy value,
// such that the code in the else statement executes.
let storeFalsyValue = true;
if (!storeFalsyValue) {
  console.log(`Nothing to show!`);
} else {
  console.log(`You are amazing!`);
}

//4. Write an arrow function that will take 3 parameters (first two parameters will be numbers and the third
//   parameter will be a string) that will perform arithmetic operation depending on the third parameter and
//   will print the result. For example:
//   1. Print result of num1+num2 if operation is “add”
//   2. Print result of num1-num2 if operation is “subtract”
//   3. Print result of num1*num2 if operation is “multiply”
//   4. Print result of num1/num2 if operation is “divide”
//   5. Print result of num1%num2 if operation is “modulus”
//   6. Else print “Invalid operation”
const numbers = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "add":
      result = num1 + num2;
      return result;
      break;
    case "subtract":
      result = num1 - num2;
      return result;
      break;
    case "multiply":
      result = num1 * num2;
      return result;
      break;
    case "divide":
      result = num1 / num2;
      return result;
      break;
    case "modulus":
      result = num1 % num2;
      return result;
      break;
    default:
      return "Invalid operation";
  }
};
console.log(numbers(2, 2, "add"));
