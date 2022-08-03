import getWeather from "./getWeather"

function bindEventListeners() {
  console.log("[bindEventListeners]")
  const weatherForm = document.querySelector(".weather-form")

  weatherForm.addEventListener("submit", handleWeatherFormSubmit)
}

function handleWeatherFormSubmit(event) {
  event.preventDefault()
  const cityInput = event.target.querySelector(".city-input")
  const city = cityInput.value

  getWeather(city)
    .then((weather) => {
      console.log(weather)
    })
    .catch((error) => {
      console.log(`[handleWeatherFormSubmit] error: ${error.message}`)
    })
}

export default bindEventListeners
