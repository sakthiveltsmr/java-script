let colors = ["red", "rose", "blue"];
console.log(colors.length);
//push
colors.push("green");
//unshift
colors.unshift("white");
//splice
colors.splice(2, 0, "orange");

console.log(colors);

// finding element in js Array
console.log(colors.indexOf("blue"));

//console.log(colors.indexOf("red") != -1);
console.log(colors.includes("orange"));
