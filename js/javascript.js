function processForm(event) {
    event.preventDefault();

    // Getting the values from user
    var firstNumber = parseInt(document.getElementById('firstNumber').value);
    var secondNumber = parseInt(document.getElementById('secondNumber').value);
    var thirdNumber = parseInt(document.getElementById('thirdNumber').value);
    var forthNumber = parseInt(document.getElementById('forthNumber').value);

    // Clear previous table content
    var tbody = document.querySelector('#multiplicationTable tbody');
    tbody.innerHTML = '';

    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = ''; // Clear any previous messages

    // statements check if the number is in between the given range. If true the user will need to type in the input again
    if (firstNumber < -50 || firstNumber > 50) {
        errorMessage.textContent  = "Input needs to be between -50 and 50";
        return;
    }
    else if (secondNumber < -50 || secondNumber > 50) {
        errorMessage.textContent  = "Input needs to be between -50 and 50";
        return;
    }
    else if (thirdNumber < -50 || thirdNumber > 50) {
        errorMessage.textContent  = "Input needs to be between -50 and 50";
        return;
    }
    else if (forthNumber < -50 || forthNumber > 50) {
        errorMessage.textContent  = "Input needs to be between -50 and 50";
        return;
    }

    let headerRow = tbody.insertRow();
    headerRow.insertCell().textContent = '  '; // this is the top-left-most data cell, used for formating
    
    for (let x = firstNumber; x <= secondNumber; x++) { // this for loop creates the top row of values
        headerRow.insertCell().textContent = x;
        for (let y = thirdNumber; y <= forthNumber; y++) { // this for loop creates the values going down
        let row = tbody.insertRow();
        row.insertCell().textContent = y;
            for (let x = firstNumber; x <= secondNumber; x++) { // this for loop multiple each value of X and Y as they increment and insert them in the correct spot
               row.insertCell().textContent = x * y;
            }
        }
    }

}