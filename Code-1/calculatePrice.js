function calculatePrice(price, isStudent, hasCoupon) {
    // Validate input price type
    if (typeof price !== "number" || price <= 0 || price >= 500) {
      throw new Error("Invalid price: Price must be a positive number.");
    }

    // Validate input isStudent type
    if (typeof isStudent !== "boolean") {
      throw new Error("Invalid isStudent type: It should be either true or false");
    }

    // Validate input hasCoupon type
    if (typeof hasCoupon !== "boolean") {
      throw new Error("Invalid hasCoupon type: It should be either true or false");
    }
  
    // Apply discounts based on conditions
    let finalPrice = price;
    if (isStudent || hasCoupon) {
      if (isStudent && hasCoupon) {
        // Apply maximum discount for students with coupons
        finalPrice *= 0.8; // 20% discount
      } else if (isStudent) {
        // Apply standard student discount
        finalPrice *= 0.9; // 10% discount
      } else {
        // Apply coupon discount
        finalPrice *= 0.95; // 5% discount
      }
    }
    /* we ignore this one for now
    if(finalPrice<price*.8){
      throw new Error("The output price should be more than 80% of the actual price.")
    }
  */ 
  
    return finalPrice;
  }
  
module.exports = calculatePrice;
  
