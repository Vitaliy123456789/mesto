const formElement = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup__input_title_name');
const jobInput = document.querySelector('.popup__input_title_job');
const nameTitle = document.querySelector('.profile__title');
const jobTitle = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup-profile');
const popupCloseButtonElement = popupElement.querySelector('.popup-profile__button');
const popupOpenButtonElement = document.querySelector('.profile__button');
const popupCardsElement = document.querySelector('.popup-cards');
const popupCardsCloseButtonElement = document.querySelector('.popup-cards__button');
const popupCardsOpenButtonElement = document.querySelector('.profile__addbutton');
const itemTemplate = document.querySelector('.item-template').content;
const list = document.querySelector('.elements');
const cardInputName = document.querySelector('.popup-cards__input_name');
const cardInputUrl = document.querySelector('.popup-cards__input_url');
const cardButton = document.querySelector('.popup-cards__container-button');
const popupOpenCard = document.querySelector('.popup-opencard');
const popupOpenCardButton = document.querySelector('.popup-opencard__button');
const formElementCard = document.querySelector('.popup-cards__form');
const popupImage = document.querySelector('.popup-opencard__img');
const popupTitle = document.querySelector('.popup-opencard__title');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

 initialCards.forEach(renderCard);
 
function createCard(item) {
  const cardElement = itemTemplate.cloneNode(true);
  cardElement.querySelector('.elements__group-title').textContent = item.name;
  cardElement.querySelector('.elements__element-img').src = item.link;
  cardElement.querySelector('.elements__element-img').alt = item.name;
  setEventLisners(cardElement);
return cardElement;
}
function renderCard (item) {
  const cardElement = createCard(item);
  list.prepend(cardElement);
}

function cardformSubmit (evt) {
 evt.preventDefault();
 const item = { name:cardInputName.value , link:cardInputUrl.value }
  renderCard(item);
  closePopupCards();
  evt.target.reset()
};

formElementCard.addEventListener('submit', cardformSubmit);

function setEventLisners(htmlElement){
  htmlElement.querySelector('.elements__button-delite').addEventListener('click', deliteCard);
  htmlElement.querySelector('.elements__group-button').addEventListener('click', likePut);
  htmlElement.querySelector('.elements__element-img').addEventListener('click', openCarPopup);
}

function deliteCard(event) {
  const card = event.target.closest('.elements__element');
  card.remove();
}

function likePut(event){
  event.target.classList.toggle('elements__group-button_active');
}

 function openCarPopup (evt){
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupTitle.textContent = evt.target.alt;
  openPopup(popupOpenCard);
 }

function closeCarPopup (){
  closePopup(popupOpenCard);
 }

popupOpenCardButton.addEventListener('click', closeCarPopup);
const openPopupCards = function(){
  openPopup(popupCardsElement);
}

const closePopupCards = function(){
  closePopup(popupCardsElement);
};
const openPopupProfile = function(){
  openPopup(popupElement);
  const nameTitleText = nameTitle.textContent; 
  const jobTitleText = jobTitle.textContent; 
  nameInput.value = nameTitleText; 
  jobInput.value = jobTitleText; 
};

const closePopupProfile = function(){
  closePopup(popupElement);
};

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
  closePopup(popupElement);
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupKey)
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  
}
function closePopupKey(evt){
  if (evt.key === 'Escape'){
    const popupKey = document.querySelector('.popup_opened')
    closePopup(popupKey);
  }
}
function closePopupClickOverplay(event){ 
  const popupOver = document.querySelector('.popup_opened')
  if (event.target !== event.currentTarget){ 
    return; 
  } 
  closePopup(popupOver) 
} 

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopupProfile);
popupCloseButtonElement.addEventListener('click', closePopupProfile);
popupCardsOpenButtonElement.addEventListener('click', openPopupCards);
popupCardsCloseButtonElement.addEventListener('click', closePopupCards);
popupElement.addEventListener('click', closePopupClickOverplay);
popupCardsElement.addEventListener('click', closePopupClickOverplay);
popupOpenCard.addEventListener('click', closePopupClickOverplay);
