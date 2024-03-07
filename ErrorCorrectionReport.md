-----calculatePrice Errors-----
Line 7: Added check for isStudent being a boolean or not
Line 11: Added check for hasCoupon being a boolean or not
Line 18: comparison should be && not || as it needs both to be max discount (line 10 original)
Line 21: should check ifStudent not ifCoupon (line 13 original)
Last test case should be -600 not 600, or else the test case will never pass, or have it not throw an error, either is fine
Added Test Cases for line 7 and line 11 additions to check isStudent and hasCoupon boolean/non-boolean values

-----bloodPressure Errors-----
Line 21: Should be an || comparison between the ages
Line 25: should be < not <= in the comparison
Test case 9 of EC Partition is wrong, should not throw error as 130/120 is valid
Test cases 7 & 8 (BVA) should not throw an error, but according to the requiremnts they should. The passing of two values that are equal should throw an error according to the test cases AND requirements, but is necessary in order to check min and max "`systolic` should be greater than `diastolic`. If not, it should raise an error with the following message:
  - <span style="color:red;">"Error 03 - Invalid blood pressure readings: Must be positive and systolic > diastolic."</span>"
  NOTE: This presents an issue where if you check if they are equal, should throw an error according to the requirements, but not the test cases for min and max. To rectify this you have to make sure that the Equal case and test 7 & 8 of BVA do not throw an error as to test mins and maxs they must be equal as to not throw an error for systolic being greater than diastolic
Line 25: There must be a check for the maximum in order for max vlaue test cases to be applied