const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const toggle = document.getElementById("toggle");
const random = document.getElementById("random");
const counter = document.getElementById("counter");

let count = 0;
let isToggled = false;
let previousValue = 0; 

// Increment the counter
increment.onclick = function() {
    const currentValue = parseInt(counter.textContent) || 0;
    counter.textContent = currentValue + 1;
};

// Decrement the counter
decrement.onclick = function() {
    const currentValue = parseInt(counter.textContent) || 0;
    counter.textContent = currentValue - 1;
};

// Reset the counter
reset.onclick = function() {
    count = 0;
    counter.textContent = count;
};

// Toggle the counter between cleared and saved values
toggle.onclick = function () {
    if (isToggled) {
        counter.textContent = previousValue;
    } else {
        const currentValue = parseInt(counter.textContent);
        if (!isNaN(currentValue)) {
            previousValue = currentValue; 
        }
        counter.textContent = "\u00A0"; 
    }
    isToggled = !isToggled; 
};

// Generate a random number between 1 and 100
random.onclick = function() {
    count = Math.floor((Math.random() * 100) + 1);
    counter.textContent = count;
};
