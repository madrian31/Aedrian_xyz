// DateAndTime.js - Optimized version

function fetchPhilippineTime() {
    fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Manila')
    .then(response => response.json())
    .then(data => {
        // Store data globally for other scripts to use
        window.currentTimeData = {
            data: data,
            timestamp: Date.now()
        };
        
        updateDateTimeDisplay(data);
    })
    .catch(error => {
        console.error("Error fetching PH time:", error);
    });
}

function updateDateTimeDisplay(data) {
    const dateElement = document.getElementById("getCurrentDate");
    if (!dateElement) return;

    // Extract date/time fields from API
    var year = data.year;
    var month = String(data.month).padStart(2, '0');
    var day = String(data.day).padStart(2, '0');
    var hour = String(data.hour).padStart(2, '0');
    var minutes = String(data.minute).padStart(2, '0');
    var seconds = String(data.seconds).padStart(2, '0');

    // Edit date and time for debugging (uncomment to test)
    // year = "2099";
    // month = "12";
    // day = "25";
    // hour = "11";
    // minutes = "30";
    // seconds = "00";

    var ampm = hour >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    var hour12 = hour % 12;
    hour12 = hour12 ? hour12 : 12;
    hour12 = hour12 < 10 ? "0" + hour12 : hour12;

    // Format final output
    var customDate = year + "/" + month + "/" + day;
    var customTime = hour12 + ":" + minutes + ":" + seconds + " " + ampm;

    // Update the display
    dateElement.innerHTML = 
        "Current Date: " + customDate + " | Current Time: " + customTime;
}

// Run every second
setInterval(fetchPhilippineTime, 1000);