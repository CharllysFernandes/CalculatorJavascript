
let keyboard = document.getElementById("keyboard");
let buttonArray = ["clear", "plusMinus", "percent", "divider", "seven", "eight", "nine", "eks", "four", "five", "six", "minus", "one", "two", "three", "plus", "return", "zero", "point", "equal"];
for (let i = 0; i < buttonArray.length; i++) {
    keyboard.innerHTML +=
        `
    <button class="color-button-keyboard btn rounded rounded-3 text-white ${buttonArray[i]}" id="${buttonArray[i]}" onclick=key("${buttonArray[i]}")></button>
    `
}
document.getElementById("dark").addEventListener('click', function () {

    // remove Styles
    document.getElementById("dark").classList.remove("text-black-50")
    document.getElementById("calc").classList.remove("bg-calc-bright");
    document.getElementById("keyboard").classList.remove("bg-button-bright");
    document.getElementById("buttonTheme").classList.remove("bg-button-bright");
    document.getElementById("history").classList.remove("text-black-50");
    document.getElementById("digits").classList.remove("text-black")
    const elements = document.querySelectorAll('button')
    elements.forEach((element) => {
        element.classList.remove('text-black')
        element.classList.remove('bg-button-key')
    });

    // add styles
    document.getElementById("dark").classList.add("text-white");
    document.getElementById("brightness").classList.add("text-white-50")
    document.getElementById("calc").classList.add("color-calc");
    document.getElementById("keyboard").classList.add("color-keyboard")
    document.getElementById("buttonTheme").classList.add("color-button-theme")
    document.getElementById("buttonTheme").classList.add("text-black")
    document.getElementById("history").classList.add("text-white-50");
    document.getElementById("digits").classList.add("text-white")

    const el = document.querySelectorAll('button')
    el.forEach((element) => {
        element.classList.add('color-button-keyboard');
        element.classList.add('text-white')
    });

})
document.getElementById("brightness").addEventListener('click', function () {
    // remove styles
    document.getElementById("dark").classList.remove("text-white");
    document.getElementById("brightness").classList.remove("text-white-50")
    document.getElementById("calc").classList.remove("color-calc");
    document.getElementById("keyboard").classList.remove("color-keyboard")
    document.getElementById("buttonTheme").classList.remove("color-button-theme")
    document.getElementById("buttonTheme").classList.remove("text-black")
    document.getElementById("history").classList.remove("text-white-50");
    document.getElementById("digits").classList.remove("text-white")
    const el = document.querySelectorAll('button')
    el.forEach((element) => {
        element.classList.remove('color-button-keyboard');
        element.classList.remove('text-white')
    });

    // Add Styles
    document.getElementById("dark").classList.add("text-black-50")
    document.getElementById("calc").classList.add("bg-calc-bright");
    document.getElementById("keyboard").classList.add("bg-button-bright");
    document.getElementById("buttonTheme").classList.add("bg-button-bright");
    document.getElementById("history").classList.add("text-black-50");
    document.getElementById("digits").classList.add("text-black")
    const elements = document.querySelectorAll('button')
    elements.forEach((element) => {
        element.classList.add('text-black')
        element.classList.add('bg-button-key')
    });

})


// All buttons
let n1 = "";
let n2 = "";
let operator = "";
let digits = document.getElementById("digits")
let historic = document.getElementById("history")
function key(caract) {
    let keys = document.getElementById(caract); // get button
    let styles = window.getComputedStyle(keys, "::after");
    let buttonContent = styles.content;
    // console.log(buttonContent)
    let key = buttonContent.replace(/\D/g, '');
    console.log(`apenas antes ` + key)

    if (key >= 0 && key <= 9) {
        console.log(`apenas teste ` + key)

        if (n1 === 0) {
            digits.innerHTML = key
            n1 = key
        } else {
            if (key >= 0 && key <= 9) {
                console.log(`apenas teste ` + key)
                if (digits.innerHTML === "0") {
                    digits.innerHTML = key
                } else {
                    digits.innerHTML += key
                }
            }
        }
    }
}

document.getElementById("plusMinus").addEventListener('click', function () {
    number = digits.innerHTML;
    digits.innerHTML = number * (-1);
})

document.getElementById("return").addEventListener('click', function () {
    let number = digits.innerHTML;
    let remove = number.replace(/.$/, '')
    digits.innerHTML = remove
})

document.getElementById("percent").addEventListener('click', function () {
    n2 = digits.innerHTML;
    historic.innerHTML += n2 + `%`
    digits.innerHTML = (calculate(n1, operator, n2) / 100);
    n1 = 0;
})

document.getElementById("plus").addEventListener('click', function () {
    n1 = digits.innerHTML;
    historic.innerHTML = n1 + `<span> + </span>`
    operator = "plus"
    digits.innerHTML = "0"

})
document.getElementById("minus").addEventListener('click', function () {
    n1 = digits.innerHTML;
    historic.innerHTML = n1 + `<span> - </span>`
    operator = "minus"
    digits.innerHTML = "0"

})
document.getElementById("divider").addEventListener('click', function () {
    n1 = digits.innerHTML;
    historic.innerHTML = n1 + `<span> ÷ </span>`
    operator = "divider"
    digits.innerHTML = "0"

})
document.getElementById("eks").addEventListener('click', function () {
    n1 = digits.innerHTML;
    historic.innerHTML = n1 + `<span> x </span>`
    operator = "eks"
    digits.innerHTML = "0"

})

document.getElementById("equal").addEventListener("click", function () {
    n2 = digits.innerHTML;
    historic.innerHTML += n2
    digits.innerHTML = calculate(n1, operator, n2);
    n1 = 0;
})

document.getElementById("clear").addEventListener("click", function () {
    digits.innerHTML = "0"
})
function calculate(n1, operator, n2) {
    switch (operator) {
        case "plus":
            return parseFloat(n1) + parseFloat(n2);
            break;
        case "minus":
            return parseFloat(n1) - parseFloat(n2);
            break
        case "divider":
            return parseFloat(n1) / parseFloat(n2);
            break
        case "eks":
            return parseFloat(n1) * parseFloat(n2);
            break
        case "percent":
            return (parseFloat(n2) * parseFloat(n1))
        default:
            break;
    }
}