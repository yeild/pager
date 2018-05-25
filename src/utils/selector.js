export function getSiblings(el) {
  return Array.from(el.parentNode.children) || []
}

export function $(selector) {
  return Array.from(document.querySelectorAll(selector))
}