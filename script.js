// Get current year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Get last modified date
const lastModified = new Date(document.lastModified);
document.getElementById("last-modified").textContent = lastModified.toLocaleString();

// Calculate wind chill
const temperature = 50; // °F
const windSpeed = 5; // mph

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature