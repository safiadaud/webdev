/*
    1. **Write a conditional statement that takes into consideration validations (i.e case sensitivity). 
    this will be entire up to you as to what the conditional statement is on.
     (if this does not make sense please refer back to the recording)**

     
     
    2. **Write a conditional statement that prints whether the phone being used is an Iphone or an android**

    3. **Write a switch case that checks if the operation is a math operation (+,-,*,/) 
    if the options is any of the options given it should give me the result of 2 variables created above
    the switch case. For example. math operation is * and the variables are 250 & 10 then the answer should log 2500**

*/


// 1

var month = "January";
var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

if (typeof(month) == "string"){

    if (month.toLowerCase() === "november"){
        console.log("Yes, we are in november");
    }
    else if (months.includes(month.toLowerCase())){
        console.log(`${month} is not the current month`);
    }

    else{
        console.log("Try again. You did not enter a valid month.");
    }

}
else{
    console.log("Error: not a string");
}

// 2

let mobile = "Iphone";

if (typeof(mobile) == "string"){

    if(mobile.toLowerCase() == "android" || "iphone"){

        if (mobile.toLowerCase() == "android"){
            console.log("You are using an android.");
        }
        else {
            console.log("You are using an iphone.");
        }
        
    }
    else{
        console.log("You are not using an iphone or an android.")
    }
}
else{
    console.log("Error not a string.")
}

// 3

operation = "*";

let a = 25;
let b = 14;

switch(operation) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Incorrect operator. try again.")
}