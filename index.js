
let keyboard = document.getElementById("keyboard");
let buttonArray = ["clear", "plusMinus", "percent", "divider", "seven", "eight", "nine", "eks", "four", "five", "six", "minus", "one", "two", "three", "plus", "return", "zero", "point", "equal"];
for (let i = 0; i < buttonArray.length; i++) {
    keyboard.innerHTML +=
        `
    <button class="color-button-keyboard btn rounded rounded-3 text-white ${buttonArray[i]}" id="${buttonArray[i]}" onclick=key("${buttonArray[i]}")></button>
    `
}
// All buttons
let n1 = "";
let n2 = "";
let operator = "";
let digits = document.getElementById("digits")
let historic = document.getElementById("history")
function key(caract) {
    let keys = document.getElementById(caract); // get button
    let styles = window.getComputedStyle(keys, "::after");
    let  buttonContent = styles.content;
    // console.log(buttonContent)
    let key = buttonContent.replace(/\D/g, '');
    console.log(`apenas antes ` + key)

    if (key >= 0 && key <=9) {
        console.log(`apenas teste ` + key)
        if(digits.innerHTML === "0"){
           digits.innerHTML = key
        }else{
           digits.innerHTML += key
        }
    }    
}
document.getElementById("dark").addEventListener('click', function () {
    document.getElementById("brightness").classList.remove("text-white");
    document.getElementById("brightness").classList.add("text-white-50");
    document.getElementById("dark").classList.add("text-white")
    document.getElementById("dark").classList.remove("text-white-50")

})
document.getElementById("brightness").addEventListener('click', function () {
    // document.getElementById("dark").classList.remove("text-white");
    // document.getElementById("dark").classList.add("text-white-50");
    // document.getElementById("brightness").classList.add("text-white")
    // document.getElementById("brightness").classList.remove("text-white-50")

    // document.getElementById("calc").classList.add("bg-calc-bright")
    // document.getElementById("calc").classList.remove("color-calc")
    // document.getElementById("keyboard").classList.add("bg-button-bright");
    // document.getElementById("keyboard").classList.remove("color-keyboard");

    // document.getElementById("buttonTheme").classList.add("bg-button-bright");
    // document.getElementById("buttonTheme").classList.remove("bg-calc-dark");

    // remove styles
    document.getElementById("dark").classList.remove("text-white");

    document.getElementById("brightness").classList.remove("text-white-50")
    document.getElementById("calc").classList.remove("color-calc");
    document.getElementById("keyboard").classList.remove("color-keyboard")
    document.getElementById("buttonTheme").classList.remove("color-button-theme")
    document.getElementById("buttonTheme").classList.remove("text-black")

    
    const el = document.querySelectorAll('button')
    el.forEach((element) => {
        element.classList.remove('color-button-keyboard');
        element.classList.remove('text-white')
    });

    // Add Styles
    document.getElementById("calc").classList.add("bg-calc-bright");
    document.getElementById("keyboard").classList.add("bg-button-bright");
    document.getElementById("buttonTheme").classList.add("bg-button-bright");


    const elements = document.querySelectorAll('button')
    elements.forEach((element) => {
        element.classList.add('text-black')
        element.classList.add('bg-button-key')
    });
    
})

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
    historic.innerHTML += n2  + `%`
    digits.innerHTML = (calculate(n1, operator, n2)/100);
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
            return (parseFloat(n2)*parseFloat(n1))
        default:
            break;
    }
}