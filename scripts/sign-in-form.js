//TOGGLE SIGN-UP FORM QUERY SELECTOR'S
const signUpBtn = document.querySelector("#sign-up-btn")
const inputsContainer = document.querySelector(".inputs-container")

//FORM VALIDATION QUERY SELECTOR'S
const submitBtn = document.querySelector('#submit-form')
const signUpForm = document.querySelector('form')
const passwordField = document.querySelector('#password')

//CREATING THE MESSAGE DISPLAYED WHEN PASSWORDS DON'T MATCH
let notMatchingError = document.createElement('p')
notMatchingError.innerText = '* Passwords do not match.' 
notMatchingError.style.color = 'red'

//TOGGLES THE SIGN UP INPUTS
signUpBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    toggleSignUpInputs()
})

//CHECK IF THE PASSWORDS ARE MATCHING AND CHECK THE FORM VALIDITY
submitBtn.addEventListener('click', (evt) =>{
    if(checkPassword()){
        if(signUpForm.reportValidity()){
            signUpForm.submit()
        }
    }
    else{
        evt.preventDefault()
    }
})

//CREATES NEW INPUT DIV's FOR PHONE NUMBER AND PASSWORD CONFIRM, APPENDS THEM
//TO THE FORM AND REMOVES THE SIGN UP TEXT AND BUTTON FROM THE SCREEN
function toggleSignUpInputs(){
    let phoneDiv = document.createElement('div')
    let confirmPassword = document.createElement('div')

    phoneDiv.innerHTML = `<label for="phone-number">Phone number</label>
    <input type="tel" name="phone-number" id="phone-number" minlength="11" maxlength="12" pattern="[0-9]{2}[9]{1}[0-9]{4}([\-]?)[0-9]{4}" title="ex.: XX9XXXXXXXX or XX9XXXX-XXXX" required>`
    phoneDiv.classList.add('form-row')
    
    confirmPassword.innerHTML = `<label for="password-confirm">Confirm password</label>
    <input type="password" name="password-confirm" id="password-confirm" required>`
    confirmPassword.classList.add('form-row')

    inputsContainer.appendChild(confirmPassword)
    inputsContainer.appendChild(phoneDiv)

    document.querySelector('#sign-type').innerText = 'Sign up to GFood'
    document.querySelector('#sign-up').style.display = "none"

    signUpListeners()
}

//ACTIVATE THE EVENT LISTENERS OF THE SIGN UP INPUTS
function signUpListeners(){
    //THOSE QUERY SELECTOR'S ARE CREATED AFTER BECAUSE THEY DON'T EXIST BY DEFAULT, ONLY WHEN THE USER SELECTS 
    //THE SIGN UP OPTION
    const phoneField = document.querySelector('#phone-number')
    const passwordConfirmField = document.querySelector('#password-confirm')
    
    //BLOCK SOME INVALID KEYPRESSES
    phoneField.addEventListener('keydown', (evt) =>{
        let allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight']
        
        if(isNaN(Number(evt.key)) && !allowedKeys.includes(evt.key)){
            evt.preventDefault()
        }
        if(phoneField.value.length === 7 && !allowedKeys.includes(evt.key)){
            phoneField.value += '-'
        }
    })
    
    //CHECKS THE PASSWORD AND PASSWORD CONFIRM INPUTS EVERYTIME A NEW KEY IS PRESSED
    passwordField.addEventListener('keyup', () =>{
        if(!checkPassword(passwordField, passwordConfirmField)){
            passwordField.after(notMatchingError)
            addInvalidClass(passwordField, passwordConfirmField)
        }
        else{
            if(passwordField.nextElementSibling){
                passwordField.nextElementSibling.remove()
            }
            removeInvalidClass(passwordField, passwordConfirmField)
        }
    })
    
    passwordConfirmField.addEventListener('keyup', () =>{
        if(!checkPassword(passwordField, passwordConfirmField)){
            passwordField.after(notMatchingError)
            addInvalidClass(passwordField, passwordConfirmField)
        }
        else{
            if(passwordField.nextElementSibling){
                passwordField.nextElementSibling.remove()
            }
            removeInvalidClass(passwordField, passwordConfirmField)
        }
    })
}

//CHECKS IF THE PASSWORDS MATCH
function checkPassword(passwordField, passwordConfirmField){
    if(passwordField.value === passwordConfirmField.value)
        return true
    else
        return false
}

//ADDS AN INVALID STYLE WHEN THE PASSWORDS DON'T MATCH
function addInvalidClass(passwordField, passwordConfirmField){
    passwordField.classList.add('invalid')
    passwordConfirmField.classList.add('invalid')
}

//REMOVES THE INVALID STYLE
function removeInvalidClass(passwordField, passwordConfirmField){
    passwordField.classList.remove('invalid')
    passwordConfirmField.classList.remove('invalid')
}