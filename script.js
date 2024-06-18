const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');
let value = document.getElementById('value');

let currentValue = 0;

//initialize value as 0
window.addEventListener('DOMContentLoaded',()=>value.innerHTML=currentValue);

plus.addEventListener('click', ()=>{
    currentValue++
    value.innerHTML = currentValue;
    changeColor()
});
minus.addEventListener('click', ()=>{
    currentValue--
    value.innerHTML = currentValue;
    changeColor()
});
reset.addEventListener('click', ()=>{
    currentValue = 0;
    value.innerHTML = currentValue;
    changeColor()
});

function changeColor(){
    if (currentValue<0) {
        value.style.color = "#D27B4B"
    } else if (currentValue>0) {
        value.style.color = "#76ABAE"
    } else {
        value.style.color = "#EEEEEE"
    }
}

