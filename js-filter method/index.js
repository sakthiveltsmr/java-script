let purches = [
  { id: 1, item: "Android Mobile", cost: "7800" },
  { id: 2, item: "Iphone Mobile", cost: "25000" },
  { id: 3, item: "Redmi Mobile ", cost: "15000" },
  { id: 4, item: "Nokia Mobile", cost: "2500" },
  { id: 5, item: "Windows Mobile", cost: "5000" },
];

let result = purches.filter(function (value) {
  return value.cost <= 10000;
});
console.log(result);
