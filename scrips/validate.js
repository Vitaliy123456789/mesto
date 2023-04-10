
const enableValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__container-button',
  activeButtonclass: 'popup__container-button_valid',
  inactiveButtonclass: 'popup__container-button_invalid',
  inputErrorClass: 'popup__input_error',
}; 


const enableValidation = ({formSelector, ...rest}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    form.addEventListener('submit', (evt) =>{
      evt.preventDefault()
      })
      setEvent(form, rest)
})

}

const setEvent = (formTo,{inputSelector, submitButtonSelector, ...rest }) =>{
  const formInputs = Array.from(formTo.querySelectorAll(inputSelector));
  const formButton = formTo.querySelector(submitButtonSelector)
   disablebutton(formButton, rest)
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
       checkInputValid(input, rest)
      if (hasInvalidInput(formInputs)) {
        disablebutton(formButton, rest)
        
      } else {
        enabelButton(formButton, rest)
        
      }
    })
  })
}

const checkInputValid = (input, {errorClass, ...rest}) => {
  const inputErrorMes = document.querySelector(`#${input.id}-error`)
if (input.checkValidity()){
  inputErrorMes.textContent = ''
  removeRed(input, rest)
} else {
  inputErrorMes.textContent = input.validationMessage
  addRed(input, rest);
}
}

const hasInvalidInput = (formInputs) =>{
  return formInputs.some(item => !item.validity.valid)
}

const enabelButton = (button, {activeButtonclass, inactiveButtonclass }) => {
button.classList.add(activeButtonclass);
button.classList.remove(inactiveButtonclass);
button.removeAttribute('disabled'); 
}

const disablebutton = (button, {activeButtonclass, inactiveButtonclass}) => {
  button.classList.remove(activeButtonclass);
  button.classList.add(inactiveButtonclass);
button.setAttribute('disabled', true)
}
 const addRed = (input, {inputErrorClass}) =>{
     input.classList.add(inputErrorClass);
}
const removeRed = (input,{inputErrorClass}) => {
  input.classList.remove(inputErrorClass);
}

enableValidation(enableValidationConfig)


