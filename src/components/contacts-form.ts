import { Modal } from "tw-elements"

const form = document.getElementById("contacts-form") as HTMLFormElement
const applicationModal = new Modal(document.getElementById("application-modal"))
const successAlert = new Modal(document.getElementById("success-alert"))
const errorAlert = new Modal(document.getElementById("error-alert"))

form?.addEventListener("submit", function (event: Event) {
  event.preventDefault()

  const nameInput = document.getElementById("name") as HTMLInputElement
  const phoneInput = document.getElementById("phone") as HTMLInputElement
  const telegramInput = document.getElementById("telegram") as HTMLInputElement

  const formValues = {
    name: nameInput.value,
    phone: phoneInput.value.replace(/\D/g, ""),
    telegram: telegramInput.value,
  }

  if (formValues.phone.length !== 12) {
    phoneInput.style.borderColor = "red"
  } else {
    fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then(() => {
        applicationModal.hide()
        successAlert.show()
        nameInput.value = ""
        telegramInput.value = ""
        phoneInput.value = ""
        phoneInput.style.borderColor = "transparent"
      })
      .catch(() => {
        errorAlert.show()
      })
  }
})
