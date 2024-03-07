### Code - 2 Blood Pressure Diagnosis<br>Detailed Program Specs:

Program `BloodPressure` is a basic calculator for the blood pressure reading based on the `patientAge` and `systolic` and `diastolic` readings of the "<a href='https://en.wikipedia.org/wiki/Sphygmomanometer'>Sphygmomanometer</a>" device.
<p>
The readings then are converted into one of the following human readable enumerations:

`["NORMAL", "PREHYPERTENSION", "STAGE_1_HBP", "STAGE_2_HBP", "HYPERTENSIVE_CRISIS"]`

<b>Diagnoses is based on the following conditions:</b>
   - If systolic < 120, diagnosis is "NORMAL".
   - If 120 ≤ systolic < 140, diagnosis is "PREHYPERTENSION".
   - If 140 ≤ systolic < 160, diagnosis is "STAGE_1_HBP".
   - If systolic ≥ 160, diagnosis is "STAGE_2_HBP".
   - If systolic > 180, diagnosis is "HYPERTENSIVE_CRISIS".
   - If diastolic < 80, diagnosis is "NORMAL".
   - If 80 ≤ diastolic < 90, diagnosis is "PREHYPERTENSION".
   - If 90 ≤ diastolic < 100, diagnosis is "STAGE_1_HBP".
   - If diastolic ≥ 100, diagnosis is "STAGE_2_HBP".
   - If diastolic > 110, diagnosis is "HYPERTENSIVE_CRISIS".


**Input Validation**:
The function must validate all of the input parameters (`patientName`, `patientAge`, `systolic`, and `diastolic`). If the parameters do not fit in the following range, the program should raise an error:

- `patientName` must be of type String and should not be empty, and should not be longer than 50 chars. If not, it should raise an error with the following message:
  - <span style="color:red;">"Error 01 - Invalid patientName: Name must be a non-empty string."</span>

- `patientAge` must be of type Number and should be greater than or equal to 0 and less then 130 (patient age more than 130 is not correct). If not, it should raise an error with the following message:
  - <span style="color:red;">"Error 02 - Invalid patientAge: Age must be greater than or equal to 0 and less then 130."</span>

- `systolic` and `diastolic` must be of type Number, should be more than 0, and `systolic` should be greater than `diastolic`. If not, it should raise an error with the following message:
  - <span style="color:red;">"Error 03 - Invalid blood pressure readings: Must be positive and systolic > diastolic."</span>

### Returns

- (string): The diagnosis based on the blood pressure readings.

### Throws

- `Error`: Throws an error if input parameters are invalid.

### Functionality

1. Validates the patient's name. Throws an error if the name is not a non-empty string.
2. Validates the patient's age. Throws an error if the age is less than 0.
3. Validates the systolic and diastolic blood pressure readings. Throws an error if they are not positive or if systolic is less than or equal to diastolic.
4. Compares the severity of systolic and diastolic diagnoses and returns the diagnosis with the higher severity level.
