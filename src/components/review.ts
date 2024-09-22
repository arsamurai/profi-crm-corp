const toggleReviewVisibility = (text: HTMLParagraphElement, button: HTMLButtonElement): void => {
  const isCollapsed = text.classList.contains("line-clamp-6")

  text.classList.toggle("line-clamp-6", !isCollapsed)
  button.innerText = isCollapsed ? "Сховати" : "Показать полностью"
}

const shouldShowButton = (text: HTMLParagraphElement): boolean => {
  const lineHeight = parseFloat(getComputedStyle(text).lineHeight)
  const maxHeight = lineHeight * 6
  return text.scrollHeight > maxHeight
}

const reviewsText = document.querySelectorAll(
  "[data-review-text]",
) as NodeListOf<HTMLParagraphElement>

const getReviewText = () => {
  reviewsText.forEach(text => {
    const btn = text.nextElementSibling as HTMLButtonElement
    if (shouldShowButton(text)) {
      btn.style.display = "block"
      btn.addEventListener("click", () => toggleReviewVisibility(text, btn))
    } else {
      btn.style.display = "none"
    }
  })
}

window.addEventListener("load", getReviewText)
window.addEventListener("resize", getReviewText)
