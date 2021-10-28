// Menu responsive

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
const section = document.querySelector(".hero-section");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const footer = document.querySelector("footer");
const topNva = document.querySelector(".topnav");
<<<<<<< HEAD

// Détection de la taille de la fenêtre
=======
>>>>>>> bbda1d3925c0adb6483150685a0b36e76dc11ef3
w = window.innerWidth;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  section.style.opacity = "0";
  section.style.position = "fixed";
  if (w > "992") {
    footer.style.display = "none";
    topNva.style.display = "none";
  }
}

// close modal
const close = document.querySelector(".close");
const closeSuccess = document.querySelector("#success input[type=submit]");
close.addEventListener("click", closeModal);
closeSuccess.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
  section.style.opacity = "1";
  section.style.position = "initial";
  footer.style.display = "initial";
  topNva.style.display = "initial";
}

// Implémenter entrées formulaire
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const cgu = document.getElementById("checkbox1");

// Erreurs
const errorFirst = document.getElementById("error-first");
const errorLast = document.getElementById("error-last");
const errorMail = document.getElementById("error-mail");
const errorQuantity = document.getElementById("error-quantity");
const errorLocation = document.getElementById("error-location");
const errorCgu = document.getElementById("error-cgu");
const errorBirth = document.getElementById("error-birth");

<<<<<<< HEAD
// Modal Succes
=======
//Succes
>>>>>>> bbda1d3925c0adb6483150685a0b36e76dc11ef3
const success = document.getElementById("success");

// Empecher de soumettre le formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Envoie pour validation des données
  validate(e);
});

// Fonction validation des champs du formulaire

function validate(e) {
  //Validation du Prénom
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
    errorFirst.style.color = "#fe142f";
    errorFirst.style.fontSize = "0.8rem";
    errorFirst.style.marginTop = "10px";
    firstName.style.border = "solid #fe142f 2px";
  } else {
    errorFirst.style.display = "none";
    firstName.style.border = "none";
    firstValid = true;
  }

  //Validation du nom

  let lastValid;

  if (
    !lastName.value.match(regexName) ||
    lastName.value == " " ||
    lastName.value == null ||
    lastName.value.length < 2
  ) {
    errorLast.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
    errorLast.style.color = "#fe142f";
    errorLast.style.fontSize = "0.8rem";
    errorLast.style.marginTop = "10px";
    lastName.style.border = "solid #fe142f 2px";
  } else {
    errorLast.style.display = "none";
    lastName.style.border = "none";
    lastValid = true;
  }

  //Validation du mail

  let eMailValid;
  let regexMail =
    /^[a-z0-9!#$%&'*+/=?^_`{~-]+((\.[a-z0-9!#$%&'*+/=?^_`{~-]+)?)+@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/; //RFC 2822

  if (!eMail.value.match(regexMail)) {
    errorMail.innerText = "Veuillez renseigner une adresse mail valide";
    errorMail.style.color = "#fe142f";
    errorMail.style.fontSize = "0.8rem";
    errorMail.style.marginTop = "10px";
    eMail.style.border = "solid #fe142f 2px";
  } else {
    errorMail.style.display = "none";
    eMail.style.border = "none";
    eMailValid = true;
  }

  // Validation date de naissance

  let birthDateValid;
  let regexDate = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/; //format YYYY-MM-DD

  if (!birthDate.value.match(regexDate)) {
    errorBirth.innerText = "Veuillez remplir votre date de naissance";
    errorBirth.style.color = "#fe142f";
    errorBirth.style.fontSize = "0.8rem";
    errorBirth.style.marginTop = "10px";
    birthDate.style.border = "solid #fe142f 2px";
  } else {
    errorBirth.style.display = "none";
    birthDate.style.border = "none";
    birthDateValid = true;
  }

  //Validation du nombre de concours

  let quantityValid;
  let nombre = /^[0-9]+$/;

  if (!quantity.value.match(nombre)) {
    errorQuantity.innerText = "Vous devez indiquer un nombre";
    errorQuantity.style.color = "#fe142f";
    errorQuantity.style.fontSize = "0.8rem";
    errorQuantity.style.marginTop = "10px";
    errorQuantity.style.marginBottom = "20px";
    quantity.style.border = "solid #fe142f 2px";
  } else {
    errorQuantity.style.display = "none";
    quantity.style.border = "none";
    quantityValid = true;
  }

  //Validation d'un bouton radio séléctionné

  let radioValid;
  let location = e.target.elements.location;

  for (let i = 0; i < location.length; i++) {
    const element = location[i];

    if (!location[i].checked) {
      errorLocation.innerText = "Vous devez choisir une ville";
      errorLocation.style.color = "#fe142f";
      errorLocation.style.fontSize = "0.8rem";
      errorLocation.style.marginTop = "10px";
      errorLocation.style.marginBottom = "20px";
    } else {
      errorLocation.style.display = "none";
      radioValid = true;
    }
  }

  //Validation des conditions générales d'utilisation

  let cguValid;

  if (!cgu.checked) {
    errorCgu.innerText =
      "Vous devez vérifier que vous acceptez les conditions d'utilisation";
    errorCgu.style.color = "#fe142f";
    errorCgu.style.fontSize = "0.8rem";
    errorCgu.style.marginTop = "10px";
    errorCgu.style.marginBottom = "20px";
  } else {
    errorCgu.style.display = "none";
    cguValid = true;
  }

  //Confiramtion envoi avec succes du formulaire

  if (
    firstValid == true &&
    lastValid == true &&
    eMailValid == true &&
    quantityValid == true &&
    radioValid == true &&
    cguValid == true &&
    birthDateValid == true
  ) {
    form.style.display = "none";
    success.style.display = "flex";
  }
}
