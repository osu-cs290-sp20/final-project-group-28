function RedirectToRandomProfile() {
  var max = 5;
  var num = Math.floor(Math.random() * Math.floor(max))
  var string = '/pets/' + num;
  window.location.href = string;
}

function showAddPetModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createPetModal = document.getElementById('create-pet-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createPetModal.classList.remove('hidden');
}

function clearPetInputValues() {

  var petInputElems = document.getElementsByClassName('pet-input-element');
  for (var i = 0; i < petInputElems.length; i++) {
    var input = petInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}

function hidePetModal() {
  var modalBackdrop = document.getElementById('modal-backdrop');
  var createPetModal = document.getElementById('create-pet-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createPetModal.classList.add('hidden');

  clearPetInputValues();
}


function handleModalAcceptClick() {
  var name = document.getElementById('name-text-input').value;
  var petPhotoURL = document.getElementById('pet-photo-url-input').value;
  /*var petSpecies = document.getElementById('pet-species-input').value;
  var petBreed = document.getElementById('pet-breed-input').value;
  var petFavoriteToy = document.getElementById('pet-favorite-toy-input').value;
  var petBio = document.getElementById('pet-bio-input').value;*/

  var petCardContext = {
    petName: name,
    profilePic: petPhotoURL
  };

  console.log(name);
  console.log(petPhotoURL);

  var petCardHtml = Handlebars.templates.petCardTemplate(petCardContext);
  var petContainer = document.querySelector('main.list-page');
  petContainer.insertAdjacentHTML('beforeend', petCardHtml);

  hidePetModal();
}

window.addEventListener('DOMContentLoaded', function () {
  var RandomProfButton = document.getElementById('random-pet-button');
  if (RandomProfButton) {
        RandomProfButton.addEventListener('click', RedirectToRandomProfile);
  }

  var addPetButton = document.getElementById('add-pet-link');
  if (addPetButton) {
    addPetButton.addEventListener('click', showAddPetModal);
  }

  var modalCloseButton = document.querySelector('#create-pet-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hidePetModal);
  }

  var modalCancalButton = document.querySelector('#create-pet-modal .modal-cancel-button');
  if (modalCancalButton) {
    modalCancalButton.addEventListener('click', hidePetModal);
  }

  var modalAcceptButton = document.querySelector('#create-pet-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

});