import getWeather from "./getWeather"
import renderWeather from "./render"

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

  getWeather(city)
    .then((weather) => {
      renderWeather(weather)
    })
    .catch((error) => {
      console.log(`[handleWeatherFormSubmit] error: ${error.message}`)
    })
}

export default bindEventListeners
