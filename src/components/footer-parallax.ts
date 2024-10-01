document.addEventListener("DOMContentLoaded", function () {
  const main = document.querySelector("main") as HTMLElement
  const footer = document.querySelector("footer") as HTMLElement

  function updateMargin() {
    if (footer) {
      const footerHeight = footer.offsetHeight
      main.style.marginBottom = `${footerHeight}px`
    }
  }

  updateMargin()

  window.addEventListener("resize", updateMargin)
})
