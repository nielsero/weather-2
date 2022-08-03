import "./style.css"
import getWeather from "./modules/getWeather"
import bindEventListeners from "./modules/bindEventListeners"

main()

async function main() {
  console.log("[main]")
  try {
    const weather = await getWeather("maputo")
    console.log(weather)
  } catch (error) {
    console.log(`[main] error: ${error.message}`)
  }
  bindEventListeners()
}
