import token from './token.json'
import './animation'

const city = '629634'; // Brest id
const url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${token}`;

let weather, deg, more;

let toCelsius = (kelvins) => kelvins - 273.15;

function getWeather() {
  fetch(url).then(res => res.json()).then(json => {
    weather = json;
    deg = Math.round(toCelsius(weather.main.temp));
    more = weather.weather[0].main + '<br />' + 'Wind: ' + weather.wind.speed + ' m/s' + '<br />' + 'Pressure: ' + weather.main.pressure
    document.querySelector('.title').textContent = deg.toString() + ' °' + 'C';
    document.querySelector('.more').innerHTML = more;
  })
}

getWeather();

