import getWeatherImage from "../api/getWeatherImage"
import githubLogo from "../assets/github.png"

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
    loader: document.querySelector(".loader"),
    footer: document.querySelector(".footer"),
  }
}

function updateWeatherDOM(weather, DOM) {
  DOM.countryInfo.textContent = `${weather.city}, ${weather.countryName}`
  DOM.weatherName.textContent = weather.name
  DOM.weatherDescription.textContent = weather.description
  DOM.weatherImage.src = getWeatherImage(weather.iconCode)
  DOM.temperature.textContent = `${weather.temperature.toFixed(1)}°C`
  DOM.minTemperature.textContent = `${weather.minTemperature.toFixed(1)}°C`
  DOM.maxTemperature.textContent = `${weather.maxTemperature.toFixed(1)}°C`
  DOM.feelsLike.textContent = `${weather.feelsLike.toFixed(1)}°C`
}

function loadFooterImage() {
  const footerImage = document.querySelector(".footer__image")
  footerImage.src = githubLogo
}

export { getDomElements, updateWeatherDOM, loadFooterImage }
