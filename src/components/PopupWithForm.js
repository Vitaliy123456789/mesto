import {Popup} from './Popup.js'
export class PopupWithForm extends Popup{
  constructor(popupElement, callBackSubmitForm){
    super(popupElement);
    this._callBackSubmitForm = callBackSubmitForm;
    this._inputs = Array.from(this._popupElement.querySelectorAll('.popup__input'));
    this._button = this._popupElement.querySelector('.popup__container-button')
    this.buttonText = this._button.textContent;

  }
  _getInputValues(){
    const values = {};
    this._inputs.forEach(input => {
      values[input.name] = input.value;})
      return values;
  }

  setEventListeners(){
    super.setEventListeners();
    const submitPopup = (evt) => {
      evt.preventDefault();
      this._button.textContent = 'Сохранение...'
      this._callBackSubmitForm(this._getInputValues());
      evt.target.reset(); 
    }
    this._popupElement.addEventListener('submit', submitPopup);
  }
  firstText(){
    this._button.textContent = this.buttonText
  }
}