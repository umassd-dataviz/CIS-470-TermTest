const calculatePrice = require('../calculatePrice'); // Assuming your function is in a separate file

describe('calculatePrice function', () => {
  // Test valid price with no discounts
  test('Valid price, isStudent=false, hasCoupon=false', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = false;
    // Expect no discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(100);
  });

  // Test valid price with student discount only
  test('Valid price, isStudent=true, hasCoupon=false', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = false;
    // Expect a 10% student discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(90);
  });

  // Test valid price with coupon discount only
  test('Valid price, isStudent=false, hasCoupon=true', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = true;
    // Expect a 5% coupon discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(95);
  });

  // Test valid price with both student and coupon discounts
  test('Valid price, isStudent=true, hasCoupon=true', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = true;
    // Expect a 20% discount to be applied (max discount)
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(80);
  });

  // Test negative price input
  test('Price is a negative number', () => {
    const price = -10;
    const isStudent = false;
    const hasCoupon = false;
    // Expect an error for invalid price
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // Test non-numeric price input
  test('Price is a string', () => {
    const price = "10";
    const isStudent = false;
    const hasCoupon = false;
    // Expect an error for invalid price type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // Test non-boolean isStudent input
  test('isStudent is not boolean', () => {
    const price = 100;
    const isStudent = "true";
    const hasCoupon = false;
    // Expect an error for invalid isStudent type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid isStudent type: It should be either true or false");
  });

  // Test non-boolean hasCoupon input
  test('hasCoupon is not boolean', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = "false";
    // Expect an error for invalid hasCoupon type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid hasCoupon type: It should be either true or false");
  });

  // Test output price is not greater than input price
  test('Output price is greater than input price', () => {
    const price = 600;
    const isStudent = false;
    const hasCoupon = false;
    const outputPrice = calculatePrice(price, isStudent, hasCoupon);
    // Expect output price to be less than or equal to input price
    expect(outputPrice).toBeLessThanOrEqual(price);
  });

  // BVA: Test price just above zero
  test('Price is just above zero (min+)', () => {
    const price = 0.01;
    const isStudent = false;
    const hasCoupon = false;
    // Expect no discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(0.01);
  });

  // BVA: Test a very large price
  test('Price is a large number (max)', () => {
    const price = Number.MAX_SAFE_INTEGER;
    const isStudent = false;
    const hasCoupon = false;
    // Expect no discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(Number.MAX_SAFE_INTEGER);
  });

  // BVA: Test price just below zero
  test('Price is just below zero (min-)', () => {
    const price = -0.01;
    const isStudent = false;
    const hasCoupon = false;
    // Expect an error for invalid price
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // BVA: Test price above the large number
  test('Price is above the large number (max+)', () => {
    const price = Number.MAX_SAFE_INTEGER + 1;
    const isStudent = false;
    const hasCoupon = false;
    // Expect no discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(Number.MAX_SAFE_INTEGER + 1);
  });

  // ECP: Test valid price with valid boolean values
  test('Valid price with valid boolean values (valid class)', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = true;
    // Expect a 20% discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(80);
  });

  // ECP: Test valid price with invalid boolean values
  test('Valid price with invalid boolean values (invalid class)', () => {
    const price = 100;
    const isStudent = "true";
    const hasCoupon = "false";
    // Expect an error for invalid isStudent type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid isStudent type: It should be either true or false");
  });

  // ECP: Test invalid price with valid boolean values
  test('Invalid price with valid boolean values (invalid class)', () => {
    const price = "100";
    const isStudent = true;
    const hasCoupon = false;
    // Expect an error for invalid price type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // ECP: Test invalid price with invalid boolean values
  test('Invalid price with invalid boolean values (invalid class)', () => {
    const price = "100";
    const isStudent = "true";
    const hasCoupon = "false";
    // Expect an error for invalid price type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // Decision Table: Test valid price with no discount
  test('Valid price, isStudent=false, hasCoupon=false (no discount)', () => {
    const price = 50;
    const isStudent = false;
    const hasCoupon = false;
    // Expect no discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(50);
  });

  // Decision Table: Test valid price with student discount only
  test('Valid price, isStudent=true, hasCoupon=false (student discount)', () => {
    const price = 50;
    const isStudent = true;
    const hasCoupon = false;
    // Expect a 10% student discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(45);
  });

  // Decision Table: Test valid price with coupon discount only
  test('Valid price, isStudent=false, hasCoupon=true (coupon discount)', () => {
    const price = 50;
    const isStudent = false;
    const hasCoupon = true;
    // Expect a 5% coupon discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(47.5);
  });

  // Decision Table: Test valid price with both student and coupon discounts
  test('Valid price, isStudent=true, hasCoupon=true (max discount)', () => {
    const price = 50;
    const isStudent = true;
    const hasCoupon = true;
    // Expect a 20% discount to be applied
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(40);
  });

  // Decision Table: Test invalid price (negative number)
  test('Invalid price (negative number)', () => {
    const price = -50;
    const isStudent = false;
    const hasCoupon = false;
    // Expect an error for invalid price
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  // Decision Table: Test invalid isStudent type (number instead of boolean)
  test('Invalid isStudent type (number instead of boolean)', () => {
    const price = 50;
    const isStudent = 1;
    const hasCoupon = false;
    // Expect an error for invalid isStudent type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid isStudent type: It should be either true or false");
  });

  // Decision Table: Test invalid hasCoupon type (number instead of boolean)
  test('Invalid hasCoupon type (number instead of boolean)', () => {
    const price = 50;
    const isStudent = false;
    const hasCoupon = 1;
    // Expect an error for invalid hasCoupon type
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid hasCoupon type: It should be either true or false");
  });
});
