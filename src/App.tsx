import { useState } from "react";
import "./App.css";

function App() {
  interface WeatherData {
    location: {
      name: string;
      country: string;
    };
    current: {
      temp_c: number;
      temp_f: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }

  interface Error {
    message: string;
  }

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async () => {
    if (!city) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
      );
      if (!res.ok) {
        setError({ message: "City not found or API error" });
        setWeather(null);
        setLoading(false);
        return;
      }
      const data = await res.json();
      console.log(data);

      setWeather(data);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setError({ message: error.message });
        setWeather(null);
      } else {
        setError({ message: "An unexpected error occurred" });
      }
      setLoading(false);
    }
  };

  const getCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
      setError({ message: "GeoLocation is not supported by your browser" });
    }
    setLoading(false);
    setWeather(null);
    setError(null);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`,
        );
        if (!res.ok) {
          setError({ message: "City not found or API error" });
          setWeather(null);
          setLoading(false);
          return;
        }

        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError({ message: err.message });
        } else {
          setError({ message: "An unexpected error occurred" });
        }
        setLoading(false);
      }
    });
  };
  return (
    <>
      <section>
        <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 font-sans">
          <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg text-gray-100">
            <h1 className="text-center font-bold mb-6 text-3xl">Weather App</h1>

            <div>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter your city name"
                  onChange={(e) => setCity(e.target.value)}
                  className="grow p-2 rounded-l-md border border-gray-700 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-0"
                />

                <button
                  onClick={fetchWeather}
                  disabled={loading}
                  className="px-4 bg-blue-400 rounded-r-md hover:bg-blue-700 disabled:opacity-50 text-white cursor-pointer"
                >
                  {loading ? "Loading" : "Get Weather"}
                </button>
              </div>
              <button
                onClick={getCurrentLocationWeather}
                disabled={loading}
                className="w-full py-2 mb-6 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white rounded-md cursor-pointer"
              >
                {loading ? "Loading" : "Get Current Location"}
              </button>

              {error && (
                <p className="text-red-900 font-bold text-4xl">
                  {error.message}
                </p>
              )}
            </div>
            {weather && !error && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">
                  {weather.location.name}, {weather.location.country}
                </h2>
                <p>
                  <img
                    src={weather.current.condition.icon}
                    alt={weather.current.condition.text}
                    className="inline-block"
                  />
                  {weather.current.condition.text}
                </p>
                <p className="mt-2 font-bold">
                  Temp:{" "}
                  <span className="font-medium">{weather.current.temp_c}</span>C
                  /{" "}
                  <span className="font-medium">{weather.current.temp_f}</span>F
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
