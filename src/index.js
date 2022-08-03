import "./style.css"
import getWeather from "./modules/getWeather"

main()

async function main() {
  try {
    const weather = await getWeather("maputo")
    console.log("[main] loading weather data")
    console.log(weather)
  } catch (error) {
    console.log(`[main] error: ${error.message}`)
  }
}
