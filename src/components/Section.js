export class Section {
  constructor(selector){
    this._container = selector;
  }

  // renderItems() {
  //   this._items.forEach((item)=>
  //   this._renderer(item))
  // }
  addItem(itemHtml) {
    this._container.prepend(itemHtml)
  }
}