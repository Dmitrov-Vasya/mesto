const openPopup = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const handleOpenPopupClick = () => {
  popup.classList.add("popup_opened");
};
openPopup.addEventListener("click", handleOpenPopupClick);

const closePopup = document.querySelector(".popup__close");
const handleClosePopupClick = () => {
  popup.classList.remove("popup_opened");
};
closePopup.addEventListener("click", handleClosePopupClick);
