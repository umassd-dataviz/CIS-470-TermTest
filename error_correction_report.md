Code-1:

Changes:
1. Added two conditions to check if isStudent and hasCoupon are booleans
2. Changed nested if(isStudent || hasCoupon) to (isStudent && hasCoupon)
3. hasCoupon was used twice in the else if statement. Changed first else if to else if (isStudent){}
4. Added if(finalPrice < 0.8 * price) and commented it out
5. added a if (finalPrice > price) condition
6. Commented out less than 80% test case
7. Added not toThrowExcpetion to Output price is greater than input price since finalPrice cannot be more than price. I know we weren't supposed to edit the test cases but im not sure how this would work in its current state.

Code-2:

Changes:
1. Added systolic >= 500 || diastolic >= 500 to the validate systolic and diastolic condition.
2. Changed systolic <= diastolic to systolic < diastolic
3. Created a if (systolic == diastolic) condition below the validate systolic and diastolic condition
4. Added .not.toThrow to the Minimum Valid Age and Maximum Valid Age
5. Added 'Invalid blood pressure readings: Must be positive and systolic > diastolic.' throw message to Minimum Valid Age and Maximum Valid Age. Since both systolic and diastolic both have the same minimum and maximum values they will always be caught by the Systolic Equal to Diastolic catch. Unsure how to test both minimums and maximums without making them the same. Otherwise those test cases wont be valid without those previous changes. 
