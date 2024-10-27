class WeatherApp{
    constructor() {
        this.apiKey = document.getElementById('apiKeyInput').value;
        this.cityInput = document.getElementById('cityInput');
        this.getWeatherBtn = document.getElementById('getWeatherBtn');
        this.getLocationBtn = document.getElementById('getLocationBtn');

        this.weatherCard = document.getElementById('weatherCard');
        this.cityName = document.getElementById('cityName');
        this.temperature = document.getElementById('temperature');
        this.description = document.getElementById('description');
        this.humidity = document.getElementById('humidity');
        this.windSpeed = document.getElementById('windSpeed');
        this.weatherIcon = document.getElementById('weatherIcon');

        this.getWeatherBtn.addEventListener('click', () => this.getWeather());
        this.getLocationBtn.addEventListener('click', () => this.getWeatherByLocation());
}

async getWeather() {
    const city = this.cityInput.value;
    if (!city) return alert('Please enter a city name.');

    const data = await this.fetchWeatherData(`q=${city}`);
    data ? this.displayWeather(data) : alert('City not found. Please try again.');
}

async getWeatherByLocation() {
    if (!navigator.geolocation) return alert('Geolocation is not supported by this browser.');

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const data = await this.fetchWeatherData(`lat=${coords.latitude}&lon=${coords.longitude}`);
        data ? this.displayWeather(data) : alert('Unable to retrieve weather data for your location.');
    }, () => alert('Unable to retrieve your location. Please allow location access.'));
}

async fetchWeatherData(query) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&appid=${this.apiKey}&units=metric`);
        return response.ok ? response.json() : null;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
}
}