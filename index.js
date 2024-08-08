const label = document.getElementById("labelnumber");
const decrease1 = document.getElementById("decrease");
const reset1 = document.getElementById("reset");
const increase1 = document.getElementById("increase");

let count = 0;

increase1.onclick = function(){
    count++;
    label.textContent = count;
}
decrease1.onclick = function(){
    count--;
    label.textContent = count;
}
reset1.onclick = function(){
    count = 0;
    label.textContent = count;
}