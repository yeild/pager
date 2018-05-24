import { createDOM } from './utils/createDOM'
import  './pager.scss'

class Pager {
  constructor (opt) {
    Object.assign(this, opt)
    this.pageCount = Math.ceil(this.total / this.pageSize)
  }
  init () {
    const pager = createDOM(this.pageCount)
    this.el.innerHTML = ''
    this.el.appendChild(pager)
    return this
  }
}
window.Pager = {
  /**
   * @param opt { element,  }
   * @returns vTree instance
   */
  init (opt){
    return new Pager(opt).init()
  }
}