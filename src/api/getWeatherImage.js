function getWeatherImage(iconCode) {
  console.log("[getWeatherImage]")
  const url = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  return url
}

export default getWeatherImage
