import React, { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "acb789674b90b3fcfd6e043a19ed16f9";

  const fetchWeather = async () => {
    if (!city) return;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="weather-box">
      <h1 className="title">🌤 Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />

      <button onClick={fetchWeather} className="btn">
        Search
      </button>

      {weather && weather.main && (
        <div className="result">
          <h2>{weather.name}</h2>
          <h3>{weather.main.temp}°C</h3>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
