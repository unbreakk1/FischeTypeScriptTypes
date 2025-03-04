export type Grade = number | "A" | "B" | "C" | "D" | "E" | "F" | undefined
export type Student =
{
    firstName: string
    lastName: string
    age: number
    grades: Grade[]
}

