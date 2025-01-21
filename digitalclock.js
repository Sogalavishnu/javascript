// DIGITAL CLOCK PROGRAMM!

function updateclock(){
    
    const present = new Date();
    let hours = present.getHours();
    const meridiem = hours > 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = present.getMinutes().toString().padStart(2, '0');
    const seconds = present.getSeconds().toString().padStart(2, '0');
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;
}

updateclock();
setInterval(updateclock);