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
function getRadioValue(radioChecked) {

    if (radioChecked.value != 'Other') {
        return radioChecked.value;
    } else {
        return  document.getElementById('inputOther').value;
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


// Validating input name


// Not blank

// Validating input email
// Not blank
// valid email

// Validating how
// Not blank
// Proper other handling

// Validating phone
// not blank
// validate number

// Validating textarea
// not blank
// 150 words maximum



