//Destructuring Arrays:

// Traditional way
const numbers = [1, 2, 3];
const firstNumber = numbers[0];
const secondNumber = numbers[1];
const thirdNumber = numbers[2];

// Destructuring assignment
const [a, b, c] = numbers;
console.log(a+"\n"); // 1
console.log(b+"\n"); // 2
console.log(c)+"\n"; // 3


//Destructuring Object:
// Traditional way
const person = { name: 'John', age: 30 };
const personName = person.name;
const personAge = person.age;

// Destructuring assignment
const { name, age } = person;
console.log("\n"+name+"\n"); // 'John'
console.log(age+"\n");  // 30

//Destructuring arrays with default values:

const [x = 1, y = 2] = [3];
console.log(x+"\n"); // 3
console.log(y+"\n"); // 2

// Destructuring Objects with alias:

const { firstName: fName, lastName: lName } = { firstName: 'John', lastName: 'Doe' };
console.log(fName+"\n"); // 'John'
console.log(lName+"\n "); // 'Doe'


const [e,i] = [10,20]

const{name: university, city}={name:'Autonoma',cit: 'Cali'}
console.log(e+"\n")
console.log(university)


