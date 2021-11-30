// immedieate input invoking expression(IIIE)
(() => {
  let a = 154;
  let b = 500;
  let c = a + b;
  // nested function
  (() => {
    console.log(`result is:`, c);
  })();
})();
