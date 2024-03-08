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

  test('Output price is less than 80% of input price', () => {
    const price = 10;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(10);
  });

  /*
  test('Output price is less than 80% of input price', () => {
    const price = 10;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });
  */

  test('Output price is greater than input price', () => {
    const price = 600;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });


  test('Price is above maximum limit', () => {
    const price = 501;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });
  
  test('Price after discount', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBeGreaterThanOrEqual(80);
  });

  test('Output price type is not a number', () => {
    const price = "100";
    const isStudent = true;
    const hasCoupon = true;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });
  
  test('Only coupon discount applied', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(95);
  });
  
  test('Only student discount applied', () => {
    const price = 100;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(90);
  });

  test('Only coupon discount applied', () => {
    const price = 100;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(95);
  });
  
  test('Only coupon discount applied', () => {
    const price = 50;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(47.5);
  });
  
  test('Price is just above the minimum limit', () => {
    const price = 1;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(1);
  });
  
  test('Price is just below the maximum limit', () => {
    const price = 499;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(499);
  });
  
  test('Price is at the maximum limit', () => {
    const price = 500;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(500);
  });

  test('Valid price with no discounts', () => {
    const price = 250;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(250);
  });
  
  test('Valid price with student discount only', () => {
    const price = 300;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(270);
  });
  
  test('Valid price with student discount only', () => {
    const price = 400;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(360);
  });

  test('Valid price with coupon discount only', () => {
    const price = 400;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(380);
  });

  test('Valid price with both discounts applied', () => {
    const price = 200;
    const isStudent = true;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(160);
  });
  
  test('Valid price with coupon discount only, alternative values', () => {
    const price = 200;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(190);
  });

  test('Valid price with coupon discount only, alternative values', () => {
    const price = 200;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(180);
  });

});
