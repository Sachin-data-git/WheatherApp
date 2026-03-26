// Weather App JavaScript

// OpenWeather API Key - Replace with your actual API key
const API_KEY = '8f7b0f5a62bded3d2357ccb3886e7b21'; // Replace with your actual API key from https://home.openweathermap.org/api_keys
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const weatherDisplay = document.getElementById('weatherDisplay');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const feelsLike = document.getElementById('feelsLike');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const cloudiness = document.getElementById('cloudiness');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const coordinates = document.getElementById('coordinates');
const tempRange = document.getElementById('tempRange');

// Event Listeners
searchBtn.addEventListener('click', searchWeather);
cityInput.addEventListener('keypress', handleKeyPress);

/**
 * Handle Enter key press in input field
 * @param {Event} event - Keyboard event
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
}

/**
 * Main function to search weather for a city
 */
async function searchWeather() {
    const city = cityInput.value.trim();
    
    // Validate input
    if (!city) {
        showError('Please enter a city Name');
        return;
    }

    // Show loading spinner
    showLoading();
    hideError();
    hideWeatherDisplay();

    try {
        // Fetch weather data from API
        const weatherData = await fetchWeatherData(city);
        
        // Display weather data
        displayWeather(weatherData);
        
    } catch (error) {
        handleApiError(error);
    }
}

/**
 * Fetch weather data from OpenWeather API
 * @param {string} city - City name to search for
 * @returns {Object} Weather data
 */
async function fetchWeatherData(city) {
    // Check if API key is set
    if (API_KEY === 'YOUR_API_KEY') {
        throw new Error('Please set your OpenWeather API key in script.js');
    }

    const url = `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
        } else if (response.status === 401) {
            throw new Error('Invalid API key. Please check your OpenWeather API key.');
        } else {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
    }
    
    const data = await response.json();
    return data;
}

/**
 * Display weather data on the page
 * @param {Object} data - Weather data from API
 */
function displayWeather(data) {
    // Update city name
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    
    // Update temperature
    temperature.textContent = Math.round(data.main.temp);
    
    // Update weather description
    weatherDescription.textContent = data.weather[0].description;
    
    // Update weather icon
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    
    // Update humidity
    humidity.textContent = `${data.main.humidity}%`;
    
    // Update wind speed
    windSpeed.textContent = `${data.wind.speed} m/s`;
    
    // Update feels like temperature
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    
    // Update pressure
    pressure.textContent = `${data.main.pressure} hPa`;
    
    // Update visibility (convert from meters to km)
    const visibilityKm = data.visibility ? (data.visibility / 1000).toFixed(1) : 'N/A';
    visibility.textContent = `${visibilityKm} km`;
    
    // Update cloudiness
    cloudiness.textContent = `${data.clouds.all}%`;
    
    // Update sunrise time
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    sunrise.textContent = formatTime(sunriseTime);
    
    // Update sunset time
    const sunsetTime = new Date(data.sys.sunset * 1000);
    sunset.textContent = formatTime(sunsetTime);
    
    // Update coordinates
    coordinates.textContent = `${data.coord.lat.toFixed(2)}, ${data.coord.lon.toFixed(2)}`;
    
    // Update temperature range
    const minTemp = Math.round(data.main.temp_min);
    const maxTemp = Math.round(data.main.temp_max);
    tempRange.textContent = `${minTemp}°C / ${maxTemp}°C`;
    
    // Hide loading and show weather display
    hideLoading();
    showWeatherDisplay();
    
    // Clear input field
    cityInput.value = '';
    
    // Add success animation
    animateWeatherDisplay();
}

/**
 * Handle API errors
 * @param {Error} error - Error object
 */
function handleApiError(error) {
    hideLoading();
    showError(error.message);
    console.error('Weather API Error:', error);
}

/**
 * Show loading spinner
 */
function showLoading() {
    loadingSpinner.style.display = 'block';
}

/**
 * Hide loading spinner
 */
function hideLoading() {
    loadingSpinner.style.display = 'none';
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorText.textContent = message;
    errorMessage.style.display = 'block';
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.style.display = 'none';
}

/**
 * Show weather display
 */
function showWeatherDisplay() {
    weatherDisplay.style.display = 'block';
}

/**
 * Hide weather display
 */
function hideWeatherDisplay() {
    weatherDisplay.style.display = 'none';
}

/**
 * Add animation to weather display
 */
function animateWeatherDisplay() {
    weatherDisplay.style.animation = 'none';
    weatherDisplay.offsetHeight; // Trigger reflow
    weatherDisplay.style.animation = 'fadeIn 0.5s ease-in';
}

/**
 * Format time to HH:MM format
 * @param {Date} date - Date object to format
 * @returns {string} Formatted time string
 */
function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
}

/**
 * Get weather icon URL
 * @param {string} iconCode - Weather icon code from API
 * @returns {string} Icon URL
 */
function getWeatherIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

/**
 * Format temperature
 * @param {number} temp - Temperature in Celsius
 * @returns {number} Rounded temperature
 */
function formatTemperature(temp) {
    return Math.round(temp);
}

/**
 * Capitalize first letter of each word
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

/**
 * Get weather background gradient based on weather condition
 * @param {string} condition - Weather condition
 * @returns {string} CSS gradient
 */
function getWeatherGradient(condition) {
    const gradients = {
        'clear': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'clouds': 'linear-gradient(135deg, #8e9eab 0%, #eef2f3 100%)',
        'rain': 'linear-gradient(135deg, #4b79a1 0%, #283e51 100%)',
        'snow': 'linear-gradient(135deg, #e6dada 0%, #274046 100%)',
        'thunderstorm': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        'drizzle': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
        'mist': 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
        'fog': 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)'
    };
    
    for (const [key, gradient] of Object.entries(gradients)) {
        if (condition.includes(key)) {
            return gradient;
        }
    }
    
    return gradients['clear']; // Default gradient
}

/**
 * Update page background based on weather
 * @param {string} condition - Weather condition
 */
function updateBackground(condition) {
    const gradient = getWeatherGradient(condition);
    document.body.style.background = gradient;
}

/**
 * Initialize the app
 */
function initApp() {
    // Focus on input field
    cityInput.focus();
    
    // Add placeholder animation
    cityInput.addEventListener('focus', () => {
        cityInput.placeholder = 'Try: London, New York, Tokyo...';
    });
    
    cityInput.addEventListener('blur', () => {
        cityInput.placeholder = 'Enter city name...';
    });
    
    console.log('Weather App initialized');
    console.log('Don\'t forget to set your OpenWeather API key in script.js!');
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Export functions for testing (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchWeatherData,
        displayWeather,
        formatTemperature,
        capitalizeWords,
        getWeatherGradient
    };
}
