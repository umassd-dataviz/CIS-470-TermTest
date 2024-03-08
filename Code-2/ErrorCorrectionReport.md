ERR bloodPressure.test.js Line 15:  .toThrow('Name must be a non-empty string and l.');          => .toThrow('Name must be a non-empty string.');

ERR bloodPressure.js Line 21 : if (patientAge < 0 && patientAge >= 130) {       =>      if (patientAge < 0 || patientAge >= 130) {

ERR bloodPressure.js Line 32 : if (systolic > 120) {        =>          if (systolic < 120) {
    
ERR bloodPressure.js Line 40 : } else if (systolic > 180) {        =>          } if (systolic > 180) {

ERR bloodPressure.js Line 51 : } else if (diastolic > 110) {        =>          } if (diastolic > 110) {

ERR bloodPressure.test.js Line 48:  expect(() => BloodPressure("John Doe", 35, 130, 120)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');       =>      expect(() => BloodPressure("John Doe", 35, 120, 130)).toThrow('Invalid blood pressure readings: Must be positive and systolic > diastolic.');

ERR bloodPressure.test.js Line 82: Fixing the tests so systolic != diastolic

ERR bloodPressure.test.js Line 90: Removed maximum reading tests, There is no maximum specified