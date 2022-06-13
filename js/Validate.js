let submit = document.querySelector("#submit-btn");
let email = document.querySelector("#Email");
let emailerror = document.querySelector(".email-error");
let pwd = document.querySelector("#pwd");
let pwderror = document.querySelector(".pwd-error");
let repeatpwd = document.querySelector("#repeatpwd");
let pwdStrengthBar = document.querySelector(".password-strength");

let inputs = document.querySelectorAll(".form-input-field");
let error = document.querySelectorAll(".error");

//reset border color
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", ()=>{
        inputs[i].style.borderColor = "rgb(58, 48, 78)";
        error[i].innerHTML = "";
    });
}

//reset border color
submit.addEventListener("click", ()=>{

    let valid = true;

    //ckeck email
    let has_at_symbol = false;
    let has_dot_symbol = false;
    let Email = email.value;
    for (let i = 0; i < Email.length; i++) {
        if(Email[i] == "@"){
            has_at_symbol = true;
        }
        if(Email[i] == "."){
            has_dot_symbol = true;
        }
    }
    if(has_at_symbol == false){
        valid = false;
        emailerror.innerHTML = "an Email should contain the '@' symbol";
        email.style.borderColor = 'red';
    }else if(has_dot_symbol == false){
        valid = false;
        emailerror.innerHTML = "an Email should contain the '.' symbol";
        email.style.borderColor = 'red';
    }else{
        let splitmail = Email.split(".");
        if(splitmail[1].length < 2){
            valid = false;
            emailerror.innerHTML = "make sure you enter a proper email";
            email.style.borderColor = 'red';
        }
    }

    // make sure passwords match
    let password = pwd.value;
    let repeatPassword = repeatpwd.value;
    if(password != repeatPassword){
        pwd.style.borderColor = "red";
        repeatpwd.style.borderColor = "red";
        pwderror.innerHTML = "Passwords do not match";
        valid = false;
    }

    // check if input values are filled
    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){
            valid = false;
            inputs[i].style.borderColor = "red";
            error[i].innerHTML = "This field is required";
        }
    }

    if(valid == true){
        submit.style.backgroundColor = "green";
        submit.innerHTML = "your account is validated"
    }else{
        pwdStrengthBar.style.width = "0%";
    }

});

// check password strength
let passwordStrength = 0;

const alphabetUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabetLower = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const specialChars = ["#", "$", "!", "%", "&", "*", "^"];

pwd.addEventListener("change", ()=>{
    let password = pwd.value;

    if(password.length == 0){
        passwordStrength = 0;
    }

    for (let i = 0; i < alphabetLower.length; i++) {
        if(password.includes(alphabetLower[i])){
            passwordStrength = 1;
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        if(password.includes(numbers[i])){
            if(passwordStrength == 1){
                passwordStrength = 2;
            }
        }
    }

    for (let i = 0; i < alphabetUpper.length; i++) {
        if(password.includes(alphabetUpper[i])){
            if(passwordStrength == 2){
                passwordStrength = 3;
            }
        }
    }

    for (let i = 0; i < specialChars.length; i++) {
        if(password.includes(specialChars[i])){
            if(passwordStrength == 3){
                passwordStrength = 4;
            }
        }
    }

    switch (passwordStrength) {
        case 1:
            pwdStrengthBar.style.width = "calc( 90% / 4 )";
            pwdStrengthBar.style.backgroundColor = "rgb(255, 44, 72)";
            break;
        case 2:
            pwdStrengthBar.style.width = "calc( 90% / 4 * 2 )";
            pwdStrengthBar.style.backgroundColor = "rgb(255, 163, 176)";
            break;
        case 3:
            pwdStrengthBar.style.width = "calc( 90% / 4 * 3 )";
            pwdStrengthBar.style.backgroundColor = "rgb(147, 253, 179)";
            break;
        case 4:
            pwdStrengthBar.style.width = "calc( 90% / 4 * 4 )";
            pwdStrengthBar.style.backgroundColor = "rgb(22, 255, 92)";
            break;
        default:
            pwdStrengthBar.style.width = "0%";
            break;
    }
});