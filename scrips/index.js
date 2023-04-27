import {FormValidator} from './FormValidator.js'
import {Card} from './Card.js'
export {cardButton, popupImage, popupTitle, popupOpenCard, openPopup,}
const profileForm = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup__input_title_name');
const jobInput = document.querySelector('.popup__input_title_job');
const nameTitle = document.querySelector('.profile__title');
const jobTitle = document.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('.popup-profile');
const profileCloseButton = profilePopup.querySelector('.popup-profile__button');
const profileOpenButton = document.querySelector('.profile__button');
const popupCardsElement = document.querySelector('.popup-cards');
const popupCardsCloseButtonElement = document.querySelector('.popup-cards__button');
const popupCardsOpenButtonElement = document.querySelector('.profile__addbutton');
const cardInputName = document.querySelector('.popup-cards__input_name');
const cardInputUrl = document.querySelector('.popup-cards__input_url');
const cardButton = document.querySelector('.popup-cards__container-button');
const popupOpenCard = document.querySelector('.popup-opencard');
const popupOpenCardButton = document.querySelector('.popup-opencard__button');
const formElementCard = document.querySelector('.popup-cards__form');
const popupImage = document.querySelector('.popup-opencard__img');
const popupTitle = document.querySelector('.popup-opencard__title');
const cardSection = document.querySelector('.elements')
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
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__container-button',
  activeButtonclass: 'popup__container-button_valid',
  inactiveButtonclass: 'popup__container-button_invalid',
  inputErrorClass: 'popup__input_error',
}; 
const profileFormValidation = new FormValidator(enableValidationConfig, profileForm)
const cardeFormValidation = new FormValidator(enableValidationConfig, formElementCard)

profileFormValidation.enableValidation();
cardeFormValidation.enableValidation();

function closeCardPopup (){
  closePopup(popupOpenCard);
 }

popupOpenCardButton.addEventListener('click', closeCardPopup);
const openPopupCards = function(){
  openPopup(popupCardsElement);
}

const closePopupCards = function(){
  closePopup(popupCardsElement);
};
const openPopupProfile = function(){
  openPopup(profilePopup);
  const nameTitleText = nameTitle.textContent; 
  const jobTitleText = jobTitle.textContent; 
  nameInput.value = nameTitleText; 
  jobInput.value = jobTitleText; 
};

const closePopupProfile = function(){
  closePopup(profilePopup);
};

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); 
  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
  closePopup(profilePopup);
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
 
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape)
  
}
function handleEscape(evt){
  if (evt.key === 'Escape'){
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}
function closePopupClickOverplay(event){ 
  if (event.target !== event.currentTarget){ 
    return; 
  } 
  closePopup(event.currentTarget) 
} 

profileForm.addEventListener('submit', handleProfileFormSubmit);
profileOpenButton.addEventListener('click', openPopupProfile);
profileCloseButton.addEventListener('click', closePopupProfile);
popupCardsOpenButtonElement.addEventListener('click', openPopupCards);
popupCardsCloseButtonElement.addEventListener('click', closePopupCards);
profilePopup.addEventListener('click', closePopupClickOverplay);
popupCardsElement.addEventListener('click', closePopupClickOverplay);
popupOpenCard.addEventListener('click', closePopupClickOverplay);


const handleformSubmit = (evt) => {
  evt.preventDefault();
  const item = { name:cardInputName.value , link:cardInputUrl.value } 
  const cardElement = createCard(item)
  cardSection.prepend(cardElement);
   closePopupCards();
   evt.target.reset()
   cardeFormValidation.disablebutton(cardButton)
 };

 formElementCard.addEventListener('submit', handleformSubmit);

 function createCard(item) {
  const card = new Card(item.name, item.link);
  const cardElement = card.generalCard();
  return cardElement
}

initialCards.forEach((item) => {
  const cardElement = createCard(item)
  cardSection.append(cardElement);
})