const calculatePrice = require('./calculatePrice');

// Here is the example function call: 
const price = 100;
const isStudent = false;
const hasCoupon = false;
console.log(calculatePrice(price, isStudent, hasCoupon));