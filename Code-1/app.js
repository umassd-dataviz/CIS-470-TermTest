const calculatePrice = require('./calculatePrice');

// Here is the example function call: 
const price = 50;
const isStudent = false;
const hasCoupon = true;
console.log(calculatePrice(price, isStudent, hasCoupon));