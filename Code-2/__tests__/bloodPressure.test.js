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

    test('Valid', () => {
      expect(() => BloodPressure("John Doe", 35, 130, 120)).not.toThrow();
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
      expect(() => BloodPressure("John Doe", 35, 1, 1)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Maximum Valid Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 500, 500)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Reading Less Than Minimum', () => {
      expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Equal to Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

// Misc Test Cases

// Test for non-numeric systolic and diastolic readings
test('Non-numeric systolic and diastolic readings', () => {
  expect(() => BloodPressure("John Doe", 35, "120", "80")).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
});

// Test for non-numeric age
test('Non-numeric age', () => {
  expect(() => BloodPressure("John Doe", "35", 120, 80)).toThrow('Age must be number');
});

// Test cases for different diagnoses
test('Diagnosis: NORMAL', () => {
  expect(BloodPressure("John Doe", 35, 110, 70)).toBe("NORMAL");
});

test('Diagnosis: PREHYPERTENSION', () => {
  expect(BloodPressure("John Doe", 35, 130, 85)).toBe("PREHYPERTENSION");
});

test('Diagnosis: STAGE_1_HBP', () => {
  expect(BloodPressure("John Doe", 35, 150, 95)).toBe("STAGE_1_HBP");
});

test('Diagnosis: STAGE_2_HBP', () => {
  expect(BloodPressure("John Doe", 35, 170, 105)).toBe("STAGE_2_HBP");
});

test('Diagnosis: HYPERTENSIVE_CRISIS', () => {
  expect(BloodPressure("John Doe", 35, 190, 120)).toBe("HYPERTENSIVE_CRISIS");
});

// Test case for diastolic diagnosis more severe than systolic
test('Diastolic diagnosis more severe', () => {
  expect(BloodPressure("John Doe", 35, 150, 105)).toBe("STAGE_2_HBP");
});

// Test case for systolic diagnosis more severe than diastolic
test('Systolic diagnosis more severe', () => {
  expect(BloodPressure("John Doe", 35, 170, 95)).toBe("STAGE_2_HBP");
});

// Test case for equal severity diagnoses
test('Equal severity diagnoses', () => {
  expect(BloodPressure("John Doe", 35, 160, 100)).toBe("STAGE_2_HBP");
});



  });

});
