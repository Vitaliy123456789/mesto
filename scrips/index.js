
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_title_name');
let jobInput = document.querySelector('.popup__input_title_job');
let nameTitle = document.querySelector('.profile__title');
let jobTitle = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button');
const popupOpenButtonElement = document.querySelector('.profile__button');
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
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);





