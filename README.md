# Weather App

A responsive weather application built with HTML, CSS, Bootstrap 5, and vanilla JavaScript that fetches real-time weather data from the OpenWeather API.

## 🌟 Features

- **City Search**: Search for weather information in any city worldwide
- **Real-time Data**: Fetches current weather conditions from OpenWeather API
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient backgrounds with smooth animations
- **Weather Details**: Displays temperature, humidity, wind speed, and "feels like" temperature
- **Dynamic Icons**: Weather icons that change based on current conditions
- **Error Handling**: User-friendly error messages for invalid cities or API issues
- **Loading States**: Elegant loading spinner while fetching data
- **Keyboard Support**: Press Enter to search (no need to click the button)

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and transitions
- **Bootstrap 5**: Responsive grid system and components
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **OpenWeather API**: Real-time weather data

## 📁 Project Structure

```
WeatherApp/
├── index.html          # Main HTML file with Bootstrap layout
├── style.css           # Custom CSS with responsive design
├── script.js           # JavaScript functionality and API integration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### 1. Get OpenWeather API Key

1. Visit [OpenWeather](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to API Keys section
4. Copy your API key

### 2. Configure the App

1. Open `script.js`
2. Replace `YOUR_API_KEY` with your actual OpenWeather API key:

```javascript
const API_KEY = 'your_actual_api_key_here';
```

### 3. Run the App

Simply open `index.html` in your web browser. No build process required!

## 📱 Usage

1. **Enter a City Name**: Type any city name in the search field
2. **Press Enter or Click Search**: Either press the Enter key or click the Search button
3. **View Weather Data**: See the current weather conditions displayed beautifully
4. **Search Another City**: The input field clears automatically for easy searching

## 🎨 UI Components

### Search Section
- Large, responsive input field with modern styling
- Animated search button with hover effects
- Placeholder suggestions on focus

### Weather Display
- **City Name**: Shows city and country
- **Temperature**: Large, prominent temperature display
- **Weather Icon**: Dynamic weather icons from OpenWeather
- **Description**: Weather condition description (e.g., "partly cloudy")
- **Details Grid**: Humidity, wind speed, and "feels like" temperature

### Error Handling
- User-friendly error messages
- Different messages for different error types
- API key validation

## 🌐 API Integration

The app uses the OpenWeather API with the following endpoint:
```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

**Response Data Used:**
- City name and country
- Temperature (Celsius)
- Weather description and icon code
- Humidity percentage
- Wind speed (m/s)
- "Feels like" temperature

## 📱 Responsive Design

- **Desktop**: Full-width card with optimal spacing
- **Tablet**: Adjusted font sizes and spacing
- **Mobile**: Single-column layout with touch-friendly elements
- **Small Screens**: Optimized for devices below 400px width

## ✨ Animations & Effects

- **Card Hover**: Subtle lift effect on hover
- **Button Interactions**: Smooth transitions and hover states
- **Loading Spinner**: Professional loading animation
- **Weather Display**: Fade-in animation when data loads
- **Weather Icon**: Gentle floating animation
- **Input Focus**: Smooth border color transitions

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2c3e50;
    --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding More Weather Details
Extend the `displayWeather()` function in `script.js` and add corresponding HTML elements.

### Changing Units
Modify the API URL in `fetchWeatherData()`:
- `units=metric` for Celsius
- `units=imperial` for Fahrenheit
- `units=standard` for Kelvin

## 🐛 Troubleshooting

### Common Issues

1. **"City not found" Error**
   - Check city name spelling
   - Try major cities (London, New York, Tokyo)

2. **"Invalid API key" Error**
   - Verify your API key is correctly set in `script.js`
   - Ensure your API key is active on OpenWeather

3. **No Data Displaying**
   - Check browser console for errors
   - Verify internet connection
   - Ensure API key has sufficient quota

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section above
2. Verify your API key is correctly configured
3. Test with major cities to ensure API connectivity

---

**Happy Weather Checking! 🌤️**
