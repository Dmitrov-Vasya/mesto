/* открыть и закрыть popup */
const openPopup = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");

const handleOpenPopupClick = () => {
  popup.classList.add("popup_opened");
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profilIinfoText.textContent;
};
openPopup.addEventListener("click", handleOpenPopupClick);

const closePopup = document.querySelector(".popup__close");
const handleClosePopupClick = () => {
  popup.classList.remove("popup_opened");
};
closePopup.addEventListener("click", handleClosePopupClick);

/* изменить данные и сохранить в  popup */

const formElement = popup.querySelector(".popup__form");
const nameInput = popup.querySelector(".popup__input_type_name");
const jobInput = popup.querySelector(".popup__input_type_info");
const profileInfoName = document.querySelector(".profile__info-name ");
const profilIinfoText = document.querySelector(".profile__info-text ");
function handleFormSubmit(evt) {
  evt.preventDefault();
  handleClosePopupClick();
  profileInfoName.textContent = nameInput.value;
  profilIinfoText.textContent = jobInput.value;
}

formElement.addEventListener("submit", handleFormSubmit);
