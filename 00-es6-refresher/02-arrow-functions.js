const squareNum = function(number) {
    return number * number
}

const square = number => {
    return number * numer
}


const jobs = [
    { id: 1, isActive: true},
    { id: 2, isActive: true},
    { id: 3, isActive: false},
]

const activeJobs = jobs.filter(job => job.isActive)
console.log(activeJobs);


const person = {
    name: 'James',
    talk() {
        setTimeout(function() {  // this function gets the global object
            console.log("this", this)
        }, 1000)
    }
}

person.talk()

// arrow functions will reference the object.
// the arrow function does not re-bind 
