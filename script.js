document.getElementById('set-date').addEventListener('click', function() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    if (!birthdate) {
        alert("Please enter a valid birthdate.");
        return;
    }

    let deathDate = new Date(birthdate);
    deathDate.setFullYear(deathDate.getFullYear() + 80); // Assume average life expectancy is 80 years

    // Hide the input form and show the countdown
    document.getElementById('user-info').style.display = 'none';
    document.getElementById('countdown-display').style.display = 'block';

    // Create blood drip effects
    setInterval(function() {
        let blood = document.createElement('div');
        blood.classList.add('blood');

        // Set random horizontal position
        blood.style.left = `${Math.random() * 100}vw`; // Random position from 0% to 100% of the viewport width

        // Set random animation delay to make the effect look more natural
        let delay = Math.random() * 2; // Delay between 0 and 2 seconds
        blood.style.animationDelay = `${delay}s`;

        document.body.appendChild(blood);

        // Set a timeout to remove blood element after 2 seconds
        setTimeout(function() {
            blood.remove();
        },3000);
    }, 200); // New blood appears every 500ms

    // Update countdown every second
    let countdown = document.getElementById('countdown');
    setInterval(function() {
        let now = new Date();
        let timeDiff = deathDate - now;
        
        if (timeDiff <= 0) {
            countdown.textContent = "The End... Time's Up!";
            countdown.style.color = "#ff0000";
            clearInterval();
            return;
        }

        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Add a shaking effect for the countdown when it's near the end
        if (timeDiff <= 60000) { // 1 minute or less
            countdown.classList.add('shake');
        }
    }, 1000);
});
