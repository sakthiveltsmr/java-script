function demo(loan, ...rest) {
  //console.log(arguments[0]);

  let total = rest.reduce((a, b) => a + b);
  return total - loan;
}
let result = demo(10, 20, 30, 40);
console.log(`the result is: ${result}`);
