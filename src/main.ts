import {Student, StudentWithSubjects} from "./models/Student.ts"
// Step 1:
function displayStudentOne(student: Student): void
{
    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log("=".repeat(30))
    console.log(`Grades: ${student.grades.join(",")}`)
}

const student1: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2],
}

displayStudentOne(student1)

// Step 2:
function displayStudentStepTwo(student: Student): void
{
    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log("=".repeat(30))
    console.log(`Grades: ${student.grades.join(",")}`)
}

const student2: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, "A", "F", 3, 1, "B", 2, 5],
}

displayStudentStepTwo(student2)

// Step 3:
function displayStudentStepThree(student: Student): void
{
    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log("=".repeat(30))
    const formattedGrades = student.grades.map((grade) =>
        grade === undefined ? "*" : grade
    )
    console.log(`Grades: ${formattedGrades.join(",")}`)
}

const student3: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5],
}

displayStudentStepThree(student3)

// Step 4:
function displayAllStudentsStepFour(students: Student[]): void
{
    students.forEach((student) =>
    {
        displayStudentStepThree(student)
        console.log("\n")
    })
}

const studentList: Student[] =
[
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
]

displayAllStudentsStepFour(studentList)

// <editor-fold>desc="BONUS"

// Bonus 1:
function displayStudentWithDynamicHeader(student: Student): void
{
    const header = `${student.firstName} ${student.lastName} (${student.age})`;

    const equalLine = "=".repeat(header.length);

    console.log(header);
    console.log(equalLine);

    const formattedGrades = student.grades.map(grade => grade === undefined ? "*" : grade);
    console.log(`Grades: ${formattedGrades.join(",")}`);
}

// Example usage
const studentB: Student =
{
    firstName: "Anton",
    lastName: "Meier",
    age: 16,
    grades: [1, 4, 3, 1, "A", undefined, 1, 2],
};

displayStudentWithDynamicHeader(studentB)

// Bonus 2:
function displayStudentWithSubjects(student: StudentWithSubjects): void
{
    const header = `${student.firstName} ${student.lastName} (${student.age})`
    const equalLine = "=".repeat(header.length)

    console.log(header)
    console.log(equalLine)

    console.log(`Grades:`)

    student.subjects.forEach((subject) =>
    {
        const formattedGrades = subject.grades.map(grade => grade === undefined ? "*" : grade);
        console.log(`${subject.name}: ${formattedGrades.join(",")}`)
    });
}

const studentC: StudentWithSubjects =
{
    firstName: "Florian",
    lastName: "Weber",
    age: 14,
    subjects: [
        { name: "Sport", grades: ["A", 1, undefined] },
        { name: "Kunst", grades: [3, 2, 4, 5] },
        { name: "Mathe", grades: [1, 2, "A"] },
    ],
}

displayStudentWithSubjects(studentC);



// </editor-fold>