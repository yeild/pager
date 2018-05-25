import { $ } from './selector'
import { addClass, removeClass, toggleClass } from './classes'

/**
 * get current page number
 * @param current
 * @param diff
 * @param max
 * @returns {*}
 */
function getCurrent(current, diff, max) {
  const min = 1
  const after = current + diff
  if (after < min) return min
  if (after > max) return max
  return after
}

function renderMain(main, current, max) {
  let start = current < 4 ? 1 : max - current < 3 ? max - 4 : current -2
  main.forEach(i => {
    i.innerHTML = start++
  })
}

function setActiveClass(pageMap, current) {
  removeClass(pageMap.active, 'page-btn-active')
  pageMap.main.forEach(i => {
    if (Number(i.innerHTML) === current) {
      addClass(i, 'page-btn-active')
      pageMap.active = i
    }
  })
}

function toggleHelper(a, b, compare, el) {
  if (a.innerHTML - b.innerHTML <= compare) addClass(el, 'page-btn-hidden')
  else removeClass(el, 'page-btn-hidden')
}

export function toggleQuickBtn({ main, home, jumpPrev, end, jumpNext}) {
  toggleHelper(main[0], home, 1, jumpPrev)
  toggleHelper(main[0], home, 0, home)
  toggleHelper(end, main[4], 1, jumpNext)
  toggleHelper(end, main[4], 0, end)
}

function render(pageMap, { current, pageCount, }) {
  renderMain(pageMap.main, current, pageCount)
  setActiveClass(pageMap, current)
  toggleQuickBtn(pageMap)
}

export function updatePage (current, pageMap, ctx) {
  const before = ctx.current
  if (typeof current === 'number') {
    ctx.current = current
  } else {
    ctx.current = current.diff ? getCurrent(ctx.current, current.diff, ctx.pageCount) : Number(current.innerHTML)
  }
  if (ctx.current === before) return
  render(pageMap, ctx)
  if (typeof ctx.onChange === 'function') ctx.onChange(ctx.current)
}