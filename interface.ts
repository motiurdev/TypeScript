interface Player {
    name: string,
    age: number,
    location: string,
    salary: number,
    married?: boolean
}



const motiur: Player = {
    name: "Motiur",
    age: 19,
    location: "Dhaka",
    salary: 90000,
    married: false
}

const misu = {
    name: "Misu",
    age: 18,
    location: "United States",
    salary: 100000,
}

interface Developer extends Player {
    language: string,
    codeEditor: string,
    typeSpeed: number
}

const motiurRahman: Developer = {
    name: "Moitur Rahman",
    age: 19,
    location: "Savar, Dhaka",
    salary: 200000,
    language: "js",
    codeEditor: "Vs code",
    typeSpeed: 60
}

