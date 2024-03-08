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

  //Boundary Value Analysis
  test('Valid price on min, isStudent=true, hasCoupon=true', () => {
    const price = 1;
    const isStudent = true;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(0.8);
  });

  test('Valid price on min, isStudent=false, hasCoupon=true', () => {
    const price = 1;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(0.95);
  });

  test('Valid price on min, isStudent=true, hasCoupon=false', () => {
    const price = 1;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(0.90);
  });

  test('Valid price on min, isStudent=false, hasCoupon=false', () => {
    const price = 1;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(1);
  });

  test('Valid price on max, isStudent=true, hasCoupon=true', () => {
    const price = 499;
    const isStudent = true;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(399.2);
  });

  test('Valid price on min, isStudent=false, hasCoupon=true', () => {
    const price = 499;
    const isStudent = false;
    const hasCoupon = true;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(474.05);
  });

  test('Valid price on min, isStudent=true, hasCoupon=false', () => {
    const price = 499;
    const isStudent = true;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(449.1);
  });

  test('Valid price on min, isStudent=false, hasCoupon=false', () => {
    const price = 499;
    const isStudent = false;
    const hasCoupon = false;
    expect(calculatePrice(price, isStudent, hasCoupon)).toBe(499);
  });

//ECP Test invalid inputs 


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

  //Changed this test to be 0, for BVA of when its less than min
  test('Output price is less than 80% of input price', () => {
    const price = 0;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });

  //BVA More than max
  test('Output price is greater than input price', () => {
    const price = 600;
    const isStudent = false;
    const hasCoupon = false;
    expect(() => calculatePrice(price, isStudent, hasCoupon)).toThrowError("Invalid price: Price must be a positive number.");
  });
});
