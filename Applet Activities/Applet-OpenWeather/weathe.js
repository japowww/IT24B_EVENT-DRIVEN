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
}