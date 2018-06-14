import { updatePage, toggleQuickBtn } from './handler'
import { addClass, removeClass, toggleClass } from './classes'
import { getSiblings } from './selector'

let ctx = {}
const pageMap = {}

function createPageBtn (text, className = '') {
  const span = document.createElement('span')
  span.innerHTML = text
  span.className = 'page-btn ' + className
  if (text === ctx.current) {
    span.className += 'page-btn-active'
    pageMap.active = span
  }
  if (text > ctx.pageCount) {
    addClass(span, 'page-btn-hidden')
  }
  span.addEventListener('click', function (e) {
    updatePage(e.target, pageMap, ctx)
  })
  return span
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

function createSizeChanger() {
  const span = document.createElement('span')
  span.className = 'page-sizeChanger'
  span.innerHTML = ctx.pageSize + ' 条/页'
  span.addEventListener('click', function () {
    toggleClass(span, 'page-sizeChanger-active')
  })
  const ul = document.createElement('ul')
  ul.className = 'page-sizeChanger-ul'
  for (let i = 1; i < 5; i++) {
    const li = document.createElement('li')
    li.innerHTML = i * 10 + ' 条/页'
    li.className = 'page-sizeChanger-li'
    if (i * 10 === ctx.pageSize) addClass(li, 'page-sizeChanger-li-active')
    li.addEventListener('click', function () {
      getSiblings(li, 'LI').forEach(function (i) {
        removeClass(i, 'page-sizeChanger-li-active')
      })
      span.firstChild.nodeValue = i * 10 + ' 条/页'
      console.log(span.firstChild)
      ctx.current = 1
      ctx.pageSize = i * 10
      ctx.init()
      addClass(li, 'page-sizeChanger-li-active')
      ctx.onSizeChange && ctx.onSizeChange(ctx.current, ctx.pageSize)
    })
    ul.appendChild(li)
  }
  span.appendChild(ul)
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
  ctx.sizeChangeable && fragment.appendChild(createSizeChanger())
  ctx.showJumper && fragment.appendChild(createQuickJumper())
  toggleQuickBtn(pageMap)
  return fragment
}