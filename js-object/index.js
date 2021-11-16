let person = {
  name: "sakthivel",
  age: 22,
  isAlive: true,
  gender: "Male",
  address: "Chennai, Tamilnadu, india",
  sibling: {
    brother: "Thilakaraj",
    sister: "Rajeshwari",
  },
}; // object
person.age = 24;
document.write(person.age);
document.write(person["gender"]);
document.write(person.sibling.brother);
