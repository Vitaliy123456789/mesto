import {Popup} from './Popup.js'
export class PopupWithForm extends Popup{
  constructor(popupElement, callBackSubmitForm){
    super(popupElement);
    this._callBackSubmitForm = callBackSubmitForm;
    this._inputs = Array.from(this._popupElement.querySelectorAll('.popup__input'));

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
      this._callBackSubmitForm(this._getInputValues());
      this.close();
    }
    this._popupElement.addEventListener('submit', submitPopup);

  }
  close(){
    super.close()
    this._popupElement.addEventListener('submit', (evt) => { 
          evt.target.reset(); 
      });
  }
}