const a = [
  { id: 1, name: "sakthi" },
  { id: 2, name: "sadheesh" },
];
// finding an element in a array
let result = a.find(function (a) {
  return a.name === "sakthi";
});
console.log(result);
