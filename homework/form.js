document.addEventListener("DOMContentLoaded", function(){
    const body = document.body;
    const head = document.head;
    

    const form = document.querySelector('form');

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let isNameValid = false;
        let isNumberValid = false;
        let isEmailValid = false;

        let nameEl = document.getElementById('name');
        if (validateName(nameEl)){
            isNameValid = true;
        
        }
        else{
            errorMessage("name")
        }


        let numberEl = document.getElementById('number');
        if (validatePhoneNumber(numberEl)){
            isNumberValid = true;
    
        }
        else{
            errorMessage("number")
        }
        

        let emailEl = document.getElementById('email');
        if (validateEmail(emailEl)){
            isEmailValid = true;
        
        }
        else{
            errorMessage("email address")

        }

        if (isNameValid && isNumberValid && isEmailValid){
            successMessage();
            body.innerHTML = '';
            let h1 = document.createElement('h1');
            h1.innerHTML = `<h1 style="text-align: center">Welcome ${nameEl.value}</h1>`;
            body.append(h1);
        }


    })

    // check for name validity, number validity, email validity


    function validateName(name) {

        var re = /[a-zA-Z]/
        if (name.value.match(re)){
            if (name.value.length > 0 && name.value.length < 15){
                console.log(name.value)
                name.style.borderColor = 'green';
                return true;
            }
           
        }
        else{
           
            name.style.borderColor = 'red';
        }
        
    }

    function validatePhoneNumber(number) {
        // var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        // var re = /^\d{11}$/;
        var re = /^(\+44\d{10}|\d{11})$/;

        if (re.test(number.value)){
            number.style.borderColor = 'green';
            return true
        }
        else{
            number.style.borderColor = 'red';
        }
        
    }
   
    function validateEmail(email) {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.value.match(emailRegex)){
            email.style.borderColor = 'green';
            return true;
        }
        else{
            email.style.borderColor = 'red';
        }
        
    }

    function errorMessage(element){
        console.log("Invalid " + element);
    }

    function successMessage(){
        alert("Login successful");
    }
})
    