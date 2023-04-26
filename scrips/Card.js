import {cardButton, popupImage, popupTitle, popupOpenCard, openPopup } from './index.js'
export class Card {
  constructor(name,link){
    this._name = name;
    this._link = link;
  }
  _getTemplate(){
    const cardElement = document.querySelector('.item-template').content.cloneNode(true);
    return cardElement;
  }
  generalCard(){
    this._element = this._getTemplate();
    this._element.querySelector('.elements__group-title').textContent = this._name;
    this._element.querySelector('.elements__element-img').src = this._link;
    this._element.querySelector('.elements__element-img').alt = this._name;
    this._setevent()
    return this._element;
  }
  _onLike = (event) => {
    event.target.classList.toggle('elements__group-button_active');
  }
    _openCarPopup = (evt) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;   
    popupTitle.textContent = evt.target.alt;
    openPopup(popupOpenCard);
   }
  _deliteCard = (event) => {
  const card = event.target.closest('.elements__element');
  card.remove();
 }
    _setevent(){
      this._element.querySelector('.elements__button-delite').addEventListener('click', this._deliteCard)
      this._element.querySelector('.elements__group-button').addEventListener('click', this._onLike)
      this._element.querySelector('.elements__element-img').addEventListener('click', this._openCarPopup);
   }

}