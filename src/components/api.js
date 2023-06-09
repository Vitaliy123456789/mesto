export class Api {
  constructor(options) {
    this._options = options
  }
  getInitialCards(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards', {
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
  getCreateCards({name, link}){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards',{
      method:'POST',
      body: JSON.stringify({name, link}),
      headers: {
        'Content-Type': 'application/json',
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      });
  }

  getInitialUser(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
  editingUserProfile(data){
   return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me', {
      method: 'PATCH',
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
  getUserAvatar(data){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }
  getUserInfo(){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/users/me/', {
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
deleteCard(cardId){
    return fetch('https://mesto.nomoreparties.co/v1/cohort-66/cards/' +cardId, {
      method: 'DELETE',
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}
putLike(cardId){
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    })
}
deleteLike(cardId){
  return fetch(`https://mesto.nomoreparties.co/v1/cohort-66/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: {
      authorization: '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
    },
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  })
}
}
