document.addEventListener("DOMContentLoaded", function(){

    const Body = document.body;

    const list = document.querySelector('ul');
    const btn = document.getElementById('submitBtn');

    // capitalize a word
    function capitalize(word){
        let capitalized = word.charAt(0).toUpperCase() + word.slice(1)
        return capitalized;
    }
    

    // empty array to add list 
    let array = [];

    // loop through list and add each li item to array
    for(i = 0; i< list.children.length; i++){
        console.log(list.children[i].innerText)
        let item = list.children[i].innerText
        item = item.toLowerCase();
        array.push(item);
    }

    


    btn.addEventListener('click', function(e){
        e.preventDefault();

    
        const input = document.getElementById('newCar');
        const userInput = input.value;

        
        if (userInput.length > 0){
            if(array.includes(userInput.toLowerCase())){
                 alert("car is already in the list")
            }
            else{
                let liEl = document.createElement('li');
                liEl.innerHTML = capitalize(userInput);

                
                array.push(userInput.toLowerCase());
                list.append(liEl);
            }
        }

    })

    
})