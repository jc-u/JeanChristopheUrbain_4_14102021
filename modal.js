function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
const close = document.querySelector(".close");
close.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

// Implémenter entrées formulaire
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location1");
const location4 = document.getElementById("location1");
const location5 = document.getElementById("location1");
const location6 = document.getElementById("location1");

// Erreurs
const errorFirst = document.getElementById("error-first");
const errorLast = document.getElementById("error-last");
const errorMail = document.getElementById("error-mail");

// Empecher de soumettre le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Fonction validation des champs du formulaire
function validate() {
  let firstValid;
  let regexName = /^[a-z ,.'-]+$/i;

  if (
    !firstName.value.match(regexName) ||
    firstName.value == " " ||
    firstName.value == null ||
    firstName.value.length < 2
  ) {
    errorFirst.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    errorFirst.style.color = "red";
    errorFirst.style.fontSize = "0.8rem";
    errorFirst.style.marginTop = "10px";
    firstName.style.border = "solid red 2px";
  } else {
    errorFirst.style.display = "none";
    firstName.style.border = "none";
    firstValid = true;
  }

  let lastValid;

  if (
    !lastName.value.match(regexName) ||
    lastName.value == " " ||
    lastName.value == null ||
    lastName.value.length < 2
  ) {
    errorLast.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
    errorLast.style.color = "red";
    errorLast.style.fontSize = "0.8rem";
    errorLast.style.marginTop = "10px";
    lastName.style.border = "solid red 2px";
  } else {
    errorLast.style.display = "none";
    lastName.style.border = "none";
    lastValid = true;
  }

  let eMailValid;
  let regexMail =
    /^[a-z0-9!#$%&'*+/=?^_`{~-]+((\.[a-z0-9!#$%&'*+/=?^_`{~-]+)?)+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/; //RFC 2822

  if (!eMail.value.match(regexMail)) {
    errorMail.innerText = "Veuillez renseigner une adresse mail valide";
    errorMail.style.color = "red";
    errorMail.style.fontSize = "0.8rem";
    errorMail.style.marginTop = "10px";
    eMail.style.border = "solid red 2px";
  } else {
    errorMail.style.display = "none";
    eMail.style.border = "none";
    eMailValid = true;
  }
}
