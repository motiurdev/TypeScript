const city: string = "Dhaka"
const fruits: string[] = ["mango", "banana", "apple"]
type Person = {
    name: string,
    age: number
}
const student: Person = {
    name: "motiur",
    age: 19
}
const employee: Person = {
    name: "Misu",
    age: 18
}


function getSalary(person: { name: string, salary: number }): number {
    return person.salary;
}

getSalary({ name: "motiur", salary: 90000 })