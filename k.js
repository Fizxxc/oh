// Set the date for the "Kiamat" event (example: Dec 31, 2025 23:59:59)
const kiamatDate = new Date("December 31, 2155 23:59:59").getTime();

function updateCountdown() {
    let now = new Date().getTime();
    let timeDiff = kiamatDate - now;

    if (timeDiff <= 0) {
        document.getElementById("countdown").innerHTML = "Kiamat Telah Tiba!";
        document.body.style.backgroundColor = "#660000"; // Dark red background on doomsday
        clearInterval(countdownInterval); // Stop the countdown
        return;
    }

    // Calculate days, hours, minutes, and seconds left
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display countdown
    document.getElementById("days").textContent = `${days}d`;
    document.getElementById("hours").textContent = `${hours}h`;
    document.getElementById("minutes").textContent = `${minutes}m`;
    document.getElementById("seconds").textContent = `${seconds}s`;

    // Make the countdown shake when it's very close to the end
    if (timeDiff <= 3600000) { // If less than 1 hour remaining
        document.getElementById("countdown").classList.add("shake");
    }
}

// Update the countdown every second
let countdownInterval = setInterval(updateCountdown, 1000);

// Initial update to display countdown immediately
updateCountdown();
