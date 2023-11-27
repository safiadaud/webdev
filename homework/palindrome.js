   
   
   /* Create a page that will check if a string/number 
    is a palindrome using event listeners. 
    It should console log whether the string is a palindrome or not */

document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const head = document.head;

    function palindromeCheck(string){

        // remove spaces from string
        // let stringWithoutSpaces = string.replace(/\s/g, '');

        // Use a regular expression to keep only alphabetical characters
        let alphanumericString = string.toLowerCase().replace(/[^a-z]/g, '');

        // Convert the string to lowercase to make the comparison case-insensitive
        // let lowercaseString = stringWithoutSpaces.toLowerCase();

        // convert string to array
        let Array = alphanumericString.split("");

        // reverses items of the array
        let reverseArray = Array.reverse();


        // joins array items and converts them into a string
        // takes in argument a seperator char, the default is a comma
        let newstring = reverseArray.join("");
        
        if (newstring === alphanumericString){
            console.log(`${string} is a palindrome.`);
            return newstring;
        }
        else{
            console.log(`${string} is not a palindrome.`);
            return false;
        }
    
    }

    const h1 = document.querySelector('h1');

    h1.addEventListener('click', function(){
        let h3El = document.createElement('h3');
        h3El.innerText = "a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or nurses run."
        let div = document.getElementById('definition');
        div.append(h3El);
    })

    palindromeCheck("kayak");

    const form = document.querySelector("form");

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let input = document.getElementById("word");

        let h2El = document.createElement('h2');
        let div = document.getElementById('form-div');

        if (palindromeCheck(input.value)){
            h2El.innerText = input.value + " is a palindrome";
            div.append(h2El);
        }
        else{
            h2El.innerText = `${input.value} is not a palindrome.`;
            div.append(h2El);
        }


    })



    let btn = document.getElementById("darkModeBtn");
    btn.addEventListener('click', function(){
        body.classList.toggle("darkmode");
      
    })


})

    