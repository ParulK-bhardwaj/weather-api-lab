
// Functions 
function getWeather(zip, apiKey) {
// Replace this with your own API key!
const units = 'imperial'
const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
return fetch(path)
    .then(res => res.json())
}
             