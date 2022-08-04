import getWeather from "../api/getWeather"
import { renderWeather, renderLoader } from "./render"

function bindEventListeners() {
  console.log("[bindEventListeners]")
  const weatherForm = document.querySelector(".weather-form")
  weatherForm.addEventListener("submit", handleWeatherFormSubmit)
}

function handleWeatherFormSubmit(event) {
  console.log("[handleWeatherFormSubmit]")
  event.preventDefault()
  const cityInput = event.target.querySelector(".city-input")
  const city = cityInput.value
  renderLoader()

  getWeather(city)
    .then((weather) => {
      renderWeather(weather)
    })
    .catch((error) => {
      console.log(`[handleWeatherFormSubmit] error: ${error.message}`)
    })
}

export default bindEventListeners
