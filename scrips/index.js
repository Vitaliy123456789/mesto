
let formElement = document.querySelector('.popup__container-form');
let nameInput = document.querySelector('.popup__container-input_name');
let jobInput = document.querySelector('.popup__container-input_job');
let nameTitle = document.querySelector('.profile__title');
let jobTitle = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button');
const popupOpenButtonElement = document.querySelector('.profile__button');
const openPopup = function(){
  popupElement.classList.add('popup_opened');
};
const closePopup = function(){
  popupElement.classList.remove('popup_opened');
};

const closePopupClickOverplay = function(event){
  if (event.target !== event.currentTarget){
    return;
  }
  closePopup()
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);





