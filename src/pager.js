import { createDOM } from './utils/createDOM'
import  './pager.scss'

class Pager {
  constructor ({ el, current, pageSize, total, showJumper, onChange}) {
    this.el = el
    this.current = current || 1
    this.pageSize = pageSize || 10
    this.total = total || 1
    this.showJumper = showJumper || true
    this.onChange = onChange
    this.pageCount = Math.ceil(this.total / this.pageSize)
  }
  init () {
    const pager = createDOM(this)
    this.el.innerHTML = ''
    this.el.appendChild(pager)
    return this
  }
}
window.Pager = {
  init (opt){
    return new Pager(opt).init()
  }
}