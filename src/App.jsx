import './App.css'

import { useState } from 'react';

import * as weatherService from './services/weatherService';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

function App() {

  const [weather, setWeather] = useState([]);

  const fetchData = async (city) => {
    const data = await weatherService.show(city);
    
    const newWeatherState = [
        data.location.name,
        data.location.region,
        data.location.country,
        data.location.lat,
        data.location.lon,
        data.location.localtime,
        data.current.temp_c,
        data.current.temp_f,
        data.current.condition.text,
        data.current.wind_mph,
        data.current.wind_kph,
        data.current.wind_degree,
        data.current.pressure_mb,
        data.current.humidity,
        data.current.cloud,
        data.current.feelslike_c,
        data.current.feelslike_f,
    ];

    setWeather(newWeatherState);
  };

  return (
    <>
      <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData}/>
      <WeatherDetails weather={weather}/>
      </main>
    </>
  )
}

export default App;