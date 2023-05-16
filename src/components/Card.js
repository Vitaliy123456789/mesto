


export class Card {
  constructor( {data, handleCardClick}, template) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick
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

  _deleteCard = (event) => {
    const card = event.target.closest(".elements__element");
    card.remove();
  };
  _setEventListeners() {
    this._element.querySelector(".elements__button-delite").addEventListener("click", this._deleteCard);
    this._element.querySelector(".elements__group-button").addEventListener("click", this._toggleLike);
    this._cardImage.addEventListener("click", this._handleCardClick);
  }
}
