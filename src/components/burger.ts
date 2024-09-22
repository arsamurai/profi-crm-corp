const setModalState = (btn: HTMLElement, menu: HTMLElement, activate: boolean): void => {
  const action = activate ? "add" : "remove"

  btn?.classList[action]("active")
  menu?.classList[action]("active")
}

const burger = document.getElementById("burger") as HTMLButtonElement
const menu = document.getElementById("menu") as HTMLElement
const menuLinks = menu?.querySelectorAll("[data-menu-link]") as NodeListOf<HTMLLIElement>

burger?.addEventListener("click", ({ currentTarget }) => {
  const target = currentTarget as HTMLElement
  const isActiveMenu = target?.classList?.contains("active")

  setModalState(target, menu, !isActiveMenu)
})

menuLinks?.forEach(link => {
  const linkTagA = link?.querySelector("a")

  link.addEventListener("click", () => {
    setModalState(burger, menu, false)
  })

  if (linkTagA?.href === window.location.href) {
    linkTagA.classList.add("text-primary")
  }
})
