let today = moment().format('L');

let searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () =>  {
    userCityInput = document.getElementById('user-input').value;
    console.log(userCityInput);
    fetchWeatherData(userCityInput);
});

async function fetchWeatherData () {
    let apiKey = '02469bc88dce331a39026a7921fdbecc';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCityInput}&units=imperial&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    useWeatherData(data);
}

fetchWeatherData();

function useWeatherData(data) {
    document.querySelector('.content').innerHTML = `
    <h3 class="header">Current Weather in ${data.name} (${today})</h3>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p>${data.weather[0].main}</p>
        <p>Temperature: ${data.main.temp}°F (Feels Like: ${data.main.feels_like}°F)</p>
        <p>Wind: ${data.wind.speed} MPH</p>
        <p>Humidity: ${data.main.humidity}%</p>

    <div class="forecast">
        <h3>5-Day Forecast:</h3>
            <div class="card" style="width: 18%;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Temperature: ${data.main.temp}°F<p>
            <p>Wind: ${data.wind.speed} MPH</p>
            <p>Humidity: ${data.main.humidity}%</p>
            </div>
            </div>

            <div class="card" style="width: 18%;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Temperature: ${data.main.temp}°F<p>
            <p>Wind: ${data.wind.speed} MPH</p>
            <p>Humidity: ${data.main.humidity}%</p>
            </div>
            </div>

            <div class="card" style="width: 18%;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Temperature: ${data.main.temp}°F<p>
            <p>Wind: ${data.wind.speed} MPH</p>
            <p>Humidity: ${data.main.humidity}%</p>
            </div>
            </div>

            <div class="card" style="width: 18%;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Temperature: ${data.main.temp}°F<p>
            <p>Wind: ${data.wind.speed} MPH</p>
            <p>Humidity: ${data.main.humidity}%</p>
            </div>
            </div>

            <div class="card" style="width: 18%;">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>Temperature: ${data.main.temp}°F<p>
            <p>Wind: ${data.wind.speed} MPH</p>
            <p>Humidity: ${data.main.humidity}%</p>
            </div>
            </div>
    </div>
    `
}