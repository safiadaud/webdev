document.addEventListener("DOMContentLoaded", function() { 
  const body = document.body;
  const head = document.head; 
  const header = document.getElementsByTagName("header")[0];


  let paragraph = document.createElement("p");
  paragraph.id = "demo";
  paragraph.innerText = "this is my paragraph text"
  body.append(paragraph);



  const header2 = document.getElementById("h2tag");

  header2.addEventListener("click", function() {
    header2.style.backgroundColor = "red";
    });



  function changeTheme(){
      body.style.backgroundColor = "lightblue";
      header.style.backgroundColor = "blue";
  }

  // let userInput = prompt("What is your name?")
  // if (userInput.length>0){
  //     let greet = document.createElement("h4");
  //     greet.innerText = "Hello, " + userInput;
  //     body.append(greet);
  // }

  const form = document.querySelector("form");

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById("name");
    let img = document.getElementById("img")

    let h2El = document.createElement('h2');
    let imgEl = document.createElement('img');

    var div = document.querySelector('div');

    h2El.innerText = name.value;
    imgEl.src = img.value;   

    

    div.append(imgEl);
    div.append(h2El)

  })





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

  body.classList.add('bright')
  
  

  // list.addEventListener("mouseover", changeTheme);
  // list.addEventListener("mouseout", function(){
  //     body.style.backgroundColor = "white";
  //     header.style.backgroundColor = "white";
  // })

  let btn = document.getElementById("darkModeBtn");
  btn.addEventListener('click', function(){
      body.classList.toggle("darkmode");
      body.classList.toggle("bright");
  })

  
  

});
