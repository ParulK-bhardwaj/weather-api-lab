
// Functions 
function getWeather(zip, apiKey, onComplete) {
// Replace this with your own API key!
const units = 'imperial'
const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
fetch(path)
    .then(res => res.json())
    .then(json => {
        onComplete(json)
    })
    .catch(err => console.log(err.message))
}
  
             