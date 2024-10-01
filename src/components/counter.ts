import { CountUp } from "countup.js"

const getCounter = (attribute: string, duration: number) => {
  const items: NodeListOf<HTMLElement> = document.querySelectorAll(attribute)
  items.forEach(item => {
    const number: number = parseInt(item.textContent || "0")
    const numAnim: CountUp = new CountUp(item, number, {
      duration,
      separator: "",
      useEasing: false,
      enableScrollSpy: true,
      scrollSpyOnce: true,
    })

    if (!numAnim.error) {
      numAnim.start()
    } else {
      console.error(numAnim.error)
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  getCounter("[data-number]", 1)
})
