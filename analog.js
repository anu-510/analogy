const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90; // Start from 90 degrees
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90 + ((minutes / 60) * 30);

    secondHand.style.transform = rotate($,{secondsDegrees},deg);
    minuteHand.style.transform = rotate($,{minutesDegrees},deg);
    hourHand.style.transform = rotate($,{hoursDegrees},deg);
}

setInterval(setClock, 1000); // Update every second

setClock(); // Set initial clock