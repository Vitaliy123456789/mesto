import {Popup} from './Popup.js'
export class PopupWithImage extends Popup{
  constructor(popupElement){
    super(popupElement)
    this._popupImage = this._popupElement.querySelector('.popup-opencard__img')
    this._popupTitle = this._popupElement.querySelector('.popup-opencard__title')
  }
  open = ({name, link}) => {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
    super.open()
  }
  }