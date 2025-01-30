import { Modal } from "./modal.js"
import { AlertError } from "./alertError.js"
import { validationCheck, IMCcalculator } from "./utils.js"

//variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const inputAge = document.querySelector("#age")
const ageValue = document.querySelector("#setValue")
const inputGender = document.querySelector("#gender")

//Reorganizing the modal responsibility code interaction with object literals makes more readable for later adjustments.

form.onsubmit = (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value
  const age = inputAge.value
  const gender = inputGender.value
  const resetInputs = () => {
    inputWeight.value = ""
    inputHeight.value = ""
  }
  console.log(gender.value)
  const isNotANumber = validationCheck(weight) || validationCheck(height)

  // if (gender.value == "male") {
  //   alert("É macho")
  // } else {
  //   alert("É fêmea")
  // }

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
inputAge.oninput = () => {
  ageValue.innerHTML = `${inputAge.value}`
}
document.addEventListener("keydown", Modal.keyDownClose)
