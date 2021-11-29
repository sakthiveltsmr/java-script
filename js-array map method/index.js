let person = [
  { id: 1, fname: "sakthi", lname: "vel" },
  { id: 2, fname: "raj", lname: "kumar" },
];
let final = person.map(function (val) {
  let fullname = [val.fname, val.lname].join(" ");
  let obj = { id: val.id, fullname };
  return obj;
});
console.log(final);
