document.addEventListener("mousemove", event => {
  const moveImg = document.querySelector("[data-move-img]") as HTMLImageElement

  if (moveImg) {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const imgWidth = moveImg.offsetWidth
    const imgHeight = moveImg.offsetHeight

    const moveX = ((event.clientX / windowWidth) * 10 - 10) * (imgWidth / 500)
    const moveY = ((event.clientY / windowHeight) * 10 - 10) * (imgHeight / 500)

    moveImg.style.transform = `translate(${moveX}px, ${moveY}px)`
  }
})
