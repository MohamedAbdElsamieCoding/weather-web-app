import "./App.css";
import LoadingSkeleton from "./components/loadingSkeleton";
import { useWeather } from "./hooks/useWeather";

function App() {
  const {
    city,
    setCity,
    weather,
    loading,
    error,
    fetchWeather,
    getCurrentLocationWeather,
  } = useWeather();
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
                  value={city}
                  placeholder="Enter your city name"
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1 p-2 rounded-l-md border border-gray-700 bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-0"
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
            {loading ? (
              <LoadingSkeleton />
            ) : (
              weather &&
              !error && (
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
                    <span className="font-medium">
                      {weather.current.temp_c}
                    </span>
                    C /{" "}
                    <span className="font-medium">
                      {weather.current.temp_f}
                    </span>
                    F
                  </p>
                  <div>
                    <h1 className="text-xl font-semibold mb-4 text-center">
                      3 Days forecast
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {weather.forecast.forecastday.map((day) => (
                        <div
                          key={day.date}
                          className="bg-gray-700 rounded-lg p-4 text-center flex flex-col items-center"
                        >
                          <p className="font-semibold mb-2">{day.date}</p>
                          <img
                            src={day.day.condition.icon}
                            alt={day.day.condition.text}
                          />
                          <p>{day.day.condition.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
