export interface WeatherData {
  location: Location;
  current: Current;
  forecast: Forecast;
}

// ---------- Location ----------
export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

// ---------- Current ----------
export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_kph: number;
  humidity: number;
  feelslike_c: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}
// ---------- Day ----------
export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  condition: Condition;
}

// ---------- Astro ----------
export interface Astro {
  sunrise: string;
  sunset: string;
}

// ---------- Hour ----------
export interface Hour {
  time: string;
  temp_c: number;
  condition: Condition;
}

// ---------- Condition ----------
export interface Condition {
  text: string;
  icon: string;
}
