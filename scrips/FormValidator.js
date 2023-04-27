export class FormValidator {
  constructor(enableValidationConfig, formElement) {
    this._formSelector = enableValidationConfig.formSelector;
    this._inputSelector = enableValidationConfig.inputSelector;
    this._submitButtonSelector = enableValidationConfig.submitButtonSelector;
    this._activeButtonclass = enableValidationConfig.activeButtonclass;
    this._inactiveButtonclass = enableValidationConfig.inactiveButtonclass;
    this._inputErrorClass = enableValidationConfig.inputErrorClass;
    this._form = formElement;
  }

  enableValidation = () => {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
  _setEventListeners = () => {
    this._formInputs = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._formButton = this._form.querySelector(this._submitButtonSelector);
    this.disablebutton(this._formButton);
    this._formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValid(input);
        if (this._hasInvalidInput(this._formInputs)) {
          this.disablebutton(this._formButton);
        } else {
          this._enabelButton(this._formButton);
        }
      });
    });
  };
  _checkInputValid = (input) => {
    const inputErrorMes = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
      inputErrorMes.textContent = "";
      this._removeRed(input);
    } else {
      inputErrorMes.textContent = input.validationMessage;
      this._addRed(input);
    }
  };
  _hasInvalidInput = (formInputs) => {
    return formInputs.some((item) => !item.validity.valid);
  };

  _enabelButton = (button) => {
    button.classList.add(this._activeButtonclass);
    button.classList.remove(this._inactiveButtonclass);
    button.removeAttribute("disabled");
  };

  disablebutton = (button) => {
    button.classList.remove(this._activeButtonclass);
    button.classList.add(this._inactiveButtonclass);
    button.setAttribute("disabled", true);
  };
  _addRed = (input) => {
    input.classList.add(this._inputErrorClass);
  };
  _removeRed = (input) => {
    input.classList.remove(this._inputErrorClass);
  };
}
