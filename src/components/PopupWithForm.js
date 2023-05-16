import {Popup} from './Popup.js'
export class PopupWithForm extends Popup{
  constructor(popupSelector, callBackSubmitForm){
    super(popupSelector);
    this._callBackSubmitForm = callBackSubmitForm;
    this._inputs = Array.from(this._popupSelector.querySelectorAll('.popup__input'))
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
      super.close();
    }
    this._popupSelector.addEventListener('submit', submitPopup);
  }
  close(){
    super.close()
    this._popupSelector.addEventListener('submit', (evt) => { 
          evt.target.reset(); 
      });
  }
}