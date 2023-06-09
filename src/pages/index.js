import {FormValidator} from '../components/FormValidator.js'
import {Card} from '../components/Card.js'
import {Section} from '../components/Section.js'
import {PopupWithImage} from '../components/PopupWithImage.js'
import {PopupWithForm} from '../components/PopupWithForm.js'
import {UserInfo} from '../components/UserInfo.js'
import './index.css';
import {Api} from '../components/api.js'
import {PopupDelete} from '../components/PopupDelete.js'
const profileForm = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup__input_title_name');
const jobInput = document.querySelector('.popup__input_title_job');
const profilePopup = document.querySelector('.popup-profile');
const profileOpenButton = document.querySelector('.profile__button');
const cardsPopup = document.querySelector('.popup-cards');
const cardsPopupOpenButton= document.querySelector('.profile__addbutton');
const popupOpenCard = document.querySelector('.popup-opencard');
const formElementCard = document.querySelector('.popup-cards__form');
const cardSection = document.querySelector('.elements')
const cardTemplate = document.querySelector(".item-template");
const deleteForPopup = document.querySelector('.popup-delete');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__img');
const avatarPopup = document.querySelector('.popup-avatar');
const formAvatar = document.querySelector('.popup-avatar__form');

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
const avatarFormValidation = new FormValidator(enableValidationConfig, formAvatar)
profileFormValidation.enableValidation();
cardFormValidation.enableValidation();
avatarFormValidation.enableValidation()

const handleProfileFormSubmit = (data) => {
  api.editingUserProfile(data).then(res => {
    profileInfo.setUserInfo({userName: res.name, userInfo: res.about})
    popupEditProfile.close();
  })
};

profileOpenButton.addEventListener('click', () =>{
  popupEditProfile.open()
  const profileData = profileInfo.getUserInfo();
  nameInput.value = profileData.userName;
  jobInput.value = profileData.userInfo;
});
cardsPopupOpenButton.addEventListener('click', () =>{
  popupAddCard.open()
});

const handleCardFormSubmit = (inputInfo) => {
  api.getCreateCards(inputInfo).then((res) => {
    const cardElement = createCard(res)
    section.addItem(cardElement);
  }).catch((err) => {
    console.log(err);
  });

   cardFormValidation.disablebutton();
 };

function createCard(item) {
  const card = new Card({data: item, handleCardClick: ()=>{popupImage.open({name:item.name, link:item.link})} },
   cardTemplate, userId, () => {
    deletePopup.open(card, id)
  },  
  () => {
    const isLike = card.isLiked(userId);
    if(isLike){
      api.deleteLike(id).then((res) =>{
        card.deleteLike();
        card.setLike(res.likes)
        card.rewrite(res.likes)
      }).catch((err) => {
        console.log(err);
      });
    }
    else{
      api.putLike(id).then((res) => {
        card.addLike();
        card.setLike(res.likes)
        card.rewrite(res.likes)
    }).catch((err) => {
      console.log(err);
    });
    }
  },
  )
  const id = card.getId()
  const cardElement = card.generalCard(userId);
  return cardElement
}

function renderCard(cardData) {
  const cardElement = createCard(cardData)
  section.addItem(cardElement)
}
const section = new Section(cardSection)

const popupImage = new PopupWithImage(popupOpenCard);
popupImage.setEventListeners()

const popupEditProfile = new PopupWithForm (profilePopup, handleProfileFormSubmit);
popupEditProfile.setEventListeners();
popupEditProfile.Button()

const popupAddCard = new PopupWithForm (cardsPopup, handleCardFormSubmit)
popupAddCard.setEventListeners()
popupAddCard.close();
popupAddCard.Button()
const profileInfo = new UserInfo({profileNameSelector:'.profile__title', profileInfoSelector:'.profile__subtitle' })

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924',
    'Content-Type': 'application/json'
  }
}); 

api.getInitialCards().then((res) =>{
  const item = res
  item.forEach((item) =>{
    renderCard(item)
  })
}).catch((err) => {
  console.log(err);
});
api.getInitialUser().then((res) =>{
  profileName.textContent = res.name;
  profileJob.textContent = res.about;
  profileAvatar.src = res.avatar;
}).catch((err) => {
  console.log(err); 
});

profileAvatar.addEventListener('click', () =>{
  popupEditAvatar.open()
  popupEditAvatar.setEventListeners()
});

const handleAvatarFormSubmit = (data) => {
  api.getUserAvatar(data).then(res =>{
    profileAvatar.src = res.avatar;
  })
  .catch((err) => {
    console.log(err);
  });
  avatarFormValidation.disablebutton()
}

const popupEditAvatar = new PopupWithForm (avatarPopup, handleAvatarFormSubmit)
let userId = null
api.getUserInfo().then(res =>{
  userId = res._id
}).catch((err) => {
  console.log(err);
});

const deletePopup = new PopupDelete(deleteForPopup, (card, _id) =>{
  api.deleteCard(_id).then((res => {
    card.deleteCard();
    deletePopup.close();
  }))
  .catch((err) => {
    console.log(err);
  });
})
deletePopup.setEventListeners()
deletePopup.Button()
