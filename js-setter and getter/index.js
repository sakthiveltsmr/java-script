let person = {
  firstname: "sakthi",
  lastname: "vel",
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  },

  set fullname(val) {
    let values = val.split(" ");
    this.firstname = values[0];
    this.lastname = values[1] ?? "";
  },
};

person.fullname = "siva kumar";
console.log(person.fullname);
