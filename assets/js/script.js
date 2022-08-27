let searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', () =>  {
    userCityInput = document.getElementById('user-input').value;
    console.log(userCityInput);
    fetchWeather(userCityInput);
});

async function fetchWeather () {
    let apiKey = '02469bc88dce331a39026a7921fdbecc';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${userCityInput}&units=imperial&appid=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}

fetchWeather();