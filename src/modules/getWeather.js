const API_ID = "92cdf60f97f8454a811ed6fce5d00d96"

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_ID}&units=metric`
  const response = await fetch(url, { mode: "cors" })
  const data = response.json()
  return data
}

export default getWeather
