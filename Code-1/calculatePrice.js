function calculatePrice(price, isStudent, hasCoupon) {
  // Validate input price type
  if (typeof price !== "number" || price <= 0) {
    throw new Error("Invalid price: Price must be a positive number.");
  }

  // Apply discounts based on conditions
  let finalPrice = price;
  if (isStudent || hasCoupon) {
    if (isStudent &&  hasCoupon) { // || stament should be an &&
      // Apply maximum discount for students with coupons
      finalPrice *= 0.8; // 20% discount
    } else if (isStudent) { // instead of hasCoupon it should be isStudent
      // Apply standard student discount
      finalPrice *= 0.9; // 10% discount
    } else if (hasCoupon) {
      // Apply coupon discount
      finalPrice *= 0.95; // 5% discount
    }
  }
if(finalPrice<price*.08){
  throw new Error("Invalid price: Price after discount cannot be less than 8% of the original price.");
  
}
  return finalPrice;
}

module.exports = calculatePrice;