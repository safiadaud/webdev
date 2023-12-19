document.addEventListener("DOMContentLoaded", function(){

    const body = document.body;

    // takes html element as argument
    function validateName(name){
        var re = /[a-zA-Z]/
        if (name.value.match(re)){
            if (name.value.length > 0 && name.value.length < 15){
                console.log(name.value)
                name.style.borderColor = 'green';
                return true;
            }
            else{
                name.style.borderColor = 'red';
                errorMessage("name")
                return false
            }
        
        }
        else{
            
            name.style.borderColor = 'red';
            errorMessage("name");
            return false
        }
            
        
    }
    
    // takes html element as argument
    function validateEmail(email){
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.value.match(emailRegex)){
            email.style.borderColor = 'green';
            return true;
        }
        else{
            email.style.borderColor = 'red';
            errorMessage("email")
            return false;

        }
       
    }
    
    function errorMessage(element){
        console.log("Invalid " + element);
    }

    function success(name){
        body.innerHTML = '';
        // const h2 = document.createElement('h2');
        body.innerHTML = `<h1 style="height: 100vh; display: flex; align-items: center; justify-content:space-evenly">Welcome, ${name}</h1>`
        // body.append(h2)
    }

    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault()

        // validate name and email and then continue to movie page


        let isNameValid = false;
        let isEmailValid = false;

        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        
        if (validateName(nameEl)){
            isNameValid = true;
        }

        if(validateEmail(emailEl)){
            isEmailValid = true;
        }
        
        
        if(isNameValid && isEmailValid){
            success(nameEl.value)
            // go to project.html after a delay of 1.5 seconds
            setTimeout(function(){
                document.location.href = "./project.html";
            }, 1500); // 1000 milliseconds = 1 seconds
        
            
            
        }
       

   })

})