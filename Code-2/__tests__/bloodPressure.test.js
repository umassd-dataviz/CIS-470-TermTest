// Import the BloodPressure function
// BloodPressure(patientName, patientAge,systolic,diastolic)
const BloodPressure = require('../bloodPressure'); 

describe('BloodPressure Function Tests', () => {
  
  // Equivalence Class Partitioning (ECP) Test Cases
  describe('Equivalence Class Partitioning (ECP)', () => {
    // Test Cases for patientName
    test('Valid Name', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Empty Name', () => {
      expect(() => BloodPressure("", 35, 120, 80)).toThrow('Name must be a non-empty string.');
    });


      test('Name equal to 50', () => {
        expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharacters--", 35, 120, 80)).not.toThrow('Name must be less than or equal to 50 characters.');
      });

    test('Non-string Name', () => {
      expect(() => BloodPressure(123, 35, 120, 80)).toThrow('Name must be a non-empty string.');
    });

    // Test Cases for patientAge
    test('Valid Age', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Negative Age', () => {
      expect(() => BloodPressure("John Doe", -10, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    // Test Cases for systolic and diastolic
    test('Valid Readings', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Non-positive Readings', () => {
      expect(() => BloodPressure("John Doe", 35, 0, 80)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
      expect(() => BloodPressure("John Doe", 35, 120, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 130, 120)).not.toThrow();
    });

    //Additional EC Test cases

    //Systolic > 140 but < 160
    test('Systolic > 140 but < 160', () => {
      expect(BloodPressure("John Doe", 35, 150, 70)).toEqual("STAGE_1_HBP");
    });

    //Systolic > 160 but < 180
    test('Systolic > 160 but < 180', () => {
      expect(BloodPressure("John Doe", 35, 170, 70)).toBe('STAGE_2_HBP');
    });

    //Systolic > 180 but <500
    test('Systolic = 180', () => {
      expect(BloodPressure("John Doe", 35, 180, 70)).toBe('HYPERTENSIVE_CRISIS');
    });

    //Systolic > 180 but <500
    test('Systolic > 180 but < 500', () => {
      expect(BloodPressure("John Doe", 35, 200, 70)).toBe('HYPERTENSIVE_CRISIS');
    });

    //Diastolic < 100
    test('Diastolic < 100', () => {
      expect(BloodPressure("John Doe", 35, 90, 90)).toEqual("STAGE_1_HBP");
    });

    //Diastolic < 110
    test('Diastolic < 110', () => {
      expect(BloodPressure("John Doe", 35, 105, 105)).toBe('STAGE_2_HBP');
    });

    //Diastolic > 110
    test('Diastolic = 110', () => {
      expect(BloodPressure("John Doe", 35, 120, 110)).toBe('HYPERTENSIVE_CRISIS');
    });

    //Diastolic > 110
    test('Diastolic > 110', () => {
      expect(BloodPressure("John Doe", 35, 120, 115)).toBe('HYPERTENSIVE_CRISIS');
    });

    
    test('Systolic > 180 & Diastolic > 110', () => {
      expect(BloodPressure("John Doe", 35, 200, 120)).toBe('HYPERTENSIVE_CRISIS');
    });

  });

  // Boundary Value Analysis (BVA) Test Cases
  describe('Boundary Value Analysis (BVA)', () => {

    // Valid Test Cases for patientName
    test('Name equal to 50', () => {
        expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharacters--", 35, 120, 80)).not.toThrow('Name must be less than or equal to 50 characters.');
      });

    test('Name Over 50', () => {
        expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharactersLong", 35, 120, 80)).toThrow('Name must be less than or equal to 50 characters.');
      });
    
    // Test Cases for patientAge
    test('Minimum Valid Age', () => {
      expect(() => BloodPressure("John Doe", 0, 120, 80)).not.toThrow();
    });

    test('Maximum Valid Age', () => {
      expect(() => BloodPressure("John Doe", 129, 120, 80)).not.toThrow();
    });

    test('Age Less Than Minimum', () => {
      expect(() => BloodPressure("John Doe", -1, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    test('Age Equal to Maximum', () => {
      expect(() => BloodPressure("John Doe", 130, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    // Test Cases for systolic and diastolic
    test('Minimum Valid Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 1, 1)).not.toThrow();
    });

    test('Maximum Valid Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 500, 500)).not.toThrow();
    });

    test('Reading Less Than Minimum', () => {
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Equal to Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 120)).not.toThrow();
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });
  });

});
