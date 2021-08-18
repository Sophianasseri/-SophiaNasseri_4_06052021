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
const closeModal = document.querySelector(".close");
const form = document.getElementById("suscribe");
const locationEls = document.querySelectorAll("input[name='location']");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event

closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});

// Form submit validation

const validate = (event) => {
  let valid = false;
  event.preventDefault();

  //Select all inputs
  let formInputs = document.querySelectorAll("input");

  //Email regex
  const emailValid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //Form Conditions

  formInputs.forEach((inputElement) => {
    const inputName = inputElement.name;
    const inputValue = inputElement.value;
    const inputParent = inputElement.parentElement;

    switch (inputName) {
      case "first":
        if (inputValue.length < 2) {
          inputParent.setAttribute(
            "data-error",
            "Veuillez entrer au moins 2 caractères"
          );
        } else {
          inputParent.removeAttribute("data-error");
          valid = true;
        }
        break;
      case "last":
        if (inputValue.length < 2) {
          inputParent.setAttribute(
            "data-error",
            "Veuillez entrer au moins 2 caractères"
          );
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
          valid = true;
        }
        break;

      case "email":
        if (!inputValue.match(emailValid)) {
          inputParent.setAttribute(
            "data-error",
            "Veuillez entrer un e-mail valide"
          );
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
          valid = true;
        }
        break;

      case "birthdate":
        if (inputValue === "") {
          inputParent.setAttribute(
            "data-error",
            "Veuillez entre une date de naissance"
          );
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
          valid = true;
        }
        break;

      case "quantity":
        if (inputValue === "") {
          inputParent.setAttribute("data-error", "Veuillez entre un nombre");
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
          valid = true;
        }
        break;
      case "location":
        let checkboxChecked = 0;
        for (let i = 0; i < locationEls.length; i++) {
          if (locationEls[i].checked) {
            checkboxChecked++;
          }
        }
        if (checkboxChecked === 0) {
          inputParent.setAttribute(
            "data-error",
            "Veuillez sélectionner une ville"
          );
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
        }
        break;
      case "checkbox":
        if (!inputElement.checked) {
          inputParent.setAttribute(
            "data-error",
            "Veuillez accepter  les conditions d'utilisation"
          );
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
        }
    }
  });

  // show validation message
  if (valid === true) {
    form.style.display = "none";
    const validation = document.querySelector(".validation");
    validation.style.display = "flex";
    const closeBtn = document.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
      modalbg.style.display = "none";
      validation.style.display = "none";
      form.style.display = "block";
      form.reset();
    });
  }
};
