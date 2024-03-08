// Import the BloodPressure function
const BloodPressure = require('../bloodPressure');

describe('BloodPressure Function Tests', () => {

  // Equivalence Class Partitioning (ECP) Test Cases
  describe('Equivalence Class Partitioning (ECP)', () => {
    // Test Cases for patientName
    test('Valid Name - ECP', () => {
      // Valid name should not throw an error
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Empty Name - ECP', () => {
      // Empty name should throw an error
      expect(() => BloodPressure("", 35, 120, 80)).toThrow('Name must be a non-empty string.');
    });

    test('Name equal to 50 characters - ECP', () => {
      // Name exactly 50 characters should not throw an error
      expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharacters--", 35, 120, 80)).not.toThrow();
    });

    test('Non-string Name - ECP', () => {
      // Non-string name should throw an error
      expect(() => BloodPressure(123, 35, 120, 80)).toThrow('Name must be a non-empty string.');
    });

    // Test Cases for patientAge
    test('Valid Age - ECP', () => {
      // Valid age should not throw an error
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Negative Age - ECP', () => {
      // Negative age should throw an error
      expect(() => BloodPressure("John Doe", -10, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    // Test Cases for systolic and diastolic
    test('Valid Readings - ECP', () => {
      // Valid readings should not throw an error
      expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow();
    });

    test('Non-positive Readings - ECP', () => {
      // Non-positive readings should throw an error
      expect(() => BloodPressure("John Doe", 35, 0, 80)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
      expect(() => BloodPressure("John Doe", 35, 120, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic - ECP', () => {
      // Systolic less than diastolic should throw an error
      expect(() => BloodPressure("John Doe", 35, 80, 90)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });
  });

  // Boundary Value Analysis (BVA) Test Cases
  describe('Boundary Value Analysis (BVA)', () => {
    // Test Cases for patientName
    test('Name Over 50 characters - BVA', () => {
      // Name over 50 characters should throw an error
      expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharactersLong", 35, 120, 80)).toThrow('Name must be less than or equal to 50 characters.');
    });

    // Test Cases for patientAge
    test('Minimum Valid Age - BVA', () => {
      // Age 0 should not throw an error
      expect(() => BloodPressure("John Doe", 0, 120, 80)).not.toThrow();
    });

    test('Maximum Valid Age - BVA', () => {
      // Age 129 should not throw an error
      expect(() => BloodPressure("John Doe", 129, 120, 80)).not.toThrow();
    });

    test('Age Less Than Minimum - BVA', () => {
      // Age -1 should throw an error
      expect(() => BloodPressure("John Doe", -1, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    test('Age Greater Than Maximum - BVA', () => {
      // Age 130 should throw an error
      expect(() => BloodPressure("John Doe", 130, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
    });

    // Test Cases for systolic and diastolic
    test('Minimum Valid Reading - BVA', () => {
      // Minimum valid readings should not throw an error
      expect(() => BloodPressure("John Doe", 35, 2, 1)).not.toThrow();
    });

    test('Maximum Valid Reading - BVA', () => {
      // Maximum valid readings should not throw an error
      expect(() => BloodPressure("John Doe", 35, 501, 500)).not.toThrow();
    });

    test('Reading Less Than Minimum - BVA', () => {
      // Readings less than minimum should throw an error
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Equal to Diastolic - BVA', () => {
      // Systolic equal to diastolic should throw an error
      expect(() => BloodPressure("John Doe", 35, 120, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic - BVA', () => {
      // Systolic less than diastolic should throw an error
      expect(() => BloodPressure("John Doe", 35, 80, 90)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });
  });

  // Diagnosis Tests
  describe('Diagnosis Tests', () => {
    test('Systolic Normal, Diastolic Normal - Diagnosis', () => {
      // Both systolic and diastolic in normal range should return "NORMAL"
      expect(BloodPressure("John Doe", 35, 110, 70)).toBe("NORMAL");
    });

    test('Systolic Prehypertension, Diastolic Normal - Diagnosis', () => {
      // Systolic in prehypertension range should return "PREHYPERTENSION"
      expect(BloodPressure("John Doe", 35, 130, 70)).toBe("PREHYPERTENSION");
    });

    test('Systolic Stage 1 HBP, Diastolic Normal - Diagnosis', () => {
      // Systolic in stage 1 HBP range should return "STAGE_1_HBP"
      expect(BloodPressure("John Doe", 35, 150, 70)).toBe("STAGE_1_HBP");
    });

    test('Systolic Stage 2 HBP, Diastolic Normal - Diagnosis', () => {
      // Systolic in stage 2 HBP range should return "STAGE_2_HBP"
      expect(BloodPressure("John Doe", 35, 170, 70)).toBe("STAGE_2_HBP");
    });

    test('Systolic Hypertensive Crisis, Diastolic Normal - Diagnosis', () => {
      // Systolic in hypertensive crisis range should return "HYPERTENSIVE_CRISIS"
      expect(BloodPressure("John Doe", 35, 190, 70)).toBe("HYPERTENSIVE_CRISIS");
    });

    test('Systolic Normal, Diastolic Prehypertension - Diagnosis', () => {
      // Diastolic in prehypertension range should return "PREHYPERTENSION"
      expect(BloodPressure("John Doe", 35, 110, 85)).toBe("PREHYPERTENSION");
    });

    test('Systolic Normal, Diastolic Stage 1 HBP - Diagnosis', () => {
      // Diastolic in stage 1 HBP range should return "STAGE_1_HBP"
      expect(BloodPressure("John Doe", 35, 110, 95)).toBe("STAGE_1_HBP");
    });

    test('Systolic Normal, Diastolic Stage 2 HBP - Diagnosis', () => {
      // Diastolic in stage 2 HBP range should return "STAGE_2_HBP"
      expect(BloodPressure("John Doe", 35, 110, 105)).toBe("STAGE_2_HBP");
    });
  });

  // Decision Table Tests
  describe('Decision Table Tests', () => {
    test('Valid Case - Normal Diagnosis - Decision Table', () => {
      // Both systolic and diastolic in normal range should return "NORMAL"
      expect(BloodPressure("John Doe", 35, 110, 70)).toBe("NORMAL");
    });

    test('Valid Case - Prehypertension Diagnosis - Decision Table', () => {
      // Systolic in prehypertension range, diastolic normal should return "PREHYPERTENSION"
      expect(BloodPressure("John Doe", 35, 130, 70)).toBe("PREHYPERTENSION");
    });

    test('Invalid Case - Systolic Less Than Diastolic - Decision Table', () => {
      // Systolic less than diastolic should throw an error
      expect(() => BloodPressure("John Doe", 35, 80, 90)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Invalid Case - Non-positive Readings - Decision Table', () => {
      // Non-positive readings should throw an error
      expect(() => BloodPressure("John Doe", 35, 0, 80)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });
  });
});
