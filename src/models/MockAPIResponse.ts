export interface Character
{
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown"; // Allowed status values
    species: string;
    origin: {
        name: string;
    };
}
export const characters : Character[] =
[
    {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (C-137)" },
    },
    {
        id: 2,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (C-137)" },
    },
    {
        id: 3,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (Replacement Dimension)" },
    },
    {
        id: 4,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (C-137)" },
    },
    {
        id: 5,
        name: "Jerry Smith",
        status: "Alive",
        species: "Human",
        origin: { name: "Earth (C-137)" },
    },
    {
        id: 6,
        name: "Birdperson",
        status: "Alive",
        species: "Alien",
        origin: { name: "Bird World" },
    },
    {
        id: 7,
        name: "Mr. Poopybutthole",
        status: "Alive",
        species: "Unknown",
        origin: { name: "unknown" },
    },
    {
        id: 8,
        name: "Albert Einstein",
        status: "Dead",
        species: "Human",
        origin: { name: "Earth (E=mc²)" },
    },
]