let msg = [1, 22, 34];
let msg1 = [11, 55, 19];
//every method
let alive = msg.every((value) => value >= 18);
console.log("alive", alive);
//some method
let result = msg1.some((value) => value >= 18);
console.log("result", result);
