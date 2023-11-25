const body = document.body;
const head = document.head;
const header = document.getElementsByTagName("header")[0];


let btn = document.getElementById("darkmode");
btn.addEventListener('click', function(){
    body.classList.toggle("darkmode");
})


let paragraph = document.createElement("p");
paragraph.id = "demo";
paragraph.innerText = "this is my paragraph text"
body.append(paragraph);

const myElement = document.getElementById("demo");


myElement.addEventListener("mouseover", myFunction);
myElement.addEventListener("click", mySecondFunction);


const header2 = document.getElementById("h2tag");

header2.addEventListener("click", function() {
	header2.style.backgroundColor = "red";
   });


function myFunction() {
  myElement.innerHTML = "Moused over!"
}

function mySecondFunction() {
  myElement.innerHTML = "Clicked!<br>"
}

function changeTheme(){
    body.style.backgroundColor = "lightblue";
    header.style.backgroundColor = "blue";
}

let userInput = prompt("What is your name?")
if (userInput.length>0){
    let greet = document.createElement("h4");
    greet.innerText = "Hello, " + userInput;
    body.append(greet);
}






let string = "My favourite perfumes at the moment are:"

const x = document.createElement("p");
x.innerText= string;

// getElementsByTagName returns a NodeList, and you need 
// to specify the index of the element you want to target
body.append(x);


const list = document.createElement("ol");
const listItems = ["divine", "jadore", "paradox"]
for (let i = 0; i < listItems.length; i ++){
    let item = document.createElement("li");
    item.innerText = listItems[i];
    list.appendChild(item);

}

body.append(list);

list.addEventListener("mouseover", changeTheme);


