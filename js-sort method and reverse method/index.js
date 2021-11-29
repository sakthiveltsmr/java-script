//primitive method
let num = [1, 6, 5, 4];

num.sort();
console.log(num);

num1 = num.reverse();
console.log(num1);

//reference method using object

let sakthi = [
  { id: 3, name: "sakthi" },
  { id: 1, name: "Arun" },
  { id: 2, name: "Guna" },
];

sakthi.sort((a, b) => {
  nameA = a.name.toLocaleLowerCase;
  nameB = b.name.toLocaleLowerCase;
  if (nameA < nameB) return -1;

  if (nameA > nameB) return 1;

  return 0;
});
console.log(sakthi);
