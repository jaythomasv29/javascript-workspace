const person = {
    name: 'James',
    walk() {
        console.log('this', this)  // reference to the person object
        console.log('I am walking');
    },
    talk() {
        console.log('I am talking...~blah blah blah~!')
    }
}


// person.walk()  // a method in the object ALWAYS returns reference of the object

const prop = 'name'
console.log(person[prop])

// an example 'where this' doesn't work unless binded
const walk = person.walk.bind(person) // a standalone function will return the window object
console.log(walk)
walk()