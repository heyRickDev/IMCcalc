export function validationCheck(value) {
  return isNaN(value) || value == ""
}
export const IMCcalculator = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2)
}
