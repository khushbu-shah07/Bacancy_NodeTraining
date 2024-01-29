// Create a program that makes an API call and displays all the retrieved data on a web page. Choose a public API (e.g., JSONPlaceholder, OpenWeatherMap) and use the fetch function to make the API request. Also implement error handling

const apiKey = '8695167b522d4d8b700c33bbbbc3594f'; 

// eslint-disable-next-line no-unused-vars
function getWeather() {
  // eslint-disable-next-line no-undef
  const cityName = document.getElementById('city-input').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error in API call');
      }
      return response.json();
    })
    .then((data) => {
      // eslint-disable-next-line no-use-before-define
      displayWeatherData(data);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      // eslint-disable-next-line no-alert, no-undef
      alert('Error in API call. Please try again.');
    });
}

function displayWeatherData(data) {
  const weatherDataDiv = document.getElementById('weather-data');
  weatherDataDiv.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Atmospheric pressure: ${data.main.pressure} hPa</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
}