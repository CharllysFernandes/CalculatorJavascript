const digits = document.getElementById("digits")
const historic = document.getElementById("history")
const keyboard = document.getElementById("keyboard");
const buttonArray = ["clear", "plusMinus", "percent", "divider", "seven", "eight", "nine", "eks", "four", "five", "six", "minus", "one", "two", "three", "plus", "return", "zero", "point", "equal"];
let number1 = "";
let number2 = "";
let operator = "";

for (let i = 0; i < buttonArray.length; i++) {
    keyboard.innerHTML +=
    `
        <button class="color-button-keyboard btn rounded rounded-3 text-white ${buttonArray[i]}" id="${buttonArray[i]}" onclick=key("${buttonArray[i]}")></button>
    `
}

document.getElementById("dark").addEventListener('click', () => {
    document.getElementById("dark").classList.remove("text-black-50")
    document.getElementById("calc").classList.remove("bg-calc-bright");
    document.getElementById("keyboard").classList.remove("bg-button-bright");
    document.getElementById("buttonTheme").classList.remove("bg-button-bright");
    document.getElementById("history").classList.remove("text-black-50");
    document.getElementById("digits").classList.remove("text-black")
    const elements = document.querySelectorAll('button')
    elements.forEach((element) => {
        element.classList.remove('text-black', 'bg-button-key')
    });

    document.getElementById("dark").classList.add("text-white");
    document.getElementById("brightness").classList.add("text-white-50")
    document.getElementById("calc").classList.add("color-calc");
    document.getElementById("keyboard").classList.add("color-keyboard")
    document.getElementById("buttonTheme").classList.add("color-button-theme","text-black")
    document.getElementById("history").classList.add("text-white-50");
    document.getElementById("digits").classList.add("text-white")
    const el = document.querySelectorAll('button')
    el.forEach((element) => {
        element.classList.add('color-button-keyboard','text-white');
    });

})

document.getElementById("brightness").addEventListener('click', () => {
    document.getElementById("dark").classList.remove("text-white");
    document.getElementById("brightness").classList.remove("text-white-50")
    document.getElementById("calc").classList.remove("color-calc");
    document.getElementById("keyboard").classList.remove("color-keyboard")
    document.getElementById("buttonTheme").classList.remove("color-button-theme","text-black")
    document.getElementById("history").classList.remove("text-white-50");
    document.getElementById("digits").classList.remove("text-white")
    document.querySelectorAll('button').forEach((element) => {
        element.classList.remove('color-button-keyboard','text-white');
    });

    document.getElementById("dark").classList.add("text-black-50")
    document.getElementById("calc").classList.add("bg-calc-bright");
    document.getElementById("keyboard").classList.add("bg-button-bright");
    document.getElementById("buttonTheme").classList.add("bg-button-bright");
    document.getElementById("history").classList.add("text-black-50");
    document.getElementById("digits").classList.add("text-black")
    document.querySelectorAll('button').forEach((element) => {
        element.classList.add('text-black','bg-button-key')
    });
})

function key(caract) {
    let keys = document.getElementById(caract);
    let styles = window.getComputedStyle(keys, "::after");
    let key = styles.content.replace(/\D/g, '');

    if (key >= 0 && key <= 9) {
        if (number1 === 0) {
            digits.innerHTML = key
            number1 = key
        } else {
            if (key >= 0 && key <= 9) {
                if (digits.innerHTML === "0") {
                    digits.innerHTML = key
                } else {
                    digits.innerHTML += key
                }
            }
        }
    }
}

function calculate(number1, operator, number2) {
    switch (operator) {
        case "plus":
            return parseFloat(number1) + parseFloat(number2);
        case "minus":
            return parseFloat(number1) - parseFloat(number2);
        case "divider":
            return parseFloat(number1) / parseFloat(number2);
        case "eks":
            return parseFloat(number1) * parseFloat(number2);
        case "percent":
            return (parseFloat(number2) * parseFloat(number1))
        default:
            break;
    }
}


document.getElementById("plusMinus").addEventListener('click', () => {
    number = digits.innerHTML;
    digits.innerHTML = number * (-1);
})

document.getElementById("return").addEventListener('click', () => {
    let number = digits.innerHTML;
    let remove = number.replace(/.$/, '')
    digits.innerHTML = remove
})

document.getElementById("percent").addEventListener('click', () => {
    number2 = digits.innerHTML;
    historic.innerHTML += number2 + `%`
    digits.innerHTML = (calculate(number1, operator, number2) / 100);
    number1 = 0;
})

document.getElementById("plus").addEventListener('click', () => {
    number1 = digits.innerHTML;
    historic.innerHTML = number1 + '<span> + </span>'
    operator = "plus"
    digits.innerHTML = "0"

})
document.getElementById("minus").addEventListener('click', () => {
    number1 = digits.innerHTML;
    historic.innerHTML = number1 + `<span> - </span>`
    operator = "minus"
    digits.innerHTML = "0"

})
document.getElementById("divider").addEventListener('click', () => {
    number1 = digits.innerHTML;
    historic.innerHTML = number1 + `<span> ÷ </span>`
    operator = "divider"
    digits.innerHTML = "0"

})
document.getElementById("eks").addEventListener('click', () => {
    number1 = digits.innerHTML;
    historic.innerHTML = number1 + `<span> x </span>`
    operator = "eks"
    digits.innerHTML = "0"

})

document.getElementById("equal").addEventListener("click", () => {
    number2 = digits.innerHTML;
    historic.innerHTML += number2
    digits.innerHTML = calculate(number1, operator, number2);
    number1 = 0;
})

document.getElementById("clear").addEventListener("click", () => {
    digits.innerHTML = "0"
})