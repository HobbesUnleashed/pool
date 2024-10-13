//Set the timer id to a variable
const timer = document.getElementById("timer");
//startPause button
const startPauseBtn = document.getElementById("startPause");
// Initialize the countdown time in seconds
let timeLeft = 44;
// Variable to store the interval ID
let countdown;
// Flag to check if the timer is running
let isRunning = false;
// Flag to check if the add time button has been used
var yellowExtUsed = false;
// Flag to check if the add time button has been used
var redExtUsed = false;
// Flag to check if dark mode already active
let dark = false;

function startPause(reset = false) {
    if (reset) {
        clearInterval(countdown);
        timeLeft = 45;  // Resetting timeLeft to 45 seconds
        timer.innerHTML = timeLeft;
        startPauseBtn.innerHTML = "Start";
        isRunning = false;
        return;
    }
    if (!isRunning) {
        countdown = setInterval(function() {
            timer.innerHTML = timeLeft;
            timeLeft--;

            if (timeLeft < 5) {
                timer.style.color = "red";
            }

            if (timeLeft < 0) {
                clearInterval(countdown);
                timer.innerHTML = "X";
            }
        }, 1000);
        startPauseBtn.innerHTML = "Pause";
    } else {
        clearInterval(countdown);
        startPauseBtn.innerHTML = "Resume"
    }

    isRunning = !isRunning;
}


function addTime(buttonPressed) {
    if(buttonPressed == "red") {
        timeLeft += 15;
        timer.innerHTML = timeLeft;
        this.redExtUsed =true
        console.log(this.redExtUsed);
    } else {
        timeLeft += 15;
        timer.innerHTML = timeLeft;
        this.yellowExtUsed = true;
        console.log(this.yellowExtUsed);
    }
    document.getElementById('ared').disabled = true;
    document.getElementById('ayellow').disabled = true;
}

function showDisabled() {
    if(this.redExtUsed) {
        console.log('red');
        document.getElementById("ayellow").disabled = false;

    } else if (this.yellowExtUsed) {
        console.log("yellow");
        document.getElementById("ared").disabled = false;
    }
    startPause();
}


// Add an event listener for the color mode
document.getElementById("modeBtn").addEventListener("click", function() {
    if (!dark) {
        // Set the attributes to be changed to variables
        document.querySelector('img[name="primaryLogo"]').src="assets/images/wo-glasses.svg";
        document.querySelector('img[name="secondaryLogo"]').src="assets/images/Cousins-logo.webp";
        document.body.style.backgroundImage = "url(assets/images/Cousins.webp"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.getElementById("header").style.backgroundImage = "linear-gradient(135deg, green, blue)";
        dark=true;
        this.innerHTML = `Dark mode`
    } else {
        document.querySelector('img[name="primaryLogo"]').src="assets/images/wo-glasses-bw.svg";
        document.querySelector('img[name="secondaryLogo"]').src="assets/images/Cousins-logo-bw.webp";
        document.body.style.backgroundImage = "url(assets/images/Cousins-bw.webp"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundSize = "cover";
        document.getElementById("header").style.backgroundImage = "linear-gradient(135deg, black, darkgrey)";
        dark=false;
        this.innerHTML = `Colour mode`
    }
});