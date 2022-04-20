const first = [1, 2, 3];

const second = [4,5,6]

// const combined = first.concat(second)

const combined = [...first, 'a', ...second, 'x']
console.log(combined);
const clone = [...first]  // clone an array


// Spread with Objects
const data = {
    name: 'James',
    sport: 'Basketball',
    years: 29,
}

const data2 = { job: 'Unemployed'}


const combinedObj = {...data, ...data2, location: 'Mountain View'}
console.log(combinedObj);