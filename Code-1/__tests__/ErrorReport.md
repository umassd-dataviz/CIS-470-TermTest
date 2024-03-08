if (typeof price !== "number" || price <= 0) => if (typeof price !== "number" || price < 0)
if (isStudent || hasCoupon) { =>       if (isStudent && hasCoupon) {
else if (hasCoupon) { =>        else if (isStudent) {


