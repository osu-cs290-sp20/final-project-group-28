function RedirectToRandomProfile() {
  var max = 5;
  var num = Math.floor(Math.random() * Math.floor(max))
  var string = '/pets/' + num;
  window.location.href = string;
}


window.addEventListener('DOMContentLoaded', function () {



  var RandomProfButton = document.getElementById('random-pet-button');
  if (RandomProfButton) {
        RandomProfButton.addEventListener('click', RedirectToRandomProfile);
  }

})