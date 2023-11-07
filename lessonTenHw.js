/*
    **Javascript Questions:**

1. write a function that console logs “hello world”
2. write a function that combines multiple arrays together as 1 big array (you can use the .concat method for this )
3. write a function that check if the number is an odd or even number
4. write a function that checks for a string and a function that checks for a number

**Hard Questions;**

1. write a function that reverses the order of an array e.g 54326 = 62345 
    ( this uses several different methods to obtain search them and try figure out the answer. 
    First you need to use split method to make the string into an array then reverse method 
    to reverse the order of the array followed by join to join the array into 1 string resources found above)


2. write a function to check if a string is a palindrome. (palindrome is if the word spells the same opposite, 
    e.g madam is true as its madam backwards, sight is false because it is this backwards.
*/

// 1
function greet(){
    console.log("Hello, world");
    return
}

// 2

greet();

function concat(a, b){
    let newArray = a.concat(b);
    console.log(newArray);
    return newArray;
}


concat([1, 2], [3, 4]);


// 3

function oddOrEven(a){

    if (typeof(a) == "number"){
        if (a % 2 == 0) {
            console.log(`${a} is even.`);
        }
        else{
            console.log(`${a} is odd.`);
        }
    
    }
    else{
        console.log(`${a} is not a number. Try again`);
    }

    return

}


oddOrEven(33);


// 4

function stringCheck(a) {
    if (typeof(a) == "string"){
        console.log(`${a} is a string`);
    }
    else{
        console.log(`${a} is not a string`);
    }
}


function numberCheck(a) {
    if (typeof(a) == "number"){
        console.log(`${a} is a number`);
    }
    else{
        console.log(`${a} is not a number`);
    }
}

stringCheck(445);
stringCheck("Hi!");

numberCheck(43);
numberCheck("asrgsthb");



// 1 Reverse a string

function reverseString(string){

    // takes in argument of where to split; "" split after each char

    let stringArray = string.split("");

    // reverses items of an array
    let reverseArray = stringArray.reverse();

    // joins array items and converts them into a string
    // takes in argument a seperator char, the default is a comma
    let newstring = reverseArray.join("");
    console.log(newstring);
    return
}


reverseString("7682");

// 2 palindrome checker

function palindromeCheck(string){

    let Array = string.split("");

    // reverses items of an array
    let reverseArray = Array.reverse();

    // joins array items and converts them into a string
    // takes in argument a seperator char, the default is a comma
    let newstring = reverseArray.join("");

    if (newstring == string){
        console.log(`${string} is a palindrome.`);
        return true;
    }
    else{
        console.log(`${string} is not a palindrome.`);
        return false;
    }
        
    
   
}

palindromeCheck("kayak");
palindromeCheck("Hello");
