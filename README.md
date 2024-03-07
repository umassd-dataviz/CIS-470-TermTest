# Practical Term Test (CIS 470) 

## Part 1

 1. Draw the Flow Graph for each one of the codes (Code-1 and Code-2) and upload in myCourses (20 Points)

 2. Identify every unique path for the provided codes and upload in myCourses
 e.g. {
  Path_1: [1,2,3...],
  Path_2: [1,2,3...],
  ...
 }(20 Points)

 You can add the Flow Graphs and Paths in 1 Word Document or PDF and upload in myCourses

## Part 2

### Follow the steps below to run the codes (60 points)

This Repo contains two codes (Code-1 and Code-2) for the practical Exam of CIS 470. You can run the codes on Codespaces, or download and run them using NodeJS.

In each directory you will find a `README.md` file, along with related JavaScript function file, a runner (`app.js`) and a Unit-Testing directory `__tests__` that contains a set of test 

The `README.md` file contains all the `Specifications` of the codes. This means that the `code` should comply with the `Specs`. You need to add test cases to check the output of the `code` and what is expected ny the `Specs`.

## Sample codes for the Test

- `Code-1`: This directory contains a fully functional program for calculation of the discount along with some test cases. Please refer to the questions, and  based on the existing code and the test cases in the `__tests__` directory choose the right answer.

- `Code-2`:  This directory contains a fully functional program for Blood Pressure Diagnoses (classification). Please refer to the questions, and based on the existing code and the test cases in the `__tests__` directory choose the right answer.

### Some details about running the codes

The codes are NodeJS programs, so you have 2 options to run them.

- Options 1: Use codespaces, and in the terminal run the following code to install npm packages needed:
- Option 2: Have NodeJS installed in your local machine

```nodejs
npm install
```

after the installation of the packages you should be able to run the code runner file (app.js) or run the test cases in `__tests__` directory.

### Deliverables  (total 60 points)

#### Errors and Test Cases

The **code** files, the **test cases**, and the runner files (**app.js**) are provided in the `Code-1` and `Code-2` directories respectively.
1- Find errors: (20 points)
    *Use the existing test cases, and find the errors in the code (there are at least two **logical errors** in each code) and **Enumerate**, **report** and **explain** the errors in the `ErrorCorrectionReport.md` file.
2. Add Test Cases: (20 points)
    * Add sufficient number of the tests cases to the `Jest` file in `__tests__` to achieve the full coverage for the `Statements`,`Lines` and the `Branches`. The full coverage of `Statements` and `Branches`  is required (There is no need to change the existing test cases). Each test case should have **Description** and **Comments**.
    * Add missing BVA (min, max, more than max, less than min), ECP (valid and invalid classes of the space) and Decision Table (valid and invalid Decision Table test cases). Add the test cases to the jest file. We should be able to see a full green all passed and all lines, branches covered test results. You can always refer to the cheat-sheet provided for the BVA and ECP in myCourses.

#### Coverage Report

The code coverage report is provided in the `Code-1` and `Code-2` directories respectively.You should compress and name each directory and upload the full code coverage in myCourses. (10 points)

<video width="500" controls>
  <source src="/Media/JEST_Coverage_Report.mp4" type="video/mp4">
</video>

#### Submission of the Finalized Code (10 points)

##### 1. Fork Repository

You need to first `fork` the repository from the original repo (refer the to the previous activities).

##### 2. Run the code on Codespaces or Local Machine

1. You need to either add and run a Codespaces instance on the repo, or clone the git repo in your local machine, and run it on you machine using your favorite code editor (refer the to the previous activities).
** If running from your local machine, you will need to have NodeJS installed on your machine.
2. In both the options (Codespaces, or local machine) you first  have to run `npm i` in terminal for each code (code-1 and code-2) right before making any changes to the code.This should be done separately for each one of the codes.

```nodejs
cd Code-1
npm i
```

and then

```nodejs
cd ..
cd Code-2
npm i
```

##### 3. Commit and Push the Code to your forked repository

After modifying both the code, and the test cases, you need to add, commit, and push the code to your forked repository. This step is the same for both Codespaces, and local machine. Note that you have to do this only and only in the root directory (refer the to the previous activities).
** You can make as many commits and pushes as needed.

##### 4. Pull Request to Original Repository

Finally, when you are satisfied with your work, you can go ahead and send a "Pull Request" to original repository. This is where I will be able to see your submission, check your code and raise issues.

![Pull Requests](/Media/PullRequest.png)
