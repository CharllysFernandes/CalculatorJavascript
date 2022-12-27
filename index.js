
let sign = "";
let keyboard = document.getElementById("keyboard");
let buttonArray = ["AC", "+/-", "%","÷",7,8,9,"x",4,5,6,"—",1,2,3,"+","?",0,".","="];
for (let i = 0; i < buttonArray.length; i++) {
    keyboard.innerHTML +=
    `
    <button class="color-button-keyboard btn rounded rounded-3 text-white " id="${buttonArray[i]}">${buttonArray[i]}</button>
    `   
}
const digits = document.getElementById("digits");
let firstValue = true;

function clear() {
    digits.innerHTML = ""
}

let button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
    
    button[i].onclick = function () {
        if (firstValue) {
            clear();
            firstValue = false;
            if (this.id >= 0 && this.id <= 9) {
                digit = this.id
                digits.innerHTML = digit;
                console.log(this.id)
               }
        }else{
            if (this.id >= 0 && this.id <= 9) {
                digit = this.id
                digits.innerHTML += digit;
                console.log(this.id)
            }
        }
    }
}

document.getElementById("+").addEventListener('click', function () {
    sign = "+"
    console.log(sign)
})
