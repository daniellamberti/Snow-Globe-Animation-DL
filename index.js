    // DOM elements:

const snowGlobe = document.querySelector('.snow-globe');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

// Global variables:

let snowflakeCount = 0;
let snowInterval;
let stopTimeout;

// Main function (creates snowflakes and snowman and nest all the logic):

function createSnowflake() {
    const snowflake = document.createElement("span");
    snowflake.classList.add("snowflake");

// insert some "snowman" each 25th

    if (snowflakeCount % 25 === 0) {
        snowflake.textContent = '☃️';
    } else {
        snowflake.textContent = '❄️';
    }

// Define snowflake layout and behavior:

    const randomX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 3 + 's';
    const size = Math.random() * 10 + 10 + 'px';

    snowflake.style.left = `${randomX}px`;
    snowflake.style.animationDuration = duration;
    snowflake.style.fontSize = size; // Between 10px and 20px
    snowflake.style.animationTimingFunction = 'linear';
    snowflake.style.animationIterationCount = 'infinite';

    snowGlobe.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);

    snowflakeCount++;
}

// Function to be assigned to "Start Snowing" inside add event listener:

function startSnowing() {

// add "shake" effect:

    snowGlobe.classList.add('shake');

// remove "shake" effect:

    setTimeout(() => {
    snowGlobe.classList.remove('shake');
  }, 500); //

    snowflakeCount = 0; // Reset snowflake count
    snowInterval = setInterval(createSnowflake, 70);

// Limit "snowing" up to 40 seconds:

    stopTimeout = setTimeout(stopSnowing, 40000);
}

// Function to be assigned to "Stop Snowing" inside add event listener:

function stopSnowing() {

// add "shake" effect:

    snowGlobe.classList.add('shake');

// remove "shake" effect:

    setTimeout(() => {
    snowGlobe.classList.remove('shake');
  }, 500); // 500ms is the duration of the shake animation

    clearInterval(snowInterval); // stop creating snowflakes
    clearTimeout(stopTimeout); // ends the cicle

}

// Start Snowing and Stop Snowing add event listener:

startBtn.addEventListener('click', startSnowing);
stopBtn.addEventListener('click', stopSnowing);
