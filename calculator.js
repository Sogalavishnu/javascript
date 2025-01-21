// CALCULATOR PROGRAM!

const inputs = document.getElementById("inputs");

function appendToDisplay(input){
    inputs.value += input;
}

function clearDisplay(){
    inputs.value = "";
}

function calculate(){
    try{
    inputs.value = eval(inputs.value);
    }
    catch(error){
        inputs.value = "Error";
    }
}