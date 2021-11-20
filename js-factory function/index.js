//factory function
function createperson(name) {
  return {
    name: name,
    greeting: function () {
      let msg = `My name is ${this.name}`;
      console.log(msg);
    },
  };
  //return person;
}
let sakthi = createperson("sakthi");
sakthi.greeting();
let sadhees = createperson("sadheeswaran");
sadhees.greeting();
