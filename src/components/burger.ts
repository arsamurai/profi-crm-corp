const setModalState = (btn: HTMLElement, menu: HTMLElement, activate: boolean): void => {
  const action = activate ? "add" : "remove"

  btn?.classList[action]("active")
  menu?.classList[action]("active")
}

const burger = document.getElementById("burger") as HTMLButtonElement
const menu = document.getElementById("menu") as HTMLElement
const menuLinks = menu?.querySelectorAll("[data-menu-link]") as NodeListOf<HTMLAnchorElement>

burger?.addEventListener("click", ({ currentTarget }) => {
  const target = currentTarget as HTMLElement
  const isActiveMenu = target?.classList?.contains("active")

  setModalState(target, menu, !isActiveMenu)
})

menuLinks?.forEach(link => {
  link.addEventListener("click", () => {
    setModalState(burger, menu, false)
  })

  if (link?.href === window.location.href) {
    link.classList.add("text-primary")
  }
})
