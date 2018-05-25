import { updatePage, toggleQuickBtn } from './handler'

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
  li.addEventListener('click', function (e) {
    updatePage(e.target, pageMap, ctx)
  })
  return li
}

function createPrev () {
  const li = createPageBtn('<', 'page-prev')
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
  li.diff = -5
  pageMap.jumpPrev = li
  return li
}

function createMain() {
  const fragment = document.createDocumentFragment()
  pageMap.main = []
  for (let i = 1; i <= 5; i++) {
    let li = createPageBtn(i)
    fragment.appendChild(li)
    pageMap.main.push(li)
  }
  return fragment
}

function createJumpNext () {
  const li = createPageBtn('···', 'page-jumpNext')
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
  li.diff = 1
  pageMap.next = li
  return li
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
  toggleQuickBtn(pageMap)
  return fragment
}