const inputnum = document.getElementById("inputnum");
const tofarenheit = document.getElementById("tofarenheit");
const tocelcius = document.getElementById("tocelcius");
const result = document.getElementById("result");

let temp;

function convert(){
    if(tofarenheit.checked){
        temp = Number(inputnum.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°f" ;
    }
    else if(tocelcius.checked){
        temp = Number(inputnum.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°c";
    }
    else{
        result.textContent = "Please select a unit";
    }
}
