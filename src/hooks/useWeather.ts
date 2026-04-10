import { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByCoords,
} from "../services/weatherService";
import type { WeatherData } from "../types/weather.type";

interface Error {
  message: string;
}

export const useWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchWeather = async () => {
    if (!city) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherByCity(city);

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
      setError({ message: "Geolocation is not supported by your browser" });
      return;
    }
    setLoading(true);
    setWeather(null);
    setError(null);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const data = await getWeatherByCoords(latitude, longitude);
        console.log(data);

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
  return {
    city,
    setCity,
    weather,
    loading,
    error,
    fetchWeather,
    getCurrentLocationWeather,
  };
};
