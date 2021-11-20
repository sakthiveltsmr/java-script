let employe = {
  name: "sakthi",
  id: 1001,
  age: 24,
  address: {
    city: "chennai",
    state: "tamilnadu",
  },
  get: function () {
    let msg = `my name is ${this.name},and my id is ${this.id}`;
    console.log(msg);
  },
};
employe.get();
