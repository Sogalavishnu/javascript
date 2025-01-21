const increaseb = document.getElementById("increasebtn");
const reset = document.getElementById("resetbtn");
const decrease = document.getElementById("decreasebtn");
const countlabel = document.getElementById("countlabel");

let count = 0;

document.getElementById("increasebtn").onclick = function(){
    count++;
    countlabel.textContent = count;
}

document.getElementById("resetbtn").onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

document.getElementById("decreasebtn").onclick = function(){
    count--;
    countlabel.textContent = count;
}
