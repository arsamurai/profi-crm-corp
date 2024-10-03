import { Modal } from "tw-elements"

const form = document.getElementById("registration-form") as HTMLFormElement
const successAlert = new Modal(document.getElementById("registration-success"))
const errorAlert = new Modal(document.getElementById("registration-error"))

form?.addEventListener("submit", function (event: Event) {
  event.preventDefault()

  const nameInput = document.getElementById("name") as HTMLInputElement
  const phoneInput = document.getElementById("phone") as HTMLInputElement
  const emailInput = document.getElementById("email") as HTMLInputElement
  const crmNameInput = document.getElementById("crmName") as HTMLInputElement
  const tarifValues = localStorage.getItem("tarif")

  const formValues = {
    name: nameInput.value,
    phone: phoneInput.value.replace(/\D/g, ""),
    email: emailInput.value,
    crmName: crmNameInput.value,
    tarif: tarifValues ? JSON.parse(tarifValues) : null,
  }

  if (formValues.phone.length !== 12) {
    phoneInput.style.borderColor = "red"
  } else {
    fetch("/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then(() => {
        successAlert.show()
        console.log(JSON.stringify(formValues))
      })
      .catch(() => {
        errorAlert.show()
      })
      .finally(() => {
        nameInput.value = ""
        emailInput.value = ""
        crmNameInput.value = ""
        phoneInput.value = ""
        phoneInput.style.borderColor = "transparent"
        localStorage.removeItem("tarif")
      })
  }
})
