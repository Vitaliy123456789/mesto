export class Api {
  constructor(options) {
    this._options = options
    this._request = 'https://mesto.nomoreparties.co/v1/cohort-66'
    this._authorization = '7b637c74-9eb7-4fcd-803e-d6800cc6f924'
  }
_checkRes(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
  getInitialCards(){
    return fetch(`${this._request}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkRes);
  }
  getCreateCards({name, link}){
    return fetch(`${this._request}/cards`,{
      method:'POST',
      body: JSON.stringify({name, link}),
      headers: {
        'Content-Type': 'application/json',
        authorization: this._authorization
      }
    })
      .then(this._checkRes);
  }
  editingUserProfile(data){
   return fetch(`${this._request}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.job
      })
    })
    .then(this._checkRes)
  }
  getUserAvatar(data){
    return fetch(`${this._request}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(this._checkRes)
  }
  getUserInfo(){
    return fetch(`${this._request}/users/me/`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._checkRes)
  }
deleteCard(cardId){
    return fetch(`${this._request}/cards/` +cardId, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      },
    })
    .then(this._checkRes)
}
putLike(cardId){
    return fetch(`${this._request}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      },
    })
    .then(this._checkRes)
}
deleteLike(cardId){
  return fetch(`${this._request}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: {
      authorization: this._authorization
    },
  })
  .then(this._checkRes)
}
}
