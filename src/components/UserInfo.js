export class UserInfo{
  constructor({profileNameSelector, profileInfoSelector}){
    this._profileName = document.querySelector(profileNameSelector);
    this._profileInfo = document.querySelector(profileInfoSelector)
  }
  getUserInfo(){
    return {
      userName: this._profileName.textContent,
      userInfo: this._profileInfo.textContent,
    }
  }
  setUserInfo(userData){
    this._profileName.textContent = userData.userName;
    this._profileInfo.textContent = userData.userInfo;
  }
}