function isValidCard(number) {
    number = number.replace(/\s/g, "");

    if (!/^\d{16}$/.test(number)) {
        return false;
    }

    let sum = 0;
    let doubleDigit = false;

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i]);

        if (doubleDigit) {
            digit = digit * 2;

            if (digit > 9) {
                digit = digit - 9;
            }
        }

        sum = sum + digit;
        doubleDigit = !doubleDigit;
    }

    return sum % 10 === 0;
}

function checkCard() {
    let number = document.getElementById("cardNumber").value;
    let result = document.getElementById("result");

    if (isValidCard(number)) {
        result.innerHTML = "Valid credit card number!";
    } else {
        result.innerHTML = "Invalid credit card number.";
    }
}