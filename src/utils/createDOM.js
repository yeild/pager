import { updatePage, toggleQuickBtn } from './handler'
import { addClass } from './classes'

let ctx = {}
const pageMap = {}

function createPageBtn (text, className = '') {
  const li = document.createElement('li')
  li.innerHTML = text
  li.className = 'page-btn ' + className
  if (text === ctx.current) {
    li.className += 'page-btn-active'
    pageMap.active = li
  }
  if (text > ctx.pageCount) {
    addClass(li, 'page-btn-hidden')
  }
  li.addEventListener('click', function (e) {
    updatePage(e.target, pageMap, ctx)
  })
  return li
}

function createPrev () {
  const li = createPageBtn('<', 'page-prev')
  li.title = '上一页'
  li.diff = -1
  pageMap.prev = li
  return li
}

function createHome() {
  const li = createPageBtn('1')
  pageMap.home = li
  return li
}

function createJumpPrev() {
  const li = createPageBtn('···', 'page-jumpPrev')
  li.title = '向前 5 页'
  li.diff = -5
  pageMap.jumpPrev = li
  return li
}

function createMain() {
  const fragment = document.createDocumentFragment()
  pageMap.main = []

  let current = ctx.current
  let max = ctx.pageCount
  let start = current < 4 ? 1 : max - current < 3 ? max - 4 : current -2

  for (let i = 1; i <= 5; i++) {
    let li = createPageBtn(start++)
    fragment.appendChild(li)
    pageMap.main.push(li)
  }
  return fragment
}

function createJumpNext () {
  const li = createPageBtn('···', 'page-jumpNext')
  li.title = '向后 5 页'
  li.diff = 5
  pageMap.jumpNext = li
  return li
}

function createEnd() {
  const li = createPageBtn(ctx.pageCount)
  pageMap.end = li
  return li
}

function createNext() {
  const li = createPageBtn('>', 'page-next')
  li.title = '下一页'
  li.diff = 1
  pageMap.next = li
  return li
}

function createQuickJumper() {
  const span = document.createElement('span')
  span.className = 'page-quickJumper'
  span.innerHTML = '跳至第'
  const input = document.createElement('input')
  input.className = 'page-quickJumper-input'

  input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      let value = e.target.value
      if (/^\d+$/.test(value)) {
        value = Number(value)
        if (value > ctx.pageCount) value = ctx.pageCount
        if (value < 1) value = 1
        updatePage(value, pageMap, ctx)
      }
      e.target.value = ''
    }
  })

  span.appendChild(input)
  span.appendChild(document.createTextNode('页'))
  return span
}

export function createDOM (context) {
  ctx = context
  const fragment = document.createDocumentFragment()
  fragment.appendChild(createPrev())
  fragment.appendChild(createHome())
  fragment.appendChild(createJumpPrev())
  fragment.appendChild(createMain())
  fragment.appendChild(createJumpNext())
  fragment.appendChild(createEnd())
  fragment.appendChild(createNext())
  fragment.appendChild(createQuickJumper())
  toggleQuickBtn(pageMap)
  return fragment
}