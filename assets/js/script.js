var APIKey = '02469bc88dce331a39026a7921fdbecc';
var city;
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
fetch(queryURL);
