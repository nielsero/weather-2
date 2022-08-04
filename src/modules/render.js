import { getDomElements, updateWeatherDOM, clearScreen } from "./dom"
import getCountry from "../api/getCountry"

async function renderWeather(weatherSource) {
  console.log("[renderWeather]")
  const weather = filterWeather(weatherSource)
  const countrySource = await getCountry(weather.countryCode)
  const country = filterCountry(countrySource)
  weather.countryName = country.name
  weather.countryFlag = country.flag
  const DOM = getDomElements()
  updateWeatherDOM(weather, DOM)
  clearScreen()
  DOM.weatherDisplay.classList.add("weather-display_visible")
}

function renderLoader() {
  console.log("[renderLoader]")
  const DOM = getDomElements()
  clearScreen()
  DOM.loader.classList.add("loader_visible")
}

function renderError() {
  console.log("[renderError]")
  const DOM = getDomElements()
  clearScreen()
  DOM.error.classList.add("error_visible")
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

function filterCountry(country) {
  return {
    name: country[0].name.common,
    flag: country[0].flag,
  }
}

export { renderWeather, renderLoader, renderError }
