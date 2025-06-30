// background.js - Fixed version
// Color scheme for 12-hour format with AM/PM
const timeColors = [
    { period: "AM", start: 12, end: 4, color: "#001F3F", label: "Late Night" },    // 12 AM - 4:59 AM
    { period: "AM", start: 5, end: 6, color: "#4B0082", label: "Before Sunrise" }, // 5 AM - 6:59 AM
    { period: "AM", start: 7, end: 11, color: "#87CEEB", label: "Morning" },       // 7 AM - 11:59 AM
    { period: "PM", start: 12, end: 12, color: "#FFD700", label: "Noon" },         // 12 PM
    { period: "PM", start: 1, end: 5, color: "#FFA500", label: "Afternoon" },      // 1 PM - 5:59 PM
    { period: "PM", start: 6, end: 11, color: "#00008B", label: "Evening" }        // 6 PM - 11:59 PM
];

function updateCircleWithData(data) {
    const circle = document.getElementById("circle");
    if (!circle) return;
    
    let hour = data.hour;
    let ampm = hour >= 12 ? "PM" : "AM";
    
    // Convert to 12-hour format
    let hour12 = hour % 12;
    hour12 = hour12 ? hour12 : 12;
    
    // Find matching color and label
    for (let i = 0; i < timeColors.length; i++) {
        const t = timeColors[i];
        if (t.period === ampm && hour12 >= t.start && hour12 <= t.end) {
            circle.style.backgroundColor = t.color;
            circle.innerText = t.label;
            break;
        }
    }
}

// Function to check if time data is available and update circle
function checkAndUpdateCircle() {
    if (window.currentTimeData && window.currentTimeData.data) {
        updateCircleWithData(window.currentTimeData.data);
    }
}

// Run every second - FIXED: tama na ang function name
setInterval(checkAndUpdateCircle, 1000);