import {createDOM} from './utils/createDOM'
import  './pager.scss'

class Pager {
  constructor({
    el,
    current = 1,
    pageSize = 10,
    total,
    showJumper = true,
    sizeChangeable = false,
    hideOnSinglePage = false,
    onChange,
    onSizeChange
  }) {
    Object.assign(this, arguments[0])
    this.total = Number(total) > 0 ? Number(total) : 1
  }
  init() {
    this.el.innerHTML = ''
    this.pageCount = Math.ceil(this.total / this.pageSize)
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