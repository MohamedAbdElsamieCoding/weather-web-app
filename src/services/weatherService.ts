const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherByCity = async (city: string) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3`,
  );
  if (!res.ok) {
    throw new Error("City not found");
  }
  return res.json();
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=3`,
  );
  if (!res.ok) {
    throw new Error("Location error");
  }
  return res.json();
};
