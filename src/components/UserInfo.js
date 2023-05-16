export class UserInfo{
  constructor({nameSelector, infoSelector}){
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
    this._nameSelectorTitle = document.querySelector('.profile__title');
    this._infoSelectorTitle = document.querySelector('.profile__subtitle')
  }
  getUserInfo(){
    this._nameTitleText = this._nameSelectorTitle.textContent; 
    this._infoTitleText = this._infoSelectorTitle.textContent; 
    this._nameSelector.value = this._nameTitleText; 
    this._infoSelector.value = this._infoTitleText; 
  }
  setUserInfo(){
    this._nameSelectorTitle.textContent = this._nameSelector.value;
    this._infoSelectorTitle.textContent = this._infoSelector.value;
  }
}