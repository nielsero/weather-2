import "./style.css"
import getWeather from "./modules/getWeather"

main()

function main() {
  getWeather("Maputo").then((weather) => console.log(weather))
}
