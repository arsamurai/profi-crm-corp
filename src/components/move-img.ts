document.addEventListener("mousemove", event => {
  const image = document.querySelector("[data-move-img]") as HTMLImageElement

  if (image && window.innerWidth >= 1024) {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const imgWidth = image.offsetWidth
    const imgHeight = image.offsetHeight

    const moveX = ((event.clientX / windowWidth) * 10 - 10) * (imgWidth / 500)
    const moveY = ((event.clientY / windowHeight) * 10 - 10) * (imgHeight / 500)

    image.style.transform = `translate(${moveX}px, ${moveY}px)`
  }
})

window.addEventListener("resize", () => {
  const image = document.querySelector("[data-move-img]") as HTMLImageElement
  if (image && window.innerWidth < 1024) {
    image.style.transform = ""
  }
})
