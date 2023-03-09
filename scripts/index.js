/* открыть и закрыть popup  edit*/
const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_edit');
// popup_type_image переменные
const placePhotobutton = document.querySelector('.place__photo');
const popupImage = document.querySelector('.popup_type_image');
const popupPicture = document.querySelector('.popup__picture');
const popupTextImage = document.querySelector('.popup__text');

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};
const closePopup = (popupElement) => {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};
profileEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = profileInfoName.textContent;
  infoInput.value = profilIinfoText.textContent;
  clearValidation(popupEdit, objectValidate);
});

const closeButtons = document.querySelectorAll('.popup__close');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const popupForm = popupEdit.querySelector('.popup__form');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const infoInput = popupEdit.querySelector('.popup__input_type_info');
const profileInfoName = document.querySelector('.profile__info-name ');
const profilIinfoText = document.querySelector('.profile__info-text ');

/*popup_type_add*/
const profileAddButton = document.querySelector('.profile__add');
const popupAdd = document.querySelector('.popup_type_add');
const formElementAdd = popupAdd.querySelector('.popup__form_type_add');
const titleInput = popupAdd.querySelector('.popup__input_type_title');
const urlInput = popupAdd.querySelector('.popup__input_type_url');
const placePhoto = document.querySelector('.place__photo ');
const placeName = document.querySelector('.place__name ');

profileAddButton.addEventListener('click', () => {
  openPopup(popupAdd);
  formElementAdd.reset();
  clearValidation(popupAdd, objectValidate);
});

function handleFormEditSubmit(evt) {
  evt.preventDefault();
  closePopup(popupEdit);
  profileInfoName.textContent = nameInput.value;
  profilIinfoText.textContent = infoInput.value;
}
popupForm.addEventListener('submit', handleFormEditSubmit);

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  cardSection.prepend(
    createCard({
      link: urlInput.value,
      name: titleInput.value,
    })
  );
  closePopup(popupAdd);
}
formElementAdd.addEventListener('submit', handleFormAddSubmit);

// добавление шаблона
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
const cardTemplate = document.querySelector('.card').content;
const createCard = (object) => {
  const newCard = cardTemplate.querySelector('.place').cloneNode(true);
  const placePhoto = newCard.querySelector('.place__photo');
  const placeName = newCard.querySelector('.place__name');
  const placeButtonLike = newCard.querySelector('.place__button-like');
  const placeButtonTrash = newCard.querySelector('.place__button-trash');

  placePhoto.src = object.link;
  placeName.textContent = object.name;
  placePhoto.alt = object.name;

  placeButtonLike.addEventListener('click', () => {
    placeButtonLike.classList.toggle('place__button-like_active');
  });
  placeButtonTrash.addEventListener('click', () => {
    newCard.remove();
  });
  placePhoto.addEventListener('click', () => {
    openPopup(popupImage);
    popupPicture.src = placePhoto.src;
    popupTextImage.textContent = placeName.textContent;
    popupPicture.alt = placePhoto.alt;
  });

  return newCard;
};

const cardSection = document.querySelector('.places');
initialCards.forEach((card) => {
  cardSection.append(createCard(card));
});

const closePopupEsc = (event) => {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

const closePopupOverlay = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(popupOpened);
  }
};
const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('click', closePopupOverlay);
});
