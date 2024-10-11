window.addEventListener("DOMContentLoaded", () => {
  const preview = document.querySelector("#preview") as HTMLElement | null
  const button = document.querySelector("[data-telegram-btn]") as HTMLElement | null

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const previewHeight = preview?.offsetHeight ?? 0
    const showButton =
      !previewHeight || scrollPosition > previewHeight || (previewHeight && window.innerWidth < 768)

    if (!button) {
      return
    }

    if (showButton) {
      button.classList.remove("hidden")
    } else {
      button.classList.add("hidden")
    }
  }

  window.addEventListener("scroll", handleScroll)

  handleScroll()
})
