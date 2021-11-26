let person = [
  { id: 1, name: "sakthi" },
  { id: 2, name: "ramu" },
];
// arrow function
let res = person.find((person) => person.name === "sakthi");
console.log(res);
