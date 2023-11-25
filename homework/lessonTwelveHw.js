/*
    Take the following phrase and translate it to a different word depending on vowels shown.

    phrase “turpentine and turtles” 

    word equivalent "UUEEIEEAUUEE”

    Note for every u&e character in the phrase the word equivalent should contain 2 of those characters. 
    If it is not a vowel it is not stored in the word equivalent. below is a screenshot of how it should look

*/
let vowels = ["a", "e", "i", "o", "u"]
let phrase = "turpentine and turtles";
let word = "";

for (let i = 0; i < phrase.length; i++) {
    
    if (vowels.includes(phrase[i])){
        
        word =  word + phrase[i] + phrase[i]

    }
}
word = word.toUpperCase()



console.log(word);


/*
Create a pin that is generator from a length given. E.g Length of 6 the generator must create a pin of length 6 characters 
*/



function pinGenerator(length){
    let pin = "";
    for (let i = 0; i <length; i ++){
    let x = Math.floor((Math.random() * 9) + 1);
    // any number between 0 and 10, including decimals. let x = Math.random() * 10;
    pin = pin + x;
    
    }
    return `length is ${length} \n${pin}` 
}

console.log(pinGenerator(7));

/*
    print out a form of fizzbuzz depending on if a number is divisible
    print fizz if a number is divisible by 3
    and buzz if by 5
    print fizzbuzz if it's divisible by both 3 and 5
*/


for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FIZZBUZZ`);
    }
    else if (i % 5 === 0){
        console.log(`${i} buzz `);
    }
    else if (i % 3 === 0){
        console.log(`${i} fizz`);
    
    }
    else{
        console.log(`${i} is not divisible by 3 or 5.`)
    }
}





let array = [1, 2 , 4, 87, 2020];

let target = 4;

for (let i = 0; i < array.length; i++){
    if (array[i] === target) {
        console.log(`${target} is in the array at position with index ${i}.`)
    }
}


function Car(name, model, type, colour, engineSize, drive){
    this.name = name;
    this.model = model;
    this.type = type;
    this.colour = colour;
    this.engineSize = engineSize;
    this.drive = drive;
    this.sales = function(){
        return "buy" + " " + this.name + " " + this.model + " " + "for only £15000";
    }
}


let audiCar = new Car("Audi", "Q3", "Sline", "Black", 2.0, "4 wheel drive");
console.log(audiCar);
console.log(audiCar.sales());

let fordCar = new Car("Ford", "Fiesta", "hatchback", "Brown", 1.5, "4 wheel drive");


console.log(fordCar);
console.log(fordCar.sales());

