// Get the current year
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

// Get the last modified date
const lastModified = new Date(document.lastModified);
document.getElementById("last-modified").textContent = lastModified.toLocaleString();

// Calculate the wind chill
const temperature = 22; 
const windSpeed = 15; 

function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula (metric)
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").textContent = windChill.toFixed(2) + "°C";
} else {
    document.getElementById("wind-chill").textContent = "N/A";
}