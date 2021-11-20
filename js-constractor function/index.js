// constractor function
function createfunction(name) {
  return {
    name: name,
    age: 24,
    get: function () {
      let msg = `my name is ${this.name},and my age is ${this.age}`;
      console.log(msg);
    },
  };
}
let sakthi = new createfunction("sakthi");
sakthi.get();
