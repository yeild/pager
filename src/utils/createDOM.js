/**
 *
 * @param type
 */
function createPageCell (content, className = '') {
  const li = document.createElement('li')
  li.className = 'page-cell ' + className
  li.innerHTML = content
  return li
}

function createPrev () {
  return createPageCell('<', 'page-prev')
}

function createHome() {
  return createPageCell('1')
}

function createJumpPrev() {
  return createPageCell('···', 'page-jumpPrev')
}

function createMain() {
  const fragment = document.createDocumentFragment()
  for (let i = 1; i <= 5; i++) {
    let li = createPageCell(i)
    fragment.appendChild(li)
  }
  return fragment
}

function createJumpNext () {
  return createPageCell('···', 'page-jumpNext')
}

function createEnd() {
  return createPageCell(10)
}

function createNext() {
  return createPageCell('>', 'page-next')
}

export function createDOM (pageCount) {
  const fragment = document.createDocumentFragment()
  fragment.appendChild(createPrev())
  fragment.appendChild(createHome())
  fragment.appendChild(createJumpPrev())
  fragment.appendChild(createMain())
  fragment.appendChild(createJumpNext())
  fragment.appendChild(createEnd())
  fragment.appendChild(createNext())
  return fragment
}