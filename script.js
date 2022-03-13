const form=document.getElementById('form');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');
// querySelector select everything not just id but also class
const messageContainer=document.querySelector('.message-container');
const message=document.getElementById('message');

let isValid=false;

function validateForm(){
    // we need to check if our form is filled and the input is full
    // so we use checkValidity to check it
    isValid=form.checkValidity();
    if(!isValid){
    // changing text and color of an html element with Java
    message.textContent='FILL OUT THE FORM!';
    message.style.color='red';
    // it will stop the funcation here
    return;
    }
    // check to see if password match
    if(password1.value===password2.value){
        passwordsMatch=true;
        password1.style.borderColor='green';
        password2.style.borderColor='green';
    } else{
        passwordsMatch=false;
        message.textContent="the passwords aren't the same!";
        message.style.color='red';
        password1.style.borderColor='red';
        password2.style.borderColor='red';
        return;
    }
    // if form is valid and passwords match
    if(isValid && passwordsMatch){
        message.textContent='You are Registered!';
        message.style.color='green';

    }
}


function processFormData(event){
    // when we click the submit button the page refresh because no server
    // with preventdefault the page will not refresh 
    event.preventDefault();
    validateForm();
}

// when we click submit the form will be sent but the form include an action that we need to make it happen ourselves
// event listenter
form.addEventListener('submit',processFormData)