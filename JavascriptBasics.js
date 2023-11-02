// hello.js
console.log('Hello, World')
console.log(1+1)


// data types
// text, in single/double quotation marks
let myName = "Safia";
console.log(myName);
// can be updated, let declares a variable, doesn't need to be mentioned again
myName = "Safa";
console.log(myName);

// numbers, not in quotes
let number = 4
console.log(number);

// undefined; a variable that hasnt been assigned a value
let name;
console.log(name);

// null, special type of no value or of no type
let nothing = null;
console.log(nothing)

// const; value it holds cannot be changed. constant.

const sky = "Blue";
console.log("The colour of the sky is", sky);

//sky = "green";
//console.log("The colour of the sky is", sky);
//TypeError: Assignment to constant variable.

// Arrays; list of values of different type
let list = [1, "november", true];
console.log(list);

// add a and b
const a = 5;
const b = 10;
console.log("The sum of a and b is:", a + b);


// key value pairs
// object data type
const person = { name: "Alice", age: 30 };

console.log("Person:", person);



// conditional debugging
const temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
} else {
  console.log("It's a pleasant day.");
}



// allows us to reuse this same functionality
function add(a , b){
    console.log("Adding", a , "and", b);
    return a + b;
}

console.log("Results:", add(3, 4));

const today = new Date();
console.log(today)