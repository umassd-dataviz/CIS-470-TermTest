Dicount Error:
Due to the nested conditional checking if it isStudent or hasCoupon, it completely skips over the 5% discount and 10% discount, only rewarding the 20% discount to if either is meant. To fix this, all you have to is change the isStudent or hasCoupon to isStudnet and hasCoupon, so now it will check to make sure both are met first.

Input Validation Error:
The function doesn't check to make sure that isStudent or hasDiscount is a boolean. The fix is to just make sure both are booleans, and if not, throw an error.