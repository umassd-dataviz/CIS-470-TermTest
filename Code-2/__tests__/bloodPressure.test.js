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

    test('NORMAL', () => {
      expect(BloodPressure("Name Test", 50, 110, 70)).toBe("NORMAL");
    });

    test('PREHYPERTENSION', () => {
      expect(BloodPressure("Name Test", 50, 130, 85)).toBe("PREHYPERTENSION");
    });

    test('STAGE_1_HBP', () => {
      expect(BloodPressure("Name Test", 50, 150, 95)).toBe("STAGE_1_HBP");
    });

    test('STAGE_2_HBP', () => {
      expect(BloodPressure("Name Test", 50, 170, 110)).toBe("STAGE_2_HBP");
    });

    test('HYPERTENSIVE_CRISIS', () => {
      expect(BloodPressure("Name Test", 50, 190, 120)).toBe("HYPERTENSIVE_CRISIS");
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    test('NORMAL', () => {
      expect(BloodPressure("Name Test", 50, 100, 70)).toBe("NORMAL");
    });

    test('PREHYPERTENSION', () => {
      expect(BloodPressure("Name Test", 50, 100, 85)).toBe("PREHYPERTENSION");
    });

    test('STAGE_1_HBP', () => {
      expect(BloodPressure("Name Test", 50, 100, 95)).toBe("STAGE_1_HBP");
    });

    test('STAGE_2_HBP', () => {
      expect(BloodPressure("Name Test", 50, 111, 110)).toBe("STAGE_2_HBP");
    });

    test('HYPERTENSIVE_CRISIS', () => {
      expect(BloodPressure("Name Test", 50, 121, 120)).toBe("HYPERTENSIVE_CRISIS");
    });

    test('Systolic Less Than Diastolic', () => {
      expect(() => BloodPressure("John Doe", 35, 100, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
    });

    // Test Cases for patientName
  test('Valid Name (less than or equal to 50)', () => {
    expect(() => BloodPressure("John Doe", 35, 120, 80)).not.toThrow('Name must be less than or equal to 50 characters.');
  });

  test('Invalid Name (over 50)', () => {
    expect(() => BloodPressure("MyNameIsTooLongItShouldBeLessThanFiftyCharactersLong", 35, 120, 80)).toThrow('Name must be less than or equal to 50 characters.');
  });

  // Test Cases for patientAge
  test('Minimum Valid Age', () => {
    expect(() => BloodPressure("John Doe", 0, 120, 80)).not.toThrow();
  });

  test('Maximum Valid Age', () => {
    expect(() => BloodPressure("John Doe", 129, 120, 80)).not.toThrow();
  });

  test('Invalid Age (Less Than Minimum)', () => {
    expect(() => BloodPressure("John Doe", -1, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
  });

  test('Invalid Age (Equal to Maximum)', () => {
    expect(() => BloodPressure("John Doe", 130, 120, 80)).toThrow('Age must be greater than or equal to 0 and less than 130.');
  });

  // Test Cases for systolic and diastolic
  test('Minimum Valid Systolic & Diastolic', () => {
    expect(() => BloodPressure("John Doe", 35, 2, 1)).not.toThrow();
  });

  test('Maximum Valid Systolic & Diastolic', () => {
    expect(() => BloodPressure("John Doe", 35, 500, 499)).not.toThrow();
  });

  test('Invalid Reading (Less Than Minimum)', () => {
    expect(() => BloodPressure("John Doe", 35, 0, 0)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
  });

  test('Invalid Reading (Equal Systolic and Diastolic)', () => {
    expect(() => BloodPressure("John Doe", 35, 120, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
  });

  test('Invalid Reading (Systolic Less Than Diastolic)', () => {
    expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');
  });
});

describe('Blood Pressure Categories', () => {

  test('NORMAL', () => {
    expect(BloodPressure("Name Test", 50, 110, 60)).toBe("NORMAL");
  });

  test('PREHYPERTENSION', () => {
    expect(BloodPressure("Name Test", 50, 130, 60)).toBe("PREHYPERTENSION");
  });

  test('STAGE_1_HBP', () => {
    expect(BloodPressure("Name Test", 50, 150, 60)).toBe("STAGE_1_HBP");
  });

  test('STAGE_2_HBP', () => {
    expect(BloodPressure("Name Test", 50, 170, 60)).toBe("STAGE_2_HBP");
  });

  test('HYPERTENSIVE_CRISIS', () => {
    expect(BloodPressure("Name Test", 50, 190, 60)).toBe("HYPERTENSIVE_CRISIS");
  });
});

});