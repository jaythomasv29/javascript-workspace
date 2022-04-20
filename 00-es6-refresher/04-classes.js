// import { value } from './05-export.js'

// const person = {
//     name: "Mosh",
//     walk() {
//         console.log("walk")
//     }
// }

// const person2 = {
//     name: "James",
//     walk() {
//         console.log("walk")
//     }
// }
// console.log(value)
// sayHello()
// Replicate the above code using classes to create Objects
// creating a Class
class Person {
    // reserved method 
    constructor(name){
        this.name = name  // reference to current object
    }
    walk() {
        console.log("walk")
    }
}

const james = new Person("James")
// console.log(james)
// james.walk()

// Inheritance

export class Teacher extends Person {
    constructor(name, degree){
        super()
        this.name = name
        this.degree = degree
    }
    teach() {
        console.log('Teach');
    }
}

const t = new Teacher('James', 'BS')
console.log(t.degree, t.name);
t.walk()