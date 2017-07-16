/**
 * FUNCTIONS
 */




/**
 *
 * This function checks if the input or textarea is not blank,
 * returns true when is not blank.
 *
 * @param input|textarea
 * @returns {boolean}
 */
function isInputNotBlank(input){

    var content = input.value;
    if(content != ""){
        return true;
    }else{
        return false;
    }
}

/**
 * This function checks if the input radio of the contact form is not blank,
 * returns true when is not blank.
 * @returns {boolean}
 */
function isRadioNotBlank() {
    var radioChecked = document.querySelector('input[name="how"]:checked');
    if (radioChecked == null){
        return false;
    }else{
        // check if other is selected
        if(radioChecked.value == 'Other'){
            // check if the input is filled
            var inputOther = document.getElementById('inputOther');
            if(isInputNotBlank(inputOther)){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
}

/**
 * This function receives the inputRadio already checked and returns the value
 * @param radioChecked
 * @returns {Number|string}
 */
function getRadioValue() {
    var radioChecked = document.querySelector('input[name="how"]:checked');
    if (radioChecked != null){

        if (radioChecked.value != 'Other') {
            return radioChecked.value;
        } else {
            return  document.getElementById('inputOther').value;
        }
    }else{
        return 'no radio selected';
    }
}

/**
 * This functions checks if the given input has a valid email,
 * returns true when the email is valid.
 * @param inputEmail
 * @returns {boolean}
 */
function checkEmailFormat(inputEmail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(inputEmail.value.match(mailformat)){
        return true;
    }else{
        return false;
    }
}

/**
 * This functions checks is the given number is valid
 * @param inputPhone
 * @returns {boolean}
 */
function checkPhoneFormat(inputPhone){
    var phoneformat = /^\+\d{10,13}$/;
    if(inputPhone.value.match(phoneformat)){
        return true;
    }else{
        return false;
    }
}

/**
 * This function counts the words of a string.
 * @param str
 * @returns {Number}
 */
function countWords(str){
    // normalize spaces
    str = str.replace(/\s+/gm," ");
    // deleting start and end spaces
    str = str.trim();
    var arr = str.split(" ");
    var count = arr.length;
    if (arr[0] === ''){
        return 0;
    }else{
        return count;
    }
}
/**
 * This functions checks if the element has a given class class
 * @param element
 * @param cls
 * @returns {boolean}
 */
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}


function checkIfRadioOtherWasSelectedAndRevealTheInput(){
    console.log('im in');
    var radioChecked = document.querySelector('input[name="how"]:checked');
    if (radioChecked.value === 'Other') {
        inputOther.classList.remove('hidden');
    }else{
        inputOther.classList.add('hidden');
    }
}

function isFormValid(){
    var noError = true;
    if (isInputNotBlank(inputName) === false){
        spanName.innerText = 'This field should not be blank.';
        spanName.classList.remove('no-visibility');
        noError = false;
    }else{
        spanName.classList.add('no-visibility');
        noError = true;
    }

    if (isInputNotBlank(inputPhone) === false){
        spanPhone.innerText = 'This field should not be blank.';
        spanPhone.classList.remove('no-visibility');
        noError = false;
    }else if(checkPhoneFormat(inputPhone) === false) {
        spanPhone.innerText = 'This is not a valid phone number. Hint: +34610123456.';
        spanPhone.classList.remove('no-visibility');
        noError = false;

    }else{

        spanPhone.classList.add('no-visibility');
        noError = true;
    }

    if (isInputNotBlank(inputEmail) === false){
        spanEmail.innerText = 'This field should not be blank.';
        spanEmail.classList.remove('no-visibility');
        noError = false;
    }else if (checkEmailFormat(inputEmail) === false){
        spanEmail.innerText = 'This is not a valid email.';
        spanEmail.classList.remove('no-visibility');
        noError = false;
    }else{

        spanEmail.classList.add('no-visibility');
        noError = true;
    }

    if (isInputNotBlank(inputMsg) === false){
        spanMsg.innerText = 'This field should not be blank.';
        spanMsg.classList.remove('no-visibility');
        noError = false;
    }else if (countWords(inputMsg.value) > 150){
        spanMsg.innerText = '150 word max.';
        spanMsg.classList.remove('no-visibility');
        noError = false;
    }else{
        spanMsg.classList.add('no-visibility');
        noError = true;

    }

    if (isRadioNotBlank() === false){
        spanHow.innerText = 'This field should not be blank.';
        spanHow.classList.remove('no-visibility');
        noError = false;
    }else{
        spanHow.classList.add('no-visibility');
        noError = true;
    }

    var wordsLeft = document.getElementById('words-left');

    if (150 - countWords(inputMsg.value) > 0){

        wordsLeft.innerText = 150 - countWords(inputMsg.value);
    }else{
        wordsLeft.innerText = 0;

    }

    if (noError) {
        return true;
    }else{
        return false;
    }
}


/**
 * JS CODE
 */

var form = document.getElementById('contact-form');
var send = document.getElementById('send');

var inputName = document.getElementById('name');
var inputPhone = document.getElementById('phone');
var inputEmail = document.getElementById('email');
var inputMsg = document.getElementById('message');
var spanName = document.getElementById('name-error');
var spanPhone = document.getElementById('phone-error');
var spanEmail = document.getElementById('email-error');
var spanHow = document.getElementById('how-error');
var spanMsg = document.getElementById('message-error');
var inputOther = document.getElementById('inputOther');

form.addEventListener('keyup', function (event) {

    isFormValid();

});

var howElements = document.querySelectorAll('input[name="how"]');
console.log(howElements);
howElements.forEach(function (element) {
    console.log('en foreach')
    element.addEventListener('click',function(){
        isFormValid();
        checkIfRadioOtherWasSelectedAndRevealTheInput();
    });
});

send.addEventListener('click',function (e) {
    if (isFormValid()){
        alert('valido');
        // form.submit();
    }else{
        e.preventDefault();
        alert('no valido');

    }
});









