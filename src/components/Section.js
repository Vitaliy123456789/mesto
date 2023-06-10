export class Section {
  constructor({ renderer }, selector){
    this._renderer = renderer; 
    this._container = selector;
  }
  addItem(itemHtml) {
    this._container.append(itemHtml)
  }

  renderItems(items) {
    items.forEach((item) => {
    this._renderer(item);
  })
  } 
  newAddItem(itemHtml){
    this._container.prepend(itemHtml)
  }
}