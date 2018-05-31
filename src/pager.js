import { createDOM } from './utils/createDOM'
import  './pager.scss'

class Pager {
  constructor ({ el, current, pageSize, total, showJumper, onChange, hideOnSinglePage}) {
    this.el = el
    this.current = Number(current) || 1
    this.pageSize = Number(pageSize) || 10
    this.total = Number(total) > 0 ? Number(total) : 1
    this.showJumper = showJumper || true
    this.hideOnSinglePage = hideOnSinglePage || false
    this.onChange = onChange
    this.pageCount = Math.ceil(this.total / this.pageSize)
  }
  init () {
    this.el.innerHTML = ''
    if (!(this.hideOnSinglePage && this.pageCount <= 1)) {
      const pager = createDOM(this)
      this.el.appendChild(pager)
    }
    return this
  }
}
window.Pager = {
  init (opt){
    return new Pager(opt).init()
  }
}