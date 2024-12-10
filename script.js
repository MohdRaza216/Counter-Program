const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset = document.getElementById("reset");
const toggle = document.getElementById("toggle");
const random = document.getElementById("random");
const counter = document.getElementById("counter");
let count = 0;
let isToggled = false;

increment.onclick = function() {
    const currentValue = parseInt(counter.textContent) || 0;
    counter.textContent = currentValue + 1;
}

decrement.onclick = function() {
    const currentValue = parseInt(counter.textContent) || 0;
    counter.textContent = currentValue - 1;
}

reset.onclick = function() {
    count = 0;
    counter.textContent = count;
}

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

random.onclick = function() {
    count = Math.floor((Math.random() * 100) + 1);
    counter.textContent = count;
}
