function RedirectToRandomProfile() {

    var request = new XMLHttpRequest();
    var requestURL = "./PetCount";
    request.open('GET', requestURL);


    request.setRequestHeader(
      'Content-Type',
      'application/json'
    );

    request.addEventListener('load', function (req) {
      if (req.target.status === 200) {
            var max = 5;

          if (JSON.parse(request.responseText).petCount){

            max = JSON.parse(request.responseText).petCount;

          }
          var num = Math.floor(Math.random() * Math.floor(max))
          var string = '/pets/' + num;
          window.location.href = string;
        }
    });

    request.send();


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
  var url = document.getElementById('pet-photo-url-input').value;
  var species = document.getElementById('pet-species-input').value;
  var breed = document.getElementById('pet-breed-input').value;
  var toy = document.getElementById('pet-favorite-toy-input').value;
  var bio = document.getElementById('pet-bio-input').value;

  if (!name || !url || !species || !breed || !toy || !bio) {
    alert("You must fill in all of the fields")
  } else {
    var request = new XMLHttpRequest();
    var requestURL = "/pets/addPet";
    request.open('POST', requestURL);

    var requestBody = JSON.stringify({
      name: name,
      url: url,
      species: species,
      breed: breed,
      toy: toy,
      bio: bio
    });

    request.setRequestHeader(
      'Content-Type',
      'application/json'
    );

    request.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var petCardContext = {
          petName: name,
          profilePic: url
        };
        var petCardHtml = Handlebars.templates.petCardTemplate(petCardContext);
        var petContainer = document.querySelector('main.list-page');
        petContainer.insertAdjacentHTML('beforeend', petCardHtml);
      } else {
        alert("Error storing photo in database: " + event.target.response);
      }
    });

    request.send(requestBody);
    hidePetModal();
  }
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