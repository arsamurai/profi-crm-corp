const tarifs = document.querySelectorAll("[data-tarif]") as NodeListOf<HTMLButtonElement>

tarifs?.forEach(tarif => {
  const tarifBtn = tarif.querySelector("[data-tarif-btn]") as HTMLButtonElement
  const tarifName = tarif.querySelector("[data-tarif-name]")?.innerHTML.trim() as string
  const tarifPrice = tarif.querySelector("[data-tarif-price]")?.innerHTML.trim() as string

  const tarifValues = {
    name: tarifName,
    price: tarifPrice,
  }

  tarifBtn.addEventListener("click", () => {
    localStorage.setItem("tarif", JSON.stringify(tarifValues))
    window.location.href = "/ua/sign-up"
  })
})
