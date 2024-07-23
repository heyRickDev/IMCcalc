export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  popUpCard: document.querySelector(".modal"),
  buttonClose: document.querySelector(".modal button"),
  resultMessage: document.querySelector(".modal .title"),
  open() {
    this.wrapper.classList.add("open")
    this.popUpCard.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
    this.popUpCard.classList.remove("open")
  },
  keyDownClose(e) {
    if (e.key == "Escape") {
      Modal.close()
    }
    console.log(e)
  },
}
