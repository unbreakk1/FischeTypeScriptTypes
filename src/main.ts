import {Student} from "./models/Student.ts"
// Step 1:
function displayStudentOne(student: Student): void
{
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log(`Grades: ${student.grades.join(",")}`);
}

// Create and display a sample student
const student1: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2],
};

displayStudentOne(student1);


// Step 2:
// Function to output a student with number and letter grades
function displayStudentStepTwo(student: Student): void
{
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log(`Grades: ${student.grades.join(",")}`);
}

// Create and display a sample student with mixed grades
const student2: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, "A", "F", 3, 1, "B", 2, 5],
};

displayStudentStepTwo(student2);

// Step 3:
// Function to output a student, rendering undefined as "*"
function displayStudentStepThree(student: Student): void
{
    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log("=".repeat(30))
    const formattedGrades = student.grades.map((grade) =>
        grade === undefined ? "*" : grade
    );
    console.log(`Grades: ${formattedGrades.join(",")}`);
}

// Create and display a sample student with undefined grades
const student3: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5],
};

displayStudentStepThree(student3);

// Step 4:
// Function to display all students
function displayAllStudentsStepFour(students: Student[]): void
{
    students.forEach((student) =>
    {
        displayStudentStepThree(student);
        console.log("\n"); // Add a blank line between students
    });
}

// Create a list of students
const studentList: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2],
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1],
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5],
    },
];

// Display the list of students
displayAllStudentsStepFour(studentList);


