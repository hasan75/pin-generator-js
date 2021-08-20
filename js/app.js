function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        getPin()
    }
}
function generatePin() {
    const pinValue = getPin()
    document.getElementById('display-pin').value = pinValue;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calculatorInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calculatorInput.value = ''
        }
    }
    else {
        const previousNumber = calculatorInput.value
        const newNumber = previousNumber + number
        calculatorInput.value = newNumber
    }
})

function verifyPin() {

}