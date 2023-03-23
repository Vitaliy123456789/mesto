let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_title_name');
let jobInput = document.querySelector('.popup__input_title_job');
let nameTitle = document.querySelector('.profile__title');
let jobTitle = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button');
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

 initialCards.forEach(renderItem);

 function renderItem(item) {
  const htmlElement = itemTemplate.cloneNode(true);
   htmlElement.querySelector('.elements__group-title').textContent = item.name;
   htmlElement.querySelector('.elements__element-img').src = item.link;
   htmlElement.querySelector('.elements__element-img').alt = item.name;
   setEventLisners(htmlElement);
   list.prepend(htmlElement);
   return htmlElement;
}

const renderCard = (item) => {
  const cardElement = renderItem(item);
  list.prepend(cardElement);
}

function cardformSubmit (evt) {
 evt.preventDefault();
 const item = { name:cardInputName.value , link:cardInputUrl.value }
  renderCard(item);
  closePopupCards();
};

formElementCard.addEventListener('submit', cardformSubmit);

const openPopupCards = function(){
  popupCardsElement.classList.add('popup-cards_opened');

};

const closePopupCards = function(){
  popupCardsElement.classList.remove('popup-cards_opened');
};

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
  popupTitle.textContent = evt.target.alt;
  popupOpenCard.classList.add('popup-opencard_opened');
 }

function closeCarPopup (){
  popupOpenCard.classList.remove('popup-opencard_opened');
 }

popupOpenCardButton.addEventListener('click', closeCarPopup);

const openPopup = function(){
  popupElement.classList.add('popup_opened');
  const NameTitleText = nameTitle.textContent; 
  const JobTitleText = jobTitle.textContent; 
  nameInput.value = NameTitleText; 
  jobInput.value = JobTitleText; 
};
const closePopup = function(){
  popupElement.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
  closePopup()
};

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupCardsOpenButtonElement.addEventListener('click', openPopupCards);
popupCardsCloseButtonElement.addEventListener('click', closePopupCards);



