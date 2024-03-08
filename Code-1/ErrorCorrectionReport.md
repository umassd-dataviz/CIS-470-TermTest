ERR 1: Line 23: if (isStudent || hasCoupon) {       =>        if (isStudent && hasCoupon) {

ERR 2: Line 26: } else if (hasCoupon) {       =>              } else if (isStudent) {

FUNC ERR: ADDED TO LINE 11: Code to make sure isStudent and hasCoupon are boolean 
FUNC ERR: ADDED TO LINE 7: Code to make sure input must be less than 500