const calculatePrice = require('../calculatePrice'); // Assuming your function is in a separate file

describe('calculatePrice function', () => {
  test('Valid price, isStudent=false, hasCoupon=false', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(100);
  });

  test('Valid price, isStudent=true, hasCoupon=false', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(90);
  });

  test('Valid price, isStudent=false, hasCoupon=true', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(95);
  });

  test('Valid price, isStudent=true, hasCoupon=true', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(80);
  });

  test('Price is a negative number', () => {
    const price = -10;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  test('Price is a string', () => {
    const price = "10";
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  test('isStudent is not boolean', () => {
    const price = 100;
    const isStudent = "true";
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid isStudent type: It should be either true or false");
  });

  test('hasCoupon is not boolean', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = "false";
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid hasCoupon type: It should be either true or false");
  });


  /* let's ingore this for now!
  test('Output price is less than 80% of input price', () => {
    const price = 10;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("The output price should be more than 80% of the actual price.")
  });
*/
  test('Output price is greater than input price', () => {
    const price = 600;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // BVA: Boundary Value Analysis
  // Test case: Price at minimum valid value
  test('BVA: Price at minimum valid value (just more than 0)', () => {
    // Description: Tests the function with the lowest possible valid price
    // This tests the boundary at the low end of the price range
    expect(calculatePrice(0.01, false, false)).toBeCloseTo(0.01);
  });

  // Test case: Price at maximum valid value
  test('BVA: Price at maximum valid value (just less than 500)', () => {
    // Description: Tests the function with the highest possible valid price
    // This tests the boundary at the high end of the price range
    expect(calculatePrice(499.99, false, false)).toBeCloseTo(499.99);
  });

  // Test case: Price more than max
  test('BVA: Price more than maximum valid value', () => {
    // Description: Tests the function with a price above the valid range
    // Expecting an error since the price exceeds the maximum limit
    expect(() => calculatePrice(500.01, false, false)).toThrowError();
  });

  // Test case: Price less than min
  test('BVA: Price less than minimum valid value', () => {
    // Description: Tests the function with a price below the valid range
    // Expecting an error since the price is below the minimum limit
    expect(() => calculatePrice(-1, false, false)).toThrowError();
  });

  // ECP: Equivalence Class Partitioning
  // Valid Class
  test('ECP: Valid price with student discount', () => {
    // Description: Tests the function with a valid price and student status
    // Represents a valid class of inputs where discounts apply
    expect(calculatePrice(100, true, false)).toBe(90); // Assuming 10% student discount
  });

  // Invalid Class
  test('ECP: Invalid type for isStudent', () => {
    // Description: Tests the function with an invalid type for isStudent
    // This represents an invalid class of inputs for isStudent
    expect(() => calculatePrice(100, 'true', false)).toThrowError();
  });

  // Decision Table
  // Valid Case
  test('Decision Table: Student with Coupon', () => {
    // Description: Tests combination of being a student and having a coupon
    // This case tests the application of both discounts
    expect(calculatePrice(100, true, true)).toBe(80); // Assuming cumulative discount
  });

  // Invalid Case
  test('Decision Table: Invalid inputs for both isStudent and hasCoupon', () => {
    // Description: Tests with invalid types for both isStudent and hasCoupon
    // This tests handling of multiple invalid inputs together
    expect(() => calculatePrice(100, 'true', 'true')).toThrowError();
  });
});

