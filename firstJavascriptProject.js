/*

1. **Using string concatenation add two different strings together and print this off.**
2. **Using variables create a variable for a number, a string. Then print each of these variables.**
3. **Using string concatenation in javascript combine 3 different variables and prints it off. 
    I.e variable for name age and date of birth will result in “my name is John I am 35 years old and I was born in 1988”. 
    (you cannot use name age and dob as your variables).**
4. **Create a variable that is printed off then changed further down the script and printed.**
5. **Print off the datatypes for a number variable & string variable.**
6. **Write a conditional statement to state if hero is a dc character or marvel character. (i.e superman would be dc, spiderman would be marvel).**

*/

// 1

console.log("Steve " + "Jobs" )


// 2
let day = 4;
let month = "November ";

console.log(month + day);


// 3 
const houseNo = 10;
const street = " Downing Street ";
const city = "London";

console.log(houseNo + street + city);

// 4

let colour = "Green";
console.log("My favourite colour is", colour);

colour = "Brown";
console.log("My favourite colour is", colour);

// 5

let myNumberVar = 7;
console.log(typeof(myNumberVar));

let greet = "Hello, World!";
console.log(typeof(greet));


// 6

let marvelCharacters = ["spiderman", "iron man" ,"doctor strange", "thor"];

let dcCharacters = ["batman", "superman", "green arrow", "wonder woman"];



let superhero = "batman";

// includes checks if an item is in an array or not
if (marvelCharacters.includes(superhero)){
    console.log("Batman is a marvel character.");
} else{
    console.log("Batman is a DC character.");
}