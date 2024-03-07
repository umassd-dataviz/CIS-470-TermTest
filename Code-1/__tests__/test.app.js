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
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  }); 

  test('Output price is greater than input price', () => {
    const price = 600;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  test('Price is zero', () => {
    const price = 0;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });// tests for the price being zero just outside the min range

  test('Price is one', () => {
    const price = 1;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(1);
  });// tests for the price at the minimum range

  test('Maximum possible price', () => {
    const price = Number.MAX_VALUE;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(Number.MAX_VALUE);
  });// tests the max value 

  test('Non-numeric price', () => {
    const price = "invalid";
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  }); // tests invalid price that is not a number

  test('Price is null', () => {
    const price = null;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });// price needs to be positive number
});
