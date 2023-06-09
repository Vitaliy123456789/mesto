import {Popup} from './Popup.js';
export class PopupDelete extends Popup {
  constructor(popupElement, confirmFunction){
    super(popupElement);
    this._confirmFunction = confirmFunction;
    this._form = document.querySelector('.popup-delete')
  }
  open = (card, _id) => {
    super.open();
    this._card = card;
    this._id = _id
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._confirmFunction(this._card, this._id)
    })
  }
}