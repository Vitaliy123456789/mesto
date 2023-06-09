

export class Card {
  constructor( {data, handleCardClick}, template, userId, hendleDelete, putDeleteLike, searchLike) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick
    this._template = template;
    this._userId = userId
    this._ownerId = data.owner._id
    this._cardId = data._id
    this._likesLength = data.likes.length
    this._likes = data.likes
    this._hendleDelete = hendleDelete;
    this._putDeleteLike = putDeleteLike;
    this._searchLike = searchLike;

    
  }
  _getTemplate() {
    const cardElement = this._template.content.querySelector('.elements__element').cloneNode(true);
    return cardElement;
    
  }
  generalCard(myId) {

    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__element-img")
    this._element.querySelector(".elements__group-title").textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    if(this.isLiked(myId)){
      this.addLike()
    }
    return this._element;
 
  }
  toggleLike = (myId) => {
      this._likes.some((user) => {
        if (user._id === myId){
          this._element.querySelector(".elements__group-button").classList.add("elements__group-button_active")
        }else{
          this._element.querySelector(".elements__group-button").classList.remove("elements__group-button_active")
        }
      })
    }

  deleteCard() {
    this._element.remove();
  };
  getId(){
    return this._cardId
  }
  isLiked(myId){
    const myLike = this._likes.some((user) => {
      return user._id === myId;
    })
    return myLike
  }
  setLike(likes){
    this._element.querySelector(".elements__number-like").textContent = likes.length
  }
  
  deleteLike(){
    this._element.querySelector(".elements__group-button").classList.remove("elements__group-button_active")
  }
  addLike(){
    this._element.querySelector(".elements__group-button").classList.add("elements__group-button_active")
  }
  rewrite(likes){
    this._likes = likes
  }
  _setEventListeners() {
    this._element.querySelector(".elements__button-delite").addEventListener("click", this._hendleDelete);
    this._cardImage.addEventListener("click", this._handleCardClick);
    this._element.querySelector(".elements__group-button").addEventListener("click", this._putDeleteLike,)
    if (this._ownerId !==  this._userId){
      this._element.querySelector(".elements__button-delite").remove();
    }
    this._element.querySelector(".elements__number-like").textContent = this._likesLength;
  }
}
