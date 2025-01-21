// DICE ROLLER PROGRAM

function rolldice(){
    const numofdice = document.getElementById("numofdice").value;
    const result = document.getElementById("result");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i = 0;i< numofdice;i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" width="150px" height="150px" >`); //pushing the images of the dice by the html.
    }

    result.textContent = `dice: ${values.join(`, `)}`;
    diceimages.innerHTML = images.join(``); // joinning them by the inner html directly to the page..
    
}