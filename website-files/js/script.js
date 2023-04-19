const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherDisplay = document.getElementById('weatherDisplay');

weatherForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = cityInput.value;
    const weather = await getWeather(city);
    weatherDisplay.textContent = `Weather in ${city}: ${weather}`;
});

async function getWeather(city) {
    // Simulate a weather API call
    return 'Sunny, 25°C';
}
