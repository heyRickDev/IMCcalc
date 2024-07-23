import { Modal } from "./modal.js"
import { AlertError } from "./alertError.js"
import { validationCheck, IMCcalculator } from "./utils.js"

//variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

//Reorganizing the modal responsibility code interaction with object literals makes more readable for later adjustments.

form.onsubmit = (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value
  const resetInputs = () => {
    inputWeight.value = ""
    inputHeight.value = ""
  }

  const isNotANumber = validationCheck(weight) || validationCheck(height)

  if (isNotANumber) {
    AlertError.open()
    resetInputs()
    return
  }

  AlertError.close()
  const result = IMCcalculator(weight, height)

  Modal.resultMessage.innerHTML = `Seu IMC é de ${result}`
  Modal.open()
  resetInputs()
}

//events
Modal.buttonClose.onclick = () => Modal.close()
inputWeight.oninput = () => AlertError.close()
document.addEventListener("keydown", Modal.keyDownClose)
