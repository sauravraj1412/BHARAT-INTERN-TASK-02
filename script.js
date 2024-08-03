const apiKey = '36f64c135374460a6caacb2e1e5dcd35';

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('citySelect').value;
    fetchWeather(city);
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('error').textContent = error.message;
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${icon}" alt="${description}">
        <p>${temperature}°C</p>
        <p>${description}</p>
    `;
    document.getElementById('error').textContent = '';
}
