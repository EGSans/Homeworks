// Using template strings
let name = "John";
let age = 30;

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);


let multilineString = `
  This is a multiline string
  that spans multiple lines.
  It's very convenient for formatting text.
`;

console.log(multilineString);


let a = 5;
let b = 10;

let result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result);

const carro = {
    modelo: 'Sedan',
  };
  
  // You can add properties to the object
  carro.fabricante = 'Toyota';
  carro.color = 'Azul';
  
  console.log(carro);


  const otroArray = [1,2,3,4]
  otroArray.push(5)

  const newArray = otroArray;
  newArray.push(6)
  console.log(otroArray, newArray);

  const last = otroArray.findLast(x=>x<3)
  console.log(last)