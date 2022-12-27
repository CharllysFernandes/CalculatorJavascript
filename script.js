// show button theme
const calc = document.getElementById("calc");

calc.innerHTML =
    `
    <button class="btn rounded rounded-4 text-white w-auto color-button-theme m-4">
    <i class="bi bi-brightness-high m-2" id="brightness"></i>
    <i class="bi bi-moon m-2" id="dark"></i>
    </button>
`
document.getElementById("brightness").addEventListener("click", function () {
    console.log("modo Claro");
})

document.getElementById("dark").addEventListener("click", function () {
    console.log("dark")
})

// show display digits
calc.innerHTML += 
    `
    <div class="p-4 h-25 text-end" id="display"></div>    
    `
// history
const calcDisplay = document.getElementById("display");

calcDisplay.innerHTML += 
    `
    <h2 class="fs-6 text-white-50 h-auto" id="history"></h2>

    `

// result
calcDisplay.innerHTML += 
`
<h1 class="fs-3 text-white h-auto" id="digits"></h1>
`

// Show Keyboard Calc
calc.innerHTML +=
`
<div class="color-keyboard rounded rounded-5 p-4 d-flex flex-wrap row-cols-5 gap-2 justify-content-center" id="keyboard"></div>
`
// show button keyboard
let keyboard = document.getElementById("keyboard");
let buttonArray = ["AC", "+/-", "%","/",7,8,9,"x",4,5,6,"-",1,2,3,"+","?",0,".","="];

for (let i = 0; i < buttonArray.length; i++) {
    keyboard.innerHTML +=
    `
    <button class="color-button-keyboard btn rounded rounded-3 text-success" id="${buttonArray[i]}">${buttonArray[i]}</button>
    `
    
}

function clearDisplay(id) {
    document.getElementById("digits").innerHTML = `${id}`
}

let button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
    const digits = document.getElementById("digits");
    button[i].onclick = function () {
       if (this.id >= 0 && this.id <= 9) {
        digit = this.id
       digits.innerHTML += digit;
       }
    }
}
const digits = document.getElementById("digits").innerText;
document.getElementById("AC").addEventListener("click", function () {
    console.log("limpar")
   clearDisplay()
})

const history = document.getElementById("history")
document.getElementById("+").addEventListener("click", function () {
    const number = document.getElementById("digits").innerText;
    console.log(digits)
    history.innerHTML = number + " + "
    clearDisplay("")
})

document.getElementById("=").addEventListener("click", function name(params) {
    
})