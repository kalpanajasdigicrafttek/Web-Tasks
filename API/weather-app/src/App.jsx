import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const apiKey = "65e55b5abb8b99361f86fa95eb6a46cb";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const res = await fetch(url);
    const result = await res.json();

    setData(result);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500">
      
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-80">
        
        <h1 className="text-2xl font-bold mb-4">🌦 Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          className="border p-2 w-full mb-3 rounded"
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={getWeather}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Search
        </button>

        {data && data.main && (
          <div className="mt-5">
            <h2 className="text-xl font-semibold">{data.name}</h2>
            <p className="text-3xl font-bold">{data.main.temp}°C</p>
            <p className="capitalize">{data.weather[0].description}</p>

            <div className="mt-3 text-sm">
              <p>🤒 Feels like: {data.main.feels_like}°C</p>
              <p>💧 Humidity: {data.main.humidity}%</p>
              <p>🌬 Wind: {data.wind.speed} m/s</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;