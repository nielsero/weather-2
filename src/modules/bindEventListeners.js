function bindEventListeners() {
  console.log("[bindEventListeners]")
  const weatherForm = document.querySelector(".weather-form")

  weatherForm.addEventListener("submit", handleWeatherFormSubmit)
}

function handleWeatherFormSubmit(event) {
  event.preventDefault()
  const cityInput = event.target.querySelector(".city-input")
  const city = cityInput.value
  console.log(city)
}

export default bindEventListeners
