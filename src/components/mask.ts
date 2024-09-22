import IMask from "imask"

const phone = document?.getElementById("phone")
const telegram = document?.getElementById("telegram")

const phoneMaskOptions = {
  mask: "+38(\\000)-00-00-000",
}
const telegramMaskOptions = {
  mask: "@{a-zA-Z0-9_}",
  blocks: {
    a: {
      mask: /[a-zA-Z0-9_]*/,
    },
  },
  placeholderChar: "_",
}

const masks = {
  phoneMask: () => {
    new (IMask as any)(phone, phoneMaskOptions)
  },
  telegramMask: () => {
    new (IMask as any)(telegram, telegramMaskOptions)
  },
}

if (phone) {
  masks.phoneMask()
}

if (telegram) {
  masks.telegramMask()
}
