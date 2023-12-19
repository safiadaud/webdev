document.addEventListener("DOMContentLoaded", function(){

    const body = document.body;
    
    /*
    The searching function must be able to return the cards searched for, 
    if the title searched for is in lowercase it should still be able to return the card we are searching for. 
    If the card (movie) does not exist then should display all movies and output “Not in the list”. 
    */

    // returns HTMLCollection object
    const h1Elements = document.getElementsByTagName('h1');

    const movieNames = [];
    // The item() method returns the element at a specified index of a HTMLCOllection object
    for (let i = 0; i < h1Elements.length; i++) {
        movieNames.push(h1Elements.item([i]).innerText.toLowerCase());
    }

    // console.log(movieNames);

    // Get elements with the specified class of cards
    const divsWithClassCards = document.getElementsByClassName('cards');

    // Loop through the NodeList and collect IDs
    const ids = [];
    for (let i = 0; i < divsWithClassCards.length; i++) {
        ids.push(divsWithClassCards[i].id);
    }
    // console.log(ids)

    const movieObject = {}


   
    // returns HTMLCollection object
    const imgElements = document.getElementsByTagName('img');
    const imgSources = [];
    // The item() method returns the element at a specified index of a HTMLCOllection object
    for (let i = 0; i < imgElements .length; i++) {
        imgSources.push(imgElements.item([i]).src.toLowerCase());
    }
    
    // console.log(imgSources)
    
    // Create an object for each movie with id and image
    // movie name = inner object name
    
    
    for (let i = 0; i < movieNames.length; i++) {
        const movieName = movieNames[i];
        const id = ids[i];
        const image = imgSources[i];
      
        // Create an object for each movie with id and image
        movieObject[movieName] = {
          id: id,
          image: image,
        };
      }
      

    console.log(movieObject)

    const h3El = document.getElementById('not-in-the-list');
    let h3Visible = false;
    const containerDiv = document.getElementById('container');
    // inner divs that hold the cards
    let allCardDivs = document.getElementsByClassName('cards');

    const input = document.querySelector('input');

    function handleInput(){
        
        let userInput = input.value.toLowerCase(); 
        // remove all cards from the page               
        for (let i = 0; i < allCardDivs.length; i++){
            allCardDivs[i].classList.add('dontDisplay');
        }

        if (userInput.length > 0)
        {
             
            // checks if movieobject has an objec that is the same as the user input
            if (movieObject.hasOwnProperty(userInput)){

                // display searched card div

                let searchedCardDiv = document.getElementById(movieObject[userInput]['id']);
                searchedCardDiv.classList.remove('dontDisplay')


                // what position was the card in originally 
                const index = movieNames.indexOf(userInput);

                // .append would add the searched card at the end of the container div
                // containerDiv.append(searchedCardDiv);

                // element.insertBefore(new, existing)
                containerDiv.insertBefore(searchedCardDiv, containerDiv.children[index]);

                // dont display "movie not in the list" message 
                if (h3Visible === true){
                    h3El.classList.add('dontDisplay')
                }
                
                h3Visible = !h3Visible
                 
                

            }else{

                // display all the cards
                for (let i = 0; i < allCardDivs.length; i++){
                    allCardDivs[i].classList.remove('dontDisplay');
                }
                
                // output "movie is not list"
            
                if(h3Visible === false){
                    h3El.classList.remove('dontDisplay') 
                    
                }
                
                h3Visible = !h3Visible;

            }
        }
        
        
        else {

            
            for (let i = 0; i < allCardDivs.length; i++){
                allCardDivs[i].classList.remove('dontDisplay');
            }
            // Toggle visibility based on the state
            
            if (h3Visible === true){
                h3El.classList.add('dontDisplay') 
                
            }
            h3Visible = !h3Visible;
            
                    
        }
        
    }

    

    function isValidImageUrl(imageUrl){
        const imageUrlRegex = /\.(jpeg|jpg|gif|png|webp)$/i;
        const isValidImageUrl = imageUrlRegex.test(imageUrl);
        return isValidImageUrl
    }

    function isValidMovie(name){
        if (name.length > 0 && name.length < 50){
            return true;
        }
    
    }
    
    // to be used for h1 elements that will display the added movie names
    function capitalizeEveryOtherWord(words){
        
        words = words.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        words = words.join(" ");
        return words
    }





    const button = document.getElementById('btn');
    button.addEventListener('click', function(event) {
        
        event.preventDefault()
        
        handleInput()
   })



    // adding a card 
    // movie name id="name"
    // image url id="id"   

    const form = document.getElementById('form-two');
    form.addEventListener('submit', function(event) {

        event.preventDefault();

        const newMovieInput = document.getElementById('movieName');
        let newMovieName = newMovieInput.value;

   
        const urlInput = document.getElementById('url');
        const imageUrl = urlInput.value.toLowerCase()

        
       
        if (isValidMovie(newMovieName)){

            if (isValidImageUrl(imageUrl)) {
                
                
                // delete any whitespace in the movie name and add Card to create the id of the new card div    
                const newCardId = newMovieName.replace(" ", "") + "Card"
                

                if (movieObject.hasOwnProperty(newMovieName) || imgSources.includes(imageUrl)) {
                    alert("This movie is already in the list.")
                }else{

                    // create a div with class cards

                    const newCardsDiv = document.createElement('div');
                    
                    newCardsDiv.classList.add('cards');
                    newCardsDiv.id = newCardId;
                    newMovieName =  newMovieName.toLowerCase()
                    
                    
                    // create an img element to it, assign its src attribute to the user's image url
                    const img = document.createElement('img');
                    img.src = imageUrl;

                    movieObject[newMovieName] = { id: newCardId, image: imageUrl };
                    
                    newCardsDiv.append(img);

                    // create a h1 element; innerText = newMovieName
                    const h1 = document.createElement('h1');
                    newMovieName = capitalizeEveryOtherWord(newMovieName);
                    h1.innerText = newMovieName;

                    // append both to the cards div 
                    // append cards div to the container div
                    
                    newCardsDiv.append(h1);
                    containerDiv.append(newCardsDiv);

                    // add img to the img sources list so that the same img cannot be added with a different movie name, 
                    imgSources.push(imageUrl)

                  
                }
                
                
            }
            else{
                alert("Invalid url. Please try again.")
            }
        }
        else{
            alert("Invalid movie name. Please try again.")
        }


   })


   


});