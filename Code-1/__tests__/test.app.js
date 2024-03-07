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
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number");
  });

  test('Price is a string', () => {
    const price = "10";
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number");
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

  // test('Output price is less than 80% of input price', () => {
  //   const price = 10;
  //   const isStudent = false;
  //   const hasCoupon = false;
  //   expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("The output price should be more than 80% of the actual price.")
  // });

  test('Output price is greater than input price', () => {
    const price = -600;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number");
  });

  // New tests starting from here
  test('Testing just below the min', () => {
    const price = 0;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number");
  });

  test('Testing the min', () => {
    const price = 1;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(1);
  });

  test('Testing just above the min', () => {
    const price = 2;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(2);
  });

  test('Testing a center value', () => {
    const price = 250;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(250);
  });

  test('Testing just below the max', () => {
    const price = 498;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(498);
  });

  test('Testing the max', () => {
    const price = 499;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(499);
  });

  test('Testing just above the max', () => {
    const price = 500;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number");
  });
});
