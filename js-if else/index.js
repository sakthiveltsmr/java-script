//let hrs = new Date();
//let hours = hrs.getHours();
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
//let hours = prompt("enter the hours");
document.write(hours + ":" + minutes + " ");

if (hours >= 0 && hours <= 12) {
  document.write("good morning");
} else if (hours >= 12 && hours <= 16) {
  document.write("good afternoon");
} else {
  document.write("good evening");
}
