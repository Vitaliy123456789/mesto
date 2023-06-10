export class Popup{
  constructor(popupElement){
    this._popupElement = popupElement
    this._closeButton = this._popupElement.querySelector('.popup__button')
  }
  open(){
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close(){
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose)
  }
  _handleEscClose = (evt) => {
    if (evt.key === 'Escape')
      this.close() 
  }
  setEventListeners(){
    this._popupElement.addEventListener('click', (event) => {
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