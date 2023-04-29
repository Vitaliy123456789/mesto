import {
  popupImage,
  popupTitle,
  popupOpenCard,
  openPopup,
} from "./index.js";
export class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;
  }
  _getTemplate() {
    return this._template.content.cloneNode(true);
  }
  generalCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__element-img")
    this._element.querySelector(".elements__group-title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._element;
  }
  _toggleLike = (event) => {
    event.target.classList.toggle("elements__group-button_active");
  };
  _openCarPopup = (evt) => {
    popupImage.src = evt.target.src;
    popupImage.alt = evt.target.alt;
    popupTitle.textContent = evt.target.alt;
    openPopup(popupOpenCard);
  };
  _deleteCard = (event) => {
    const card = event.target.closest(".elements__element");
    card.remove();
  };
  _setEventListeners() {
    this._element.querySelector(".elements__button-delite").addEventListener("click", this._deleteCard);
    this._element.querySelector(".elements__group-button").addEventListener("click", this._toggleLike);
    this._cardImage.addEventListener("click", this._openCarPopup);
  }
}
