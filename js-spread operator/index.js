let person = {
  name: "sakthi",
  get: function () {
    let msg = `my name is ${this.name}`;
    console.log(msg);
  },
};
// spread operator
let person2 = { ...person };
console.log(person2);
person2.get();
