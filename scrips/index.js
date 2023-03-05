
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__container-input-name');
let jobInput = document.querySelector('.popup__container-input-job');
let nameTitle = document.querySelector('.profie__title');
let jobTitle = document.querySelector('.profile__subtitle');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__button');
const popupOpenButtonElement = document.querySelector('.profile__button');
const togglePopupVisible = function(){
  popupElement.classList.toggle('popup_opened');
};
const closePopupClickOverplay = function(event){
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget){
    return;
  }
  togglePopupVisible()
}
function handleFormSubmit (evt) {
  evt.preventDefault(); 

  nameTitle.textContent = nameInput.value;
  jobTitle.textContent = jobInput.value;
}

function onClick(){
  const NameTitleText = nameTitle.textContent;
  const JobTitleText = jobTitle.textContent;
  nameInput.value = NameTitleText;
  jobInput.value = JobTitleText;
}

formElement.addEventListener('submit', handleFormSubmit);
popupOpenButtonElement.addEventListener('click', togglePopupVisible);
popupCloseButtonElement.addEventListener('click', togglePopupVisible);
popupElement.addEventListener('click', closePopupClickOverplay);
popupOpenButtonElement.addEventListener('click', onClick);



