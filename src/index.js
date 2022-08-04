import "./style.css"
import { loadFooterImage } from "./modules/dom"
import bindEventListeners from "./modules/bindEventListeners"

main()

function main() {
  console.log("[main]")
  loadFooterImage()
  bindEventListeners()
}
