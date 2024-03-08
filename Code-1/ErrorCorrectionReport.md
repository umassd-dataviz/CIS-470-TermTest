Errors:
Redundant Condition: The condition if (isStudent || hasCoupon) is repeated twice, which is unnecessary and could lead to confusion.
Discount Logic Error: The discount logic is flawed. The code is supposed to apply a 20% discount if both isStudent and hasCoupon are true, a 10% discount if only isStudent is true, and a 5% discount if only hasCoupon is true. However, the nested conditions don't correctly implement this logic.

Fixes:
Remove Redundant Condition: The redundant if (isStudent || hasCoupon) condition was removed to simplify the code.
Correct Discount Logic: The discount logic was corrected to properly apply discounts based on the combination of isStudent and hasCoupon.
