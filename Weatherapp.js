


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "64122d67a362eeb816de3ee3c19dfad8";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error("Error In fetching weather Data",error);
            displayError(error.message);
        }
    }
    else{
        displayError("Please Enter a correct city name");
    }

});

async function getWeatherData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("City Not Found");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city, main: {temp, humidity}, weather : [{description, id}]} =data;

    card.textContent = "";  
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const decsDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `Temp: ${(temp - 273.15).toFixed(2)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    decsDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);
    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    decsDisplay.classList.add("decsDisplay");
    weatherEmoji.classList.add('weatherEmoji');
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(decsDisplay);
    card.appendChild(weatherEmoji);

    
}

function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "🌧️";
        case (weatherId >= 300 && weatherId < 400): 
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "☀️";

    }
}

function displayError(message){
    const displayError = document.createElement("p");
    displayError.textContent = message;
    displayError.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(displayError);
}