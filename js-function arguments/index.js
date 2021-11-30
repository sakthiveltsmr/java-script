//function arguments
function demo() {
  total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
}
let res1 = demo(10, 20, 30, 40, 33, 10);
console.log(`result is:${res1}`);
