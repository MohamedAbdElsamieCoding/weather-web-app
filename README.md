# Weather App

A modern, responsive weather application built with React, TypeScript, and Vite. Get real-time weather information and 3-day forecasts for any city or your current location.

## Features

- **City Search**: Enter any city name to get current weather and forecast
- **Current Location**: Automatically detect and display weather for your location
- **3-Day Forecast**: View weather predictions for the next three days
- **Responsive Design**: Optimized for desktop and mobile devices
- **Loading States**: Smooth loading animations with skeleton UI
- **Error Handling**: User-friendly error messages for failed requests

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **API**: WeatherAPI.com
- **Icons**: Weather condition icons from WeatherAPI

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- WeatherAPI account and API key

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your WeatherAPI key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Search by City**: Type a city name in the input field and click "Get Weather"
- **Current Location**: Click "Get Current Location" to use your device's geolocation
- **View Forecast**: Scroll down to see the 3-day weather forecast

## Project Structure

```
src/
├── components/
│   └── loadingSkeleton.tsx    # Loading animation component
├── hooks/
│   └── useWeather.ts          # Custom hook for weather data management
├── services/
│   └── weatherService.ts      # API service for WeatherAPI integration
├── types/
│   └── weather.type.ts        # TypeScript interfaces for weather data
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── App.css                    # Global styles
```

## API Reference

This app uses [WeatherAPI](https://www.weatherapi.com/) for weather data. The API provides:

- Current weather conditions
- 3-day weather forecast
- Location information
- Weather icons

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.dev/)
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
