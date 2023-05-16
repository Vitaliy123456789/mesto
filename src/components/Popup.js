export class Popup{
  constructor(popupSelector){
    this._popupSelector = popupSelector
    this._closeButton = this._popupSelector.querySelector('.popup__button')
  }
  open(){
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close(){
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape'){
      this._closestEscKey = document.querySelector('.popup_opened')
      this.close()
    }
  }
  setEventListeners(){
    this._popupSelector.addEventListener('click', (event) => {
      if (event.target !== event.currentTarget){ 
        return; 
      }
      this.close()
    });
    this._closeButton.addEventListener('click', () => {
      this.close()
    })
  }
} 