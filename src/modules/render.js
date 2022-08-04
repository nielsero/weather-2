import getWeatherImage from "../api/getWeatherImage"

function renderWeather(weatherSource) {
  console.log("[renderWeather]")
  const weather = filterWeather(weatherSource)
  const DOM = getDomElements()
  updateDomValues(weather, DOM)
}

function filterWeather({ main, name, sys, weather }) {
  return {
    temperature: main.temp,
    feelsLike: main.feels_like,
    minTemperature: main.temp_min,
    maxTemperature: main.temp_max,
    city: name,
    countryCode: sys.country,
    name: weather[0].main,
    description: weather[0].description,
    iconCode: weather[0].icon,
  }
}

function getDomElements() {
  const weatherDisplay = document.querySelector(".weather-display")

  return {
    weatherDisplay,
    countryInfo: weatherDisplay.querySelector(".country-info"),
    weatherName: weatherDisplay.querySelector(".weather-name"),
    weatherDescription: weatherDisplay.querySelector(".weather-description"),
    weatherImage: weatherDisplay.querySelector(".weather-image"),
    temperature: weatherDisplay.querySelector(".temperature"),
    minTemperature: weatherDisplay
      .querySelector(".min-temperature")
      .querySelector(".extra-weather"),
    maxTemperature: weatherDisplay
      .querySelector(".max-temperature")
      .querySelector(".extra-weather"),
    feelsLike: weatherDisplay
      .querySelector(".feels-like")
      .querySelector(".extra-weather"),
  }
}

function updateDomValues(weather, DOM) {
  DOM.countryInfo.textContent = `${weather.city}, ${weather.countryCode}`
  DOM.weatherName.textContent = weather.name
  DOM.weatherDescription.textContent = weather.description
  DOM.weatherImage.src = getWeatherImage(weather.iconCode)
  DOM.temperature.textContent = `${weather.temperature.toFixed(1)}°C`
  DOM.minTemperature.textContent = `${weather.minTemperature.toFixed(1)}°C`
  DOM.maxTemperature.textContent = `${weather.maxTemperature.toFixed(1)}°C`
  DOM.feelsLike.textContent = `${weather.feelsLike.toFixed(1)}°C`
}

export default renderWeather
