//checked : is checks that whether the checkbox or the radiobox aree checked or not.

// const checkbox = document.getElementById("checkbox");
const mysub = document.getElementById("mysub");
const myvisa = document.getElementById("myvisa");
const mymaster = document.getElementById("mymaster");
const myupi = document.getElementById("myupi");
const mysubmit = document.getElementById("mysubmit");
const subpara = document.getElementById("subpara");
const paymentpara = document.getElementById("paymentpara");

mysubmit.onclick = function(){

    if(mysub.checked){
        subpara.textContent = `You are subscribed`;
    }
    else{
        subpara.textContent = `You are not subscribed`;
    }

    if(myvisa.checked){
        paymentpara.textContent = `you are paying through visa`;
    }
    else if(mymaster.checked){
        paymentpara.textContent = `you are paymenting through mastercard`;
    }
    else if(myupi.checked){
        paymentpara.textContent = `you are paymenting through upi`;
    }
    else{
        paymentpara.textContent = `you most have to select any payment pass through`;
    }

}

