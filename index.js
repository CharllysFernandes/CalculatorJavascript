
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
        default:
            break;
    }
}