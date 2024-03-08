const BloodPressure = require('../bloodPressure');

describe('BloodPressure function', () => {
  // Test for a normal blood pressure reading
  test('Normal blood pressure', () => {
    expect(BloodPressure("John Doe", 25, 115, 75)).toBe("NORMAL");
  });

  // Test for prehypertension based on systolic reading
  test('Prehypertension (systolic)', () => {
    expect(BloodPressure("Jane Doe", 30, 125, 75)).toBe("PREHYPERTENSION");
  });

  // Test for prehypertension based on diastolic reading
  test('Prehypertension (diastolic)', () => {
    expect(BloodPressure("Mike Smith", 40, 115, 85)).toBe("PREHYPERTENSION");
  });

  // Test for Stage 1 hypertension based on systolic reading
  test('Stage 1 hypertension (systolic)', () => {
    expect(BloodPressure("Laura Johnson", 50, 145, 85)).toBe("STAGE_1_HBP");
  });

  // Test for Stage 1 hypertension based on diastolic reading
  test('Stage 1 hypertension (diastolic)', () => {
    expect(BloodPressure("Emily Davis", 60, 135, 95)).toBe("STAGE_1_HBP");
  });

  // Test for Stage 2 hypertension based on systolic reading
  test('Stage 2 hypertension (systolic)', () => {
    expect(BloodPressure("David Wilson", 70, 165, 95)).toBe("STAGE_2_HBP");
  });

  // Test for Stage 2 hypertension based on diastolic reading
  test('Stage 2 hypertension (diastolic)', () => {
    expect(BloodPressure("Sophia Martinez", 80, 155, 105)).toBe("STAGE_2_HBP");
  });

  // Test for hypertensive crisis based on systolic reading
  test('Hypertensive crisis (systolic)', () => {
    expect(BloodPressure("James Brown", 90, 185, 105)).toBe("HYPERTENSIVE_CRISIS");
  });

  // Test for hypertensive crisis based on diastolic reading
  test('Hypertensive crisis (diastolic)', () => {
    expect(BloodPressure("Olivia Garcia", 100, 175, 115)).toBe("HYPERTENSIVE_CRISIS");
  });

  // Test for invalid patient name (empty string)
  test('Invalid patient name (empty string)', () => {
    expect(() => BloodPressure("", 30, 120, 80)).toThrowError("Name must be a non-empty string.");
  });

  // Test for invalid patient name (longer than 50 characters)
  test('Invalid patient name (longer than 50 characters)', () => {
    const longName = "a".repeat(51);
    expect(() => BloodPressure(longName, 30, 120, 80)).toThrowError("Name must be less than or equal to 50 characters.");
  });

  // Test for invalid patient age (negative)
  test('Invalid patient age (negative)', () => {
    expect(() => BloodPressure("John Doe", -5, 120, 80)).toThrowError("Age must be greater than or equal to 0 and less than 130.");
  });

  // Test for invalid patient age (above 130)
  test('Invalid patient age (above 130)', () => {
    expect(() => BloodPressure("John Doe", 131, 120, 80)).toThrowError("Age must be greater than or equal to 0 and less than 130.");
  });

  // Test for invalid systolic reading (negative)
  test('Invalid systolic reading (negative)', () => {
    expect(() => BloodPressure("John Doe", 30, -120, 80)).toThrowError("Invalid blood pressure readings: Must be positive and systolic > diastolic.");
  });

  // Test for invalid diastolic reading (negative)
  test('Invalid diastolic reading (negative)', () => {
    expect(() => BloodPressure("John Doe", 30, 120, -80)).toThrowError("Invalid blood pressure readings: Must be positive and systolic > diastolic.");
  });

  // Test for invalid readings (systolic less than diastolic)
  test('Invalid readings (systolic less than diastolic)', () => {
    expect(() => BloodPressure("John Doe", 30, 80, 90)).toThrowError("Invalid blood pressure readings: Must be positive and systolic > diastolic.");
  });

  // Test for edge case (systolic and diastolic on the boundary of different categories)
  test('Edge case (boundary between categories)', () => {
    expect(BloodPressure("John Doe", 30, 140, 90)).toBe("STAGE_1_HBP");
  });

  // Test for patient age at lower boundary (0)
  test('Patient age at lower boundary (0)', () => {
    expect(BloodPressure("John Doe", 0, 120, 80)).toBe("PREHYPERTENSION");
  });

  // Test for patient age at upper boundary (129)
  test('Patient age at upper boundary (129)', () => {
    expect(BloodPressure("John Doe", 129, 120, 80)).toBe("PREHYPERTENSION");
  });

  // Test for systolic reading at lower boundary (1)
  test('Systolic reading at lower boundary (1)', () => {
    expect(() => BloodPressure("John Doe", 30, 1, 0)).toThrowError("Invalid blood pressure readings: Must be positive and systolic > diastolic.");
  });
});
