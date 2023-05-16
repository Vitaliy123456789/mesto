import {FormValidator} from '../components/FormValidator.js'
import {Card} from '../components/Card.js'
import {Section} from '../components/Section.js'
import {Popup} from '../components/Popup.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import './index.css';
const profileForm = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup__input_title_name');
const jobInput = document.querySelector('.popup__input_title_job');
const profilePopup = document.querySelector('.popup-profile');
const profileOpenButton = document.querySelector('.profile__button');
const cardsPopup = document.querySelector('.popup-cards');
const cardsPopupOpenButton= document.querySelector('.profile__addbutton');
const cardInputName = document.querySelector('.popup-cards__input_name');
const cardInputUrl = document.querySelector('.popup-cards__input_url');
const popupOpenCard = document.querySelector('.popup-opencard');
const formElementCard = document.querySelector('.popup-cards__form');
const cardSection = document.querySelector('.elements')
const cardTemplate = document.querySelector(".item-template");
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
const cardFormValidation = new FormValidator(enableValidationConfig, formElementCard)

profileFormValidation.enableValidation();
cardFormValidation.enableValidation();

function handleProfileFormSubmit () {
  profileInfo.setUserInfo()
  popupProfil.close();
  
};

profileOpenButton.addEventListener('click', () =>{
  popupProfil.open()
  profileInfo.getUserInfo()
});
cardsPopupOpenButton.addEventListener('click', () =>{
  popupCards.open()
});

const handleCardFormSubmit = () => {
  const item = { name:cardInputName.value , link:cardInputUrl.value } 
  const cardElement = createCard(item)
  cardSection.prepend(cardElement);
  popupCards.close();
   cardFormValidation.disablebutton();
 };

function createCard(item) {
  const card = new Card({data: item, handleCardClick: ()=>{popupWith.open({name:item.name, link:item.link})} }, cardTemplate);
  const cardElement = card.generalCard();
  return cardElement
}

function renderCard(cardData) {
  const cardElement = createCard(cardData)
  section.addItem(cardElement)
}

const section = new Section({items: initialCards, renderer: renderCard}, cardSection)
section.renderItems()

const popupCards = new Popup (cardsPopup)
popupCards.setEventListeners()

const popupProfil = new Popup (profilePopup)
popupProfil.setEventListeners()

const popupWith = new PopupWithImage(popupOpenCard);
popupWith.setEventListeners()


const popupProf = new PopupWithForm (profilePopup, handleProfileFormSubmit)
popupProf.setEventListeners()
popupProf.close()

const popupCard = new PopupWithForm (cardsPopup, handleCardFormSubmit)
popupCard.setEventListeners()
popupCard.close()

const profileInfo = new UserInfo({nameSelector:nameInput , infoSelector:jobInput })
