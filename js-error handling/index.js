let person = {
  firstname: "sakthi",
  lastname: "vel",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },

  set fullname(val) {
    if (typeof val != "string") {
      const err = new Error("is not a string");
      throw err;
    }
    if (val.length <= 3) throw "is Invalid name";
    let values = val.split(" ");
    this.firstname = values[0];
    this.lastname = values[1] ?? "";
  },
};
try {
  person.fullname = "a";
} catch (exe) {
  alert(exe);
}
console.log(person.fullname);
