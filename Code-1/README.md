### Code - 1: Price Calculator<br>Detailed Program Specs:

The program `calculatePrice.js` is a simple JavaScript code that calculates the amount of the discount based on the following criteria:

**Discount Calculation**:
   - If `isStudent` is `true`, apply a 10% discount.
   - If `hasCoupon` is `true`, apply a 5% discount.
   - If both `isStudent` and `hasCoupon` are `true`, apply a 20% discount (maximum discount)

**Input Validation**:
The function must validate all of the input parameters (`price`, `isStudent` and `hasCoupon`). If the parameters do not fit in the following range, it program should raise an error:
- `price` must be of type Number, should be more than 0, and less than 500. If not, it should raise an error with the following message<br><span style="color:red;">"Error 01 - Invalid price: Price must be a positive number."</span>
- `isStudent` must be of Type boolean (`true`/`false`). If not, it should raise an error with the following message:<br> <span style="color:red;">"Error 02: Invalid isStudent type: It should be either true or false"</span>

- `hasCoupon` must be of Type boolean (`true`/`false`). If not, it should raise an error with the following message:<br> <span style="color:red;">"Error 03: Invalid hasCoupon type: It should be either true or false"</span>


**Output and Validation of the Output**:
   - The function should return the final price after applying discounts.
   - The returned value should not be more than the price itself, and should not be less than 80% of the price.
   - The type of output should be `Number`. If not, it should raise an error with the following message<br><span style="color:red;">"Error 04 - Invalid price: Price must be a positive number."</span>

#### Code Runner (app.js)
You can run the program using the runner code provided `app.js`. You can run `app.js` in terminal:
```
node app.js
```

#### Running the Test file
By default the test files should be placed in the `__tests__` director, and called from there. In this program a fully functional test file is added in the directory. You can run all the test in terminal:
```
npm test
```

