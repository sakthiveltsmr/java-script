let a = ["sakthi", "siva", "ramu"];
// for of
for (let res of a) {
  console.log(res);
}
// for in
for (let Res in a) {
  console.log(Res, a[Res]);
}
// for each

a.forEach((name) => console.log(name));
