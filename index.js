/* eslint-disable no-unused-vars */
/* eslint-disable no-return-await */
// Functions

async function fetchWeather(path) {
  // waits for promise to resolve
  const res = await fetch(path);
  // waits here for promise to resolve
  const json = await res.json();
  // Returns json wrapped in a promise!
  // return data
  if (json.cod !== 200) {
    return json;
  }
  return {
    temp: json.main.temp,
    desc: json.weather[0].description,
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    temp_max: json.main.temp_max,
    temp_min: json.main.temp_min,
    feels_like: json.main.feels_like,
    icon: json.weather[0].icon,
    city: json.name,
    wind: json.wind.speed,
  };
}

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

async function getWeatherByZip(apiKey, zip, unit = 'imperial') {
  const path = `${baseUrl}zip=${zip}&appid=${apiKey}&units=${unit}`;
  return await fetchWeather(path);
}

async function getWeatherByCity(apiKey, city, unit = 'imperial') {
  const path = `${baseUrl}q=${city}&appid=${apiKey}&units=${unit}`;
  return await fetchWeather(path);
}

async function getWeatherByGeo(apiKey, lat, lon, unit = 'imperial') {
  const path = `${baseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  return await fetchWeather(path);
}
