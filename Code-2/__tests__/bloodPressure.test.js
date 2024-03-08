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
      expect(() => BloodPressure("John Doe", 35, 1, 1)).toThrow(); // systolic and diastolic can never be equal
    });

    test('Maximum Valid Reading', () => {
      expect(() => BloodPressure("John Doe", 35, 500, 500)).toThrow(); // systolic and diastolic can never be equal
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
  });
// Test Cases for Systolic Blood Pressure Diagnosis
// Systolic: NORMAL
test('Systolic: NORMAL', () => {
  // Description: Verifies that systolic blood pressure under 120 is considered NORMAL.
  // This checks the lower boundary of normal systolic blood pressure.
  expect(BloodPressure("John Doe", 30, 119, 79)).toBe('NORMAL');
});

// Systolic: PREHYPERTENSION
test('Systolic: PREHYPERTENSION', () => {
  // Description: Checks if systolic blood pressure between 120 and 139 is categorized as PREHYPERTENSION.
  // This tests the lower limit for prehypertension systolic diagnosis.
  expect(BloodPressure("John Doe", 30, 120, 79)).toBe('PREHYPERTENSION');
});

// Systolic: STAGE_1_HBP
test('Systolic: STAGE_1_HBP', () => {
  // Description: Ensures systolic blood pressure between 140 and 159 is classified as STAGE_1_HBP.
  // This confirms the lower threshold for Stage 1 Hypertension.
  expect(BloodPressure("John Doe", 30, 140, 79)).toBe('STAGE_1_HBP');
});

// Systolic: STAGE_2_HBP
test('Systolic: STAGE_2_HBP', () => {
  // Description: Tests that systolic blood pressure between 160 and 179 falls under STAGE_2_HBP.
  // This verifies the lower boundary for Stage 2 Hypertension.
  expect(BloodPressure("John Doe", 30, 160, 79)).toBe('STAGE_2_HBP');
});

// Systolic: HYPERTENSIVE_CRISIS (greater than 180)
test('Systolic: HYPERTENSIVE_CRISIS (greater than 180)', () => {
  // Description: Checks systolic blood pressure above 180 to ensure it's diagnosed as HYPERTENSIVE_CRISIS.
  // This scenario tests the condition for a hypertensive crisis based on systolic pressure.
  expect(BloodPressure("John Doe", 30, 181, 79)).toBe('HYPERTENSIVE_CRISIS');
});

// Test Cases for Diastolic Blood Pressure Diagnosis
// Diastolic: NORMAL
test('Diastolic: NORMAL', () => {
  // Description: Confirms that diastolic blood pressure under 80 is categorized as NORMAL.
  // This checks the upper limit of normal diastolic blood pressure.
  expect(BloodPressure("Jane Doe", 25, 110, 79)).toBe('NORMAL');
});

// Diastolic: PREHYPERTENSION
test('Diastolic: PREHYPERTENSION', () => {
  // Description: Verifies diastolic blood pressure between 80 and 89 is classified as PREHYPERTENSION.
  // This tests the lower boundary for prehypertension diastolic diagnosis.
  expect(BloodPressure("Jane Doe", 25, 110, 80)).toBe('PREHYPERTENSION');
});

// Diastolic: STAGE_1_HBP
test('Diastolic: STAGE_1_HBP', () => {
  // Description: Ensures diastolic blood pressure between 90 and 99 is diagnosed as STAGE_1_HBP.
  // This verifies the condition for Stage 1 Hypertension based on diastolic pressure.
  expect(BloodPressure("Jane Doe", 25, 110, 90)).toBe('STAGE_1_HBP');
});

// Diastolic: STAGE_2_HBP
test('Diastolic: STAGE_2_HBP', () => {
  // Description: Tests that diastolic blood pressure between 100 and 109 is considered STAGE_2_HBP.
  // This scenario confirms the lower limit for Stage 2 Hypertension based on diastolic pressure.
  expect(BloodPressure("Jane Doe", 25, 110, 100)).toBe('STAGE_2_HBP');
});

// Diastolic: HYPERTENSIVE_CRISIS (greater than 110)
test('Diastolic: HYPERTENSIVE_CRISIS (greater than 110)', () => {
  // Description: Checks diastolic blood pressure above 110 to diagnose it as HYPERTENSIVE_CRISIS.
  // This tests the condition for a hypertensive crisis based on diastolic pressure.
  expect(BloodPressure("Jane Doe", 25, 112, 111)).toBe('HYPERTENSIVE_CRISIS');
});


// Test Case for Comparing Severity Levels of Systolic and Diastolic
// Compare severity levels - Diastolic more severe than Systolic
test('Compare severity levels - Diastolic more severe than Systolic', () => {
  // Description: Evaluates the scenario where diastolic diagnosis is more severe than systolic and verifies the correct diagnosis is returned.
  // This tests the logic that prioritizes the more severe diagnosis between systolic and diastolic pressures.
  expect(BloodPressure("John Doe", 40, 139, 111)).toBe('HYPERTENSIVE_CRISIS');
});

// Compare severity levels - Systolic more severe than Diastolic
test('Compare severity levels - Systolic more severe than Diastolic', () => {
  // Description: Assesses the case where systolic diagnosis is more severe than diastolic to ensure the appropriate diagnosis is chosen.
  // This confirms the function's ability to correctly identify the more severe condition between the two types of pressure readings.
  expect(BloodPressure("John Doe", 40, 181, 89)).toBe('HYPERTENSIVE_CRISIS');
});
 
// ECP: Equivalence Class Partitioning
// Test case: Age greater than maximum valid age
test('ECP: Age greater than maximum valid age (130)', () => {
  // Description: Tests the function with an age above the valid range
  expect(() => BloodPressure("Jane Doe", 131, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
});

// BVA: Boundary Value Analysis
// Test case: Age just above minimum valid value
test('BVA: Age just above minimum valid value (1)', () => {
  // Description: Tests the function with the lowest possible valid age above 0
  expect(() => BloodPressure("Jane Doe", 1, 120, 80)).not.toThrow();
});

// Test case: Age just below maximum valid value
test('BVA: Age just below maximum valid value (128)', () => {
  // Description: Tests the function with the highest possible valid age below 130
  expect(() => BloodPressure("Jane Doe", 128, 120, 80)).not.toThrow();
});

// Test case: Patient name with 49 characters
test('BVA: Patient name with 49 characters', () => {
  // Description: Tests the function with a patient name that is just below the maximum length limit
  const name49Chars = 'JohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDoeJohnDo'; // 49 characters
  expect(() => BloodPressure(name49Chars, 35, 120, 80)).not.toThrow();
});

// Test case: Valid systolic just above diastolic
test('BVA: Valid systolic just above diastolic (121/120)', () => {
  // Description: Tests the function with systolic pressure just above diastolic
  expect(() => BloodPressure("Jane Doe", 35, 121, 120)).not.toThrow();
});

// Decision Table
// Test case: Valid age with invalid name
test('Decision Table: Valid age with invalid name', () => {
  // Description: Tests the function with a valid age and an invalid (empty) name
  expect(() => BloodPressure("", 35, 120, 80)).toThrow('Name must be a non-empty string.');
});

// Test case: Valid systolic with invalid diastolic pressure
test('Decision Table: Valid systolic with invalid diastolic pressure', () => {
  // Description: Tests the function with a valid systolic pressure and an invalid diastolic pressure (equal values)
  expect(() => BloodPressure("Jane Doe", 35, 120, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
});

// Test case to cover systolic blood pressure exactly at 180
test('Systolic: STAGE_2_HBP at boundary (systolic exactly 180)', () => {
  // Description: Tests the function with systolic pressure exactly at 180
  // Expecting the diagnosis to be HYPERTENSIVE_CRISIS or the one just below it, based on the logic of the function
  expect(BloodPressure("John Doe", 30, 180, 79)).toBe('STAGE_2_HBP');
});

// Test case to cover diastolic blood pressure exactly at 110
test('Diastolic: STAGE_2_HBP at boundary (diastolic exactly 110)', () => {
  // Description: Tests the function with diastolic pressure exactly at 110
  // Expecting the diagnosis to be HYPERTENSIVE_CRISIS or the one just below it, based on the logic of the function
  expect(BloodPressure("Jane Doe", 25, 119, 110)).toBe('STAGE_2_HBP');
});


  
});
