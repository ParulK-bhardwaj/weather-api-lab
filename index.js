
// Functions 
async function getWeather(zip, apiKey) {
    // Replace this with your own API key!
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    // code stops here and waits for promise to resolve
    const res = await fetch(path) 
    // waits here for promise to resolve
    const json = await res.json() 
    // Returns json wrapped in a promise!
    // return data
    const formattedData = {
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
    }
    return formattedData
}
             