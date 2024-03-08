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
      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    //MORE ECP!
    test('NORMAL diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 100, 60)).toBe("NORMAL");
    });
    test('PREHYPERTENSION diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 130, 85)).toBe("PREHYPERTENSION");
    });
    test('STAGE_1_HBP diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 150, 95)).toBe("STAGE_1_HBP");
    });
    test('STAGE_2_HBP diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 165, 100)).toBe("STAGE_2_HBP");
    });
    test('Additional STAGE_2_HBP diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 165, 105)).toBe("STAGE_2_HBP");
    });
    test('HYPERTENSIVE_CRISIS diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 200, 120)).toBe("HYPERTENSIVE_CRISIS");
    });

    //Test systolicDiagnosis return
    test('Systolic diagnostic', () => {
      expect(BloodPressure("John Doe", 35, 160, 80)).toBe("STAGE_2_HBP");
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
    test('Minimum Valid diastolic Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 5, 1)).not.toThrow();
    });
    test('Minimum Valid systolic Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 1, 0.5)).not.toThrow();
    });

    //Removed maximum valid reading tests, there is no maximum specified
    /*test('Maximum Valid diastolic Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 500, 500)).not.toThrow();
    });
    */
    test('Reading Less Than Minimum', () => {
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Equal to Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

  });

  


});
