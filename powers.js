// Variables declared for power buttons
const flight = document.getElementById("flight")
const mindReading = document.getElementById("mindreading")
const xray = document.getElementById("xray")
const allPowersEl = document.querySelectorAll(".power")

// Functions to activate and deactivate powers for specific buttons
const flightHandlerFunction = () => {
    flight.classList.toggle("disabled")
    flight.classList.toggle("enabled")
}

const mindReadingFunction = () => {
    mindReading.classList.toggle("enabled")
    mindReading.classList.toggle("disabled")
}

const xrayFunction = () => {
    xray.classList.toggle("enabled")
    xray.classList.toggle("disabled")
}

const enableAllPowers = () => {
    for (const power of allPowersEl) {
        power.classList.add("enabled")
        power.classList.remove("disabled")
    }
}

const disableAllPowers = () => {
    // Trying different ways to iterate over data - I like the 'for of' method more
    allPowersEl.forEach(power => {
        power.classList.add("disabled")
        power.classList.remove("enabled")
    });
}

// Accessing DOM elements and handling click events for the buttons
document.getElementById("activate-flight").addEventListener("click", flightHandlerFunction)
document.getElementById("activate-mindreading").addEventListener("click", mindReadingFunction)
document.getElementById("activate-xray").addEventListener("click", xrayFunction)
document.querySelector("#activate-all").addEventListener("click", enableAllPowers)
document.querySelector("#deactivate-all").addEventListener("click", disableAllPowers)