const apiKey = "106eb7dcb7c56d1890c31cf7c0f4e48f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const weatherBtn = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
    
    if (!response.ok) {
        alert("City not found! Please enter a valid city name.");
        return;
    }
    
    var data = await response.json();
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main === "Clear") {
       weatherBtn.src="clear1.png";
    }
    else if (data.weather[0].main === "Rain") {
        weatherBtn.src="rain.png";
    }
    else if (data.weather[0].main === "Snow") {
        weatherBtn.src="snowfall.png";
    }
    else if (data.weather[0].main === "Clouds") {
        weatherBtn.src="cloud.png";
    }
}

// Listen for "Enter" key press in input field
searchBox.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
