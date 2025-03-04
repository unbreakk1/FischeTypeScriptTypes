export type Grade = number | "A" | "B" | "C" | "D" | "E" | "F" | undefined
export type Student =
{
    firstName: string
    lastName: string
    age: number
    grades: Grade[]
}

export type Subject =
{
    name: string;
    grades: Grade[]
};

export type StudentWithSubjects =
{
    firstName: string
    lastName: string
    age: number
    subjects: Subject[]
};
