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

const successMessage = document.getElementById('notify-success');
const failError = document.getElementById('notify-fail');

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNum = document.getElementById('typed-numbers').value;

    if (pin == typeNum) {
        successMessage.style.display = 'block'
        failError.style.display = 'none'
    }
    else {
        failError.style.display = 'block'
        successMessage.style.display = 'none'
    }
}