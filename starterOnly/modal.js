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

//Radio btn selection
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

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
        if (inputValue.length < 2 || inputValue === "") {
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
        if (inputValue.length < 2 || inputValue === "") {
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
        if (!inputValue.match(emailValid) || inputValue === "") {
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
        if (
          !location1.checked &&
          !location2.checked &&
          !location3.checked &&
          !location4.checked &&
          !location5.checked &&
          !location6.checked
        ) {
          inputParent.setAttribute(
            "data-error",
            "Veuillez sélectionner une ville"
          );
          valid = false;
        } else {
          inputParent.removeAttribute("data-error");
          valid = true;
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
