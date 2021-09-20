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

// Input Elements
const firstNameEl = document.getElementById("first");
const lastNameEl = document.getElementById("last");
const emailEl = document.getElementById("email");
const birthdateEl = document.getElementById("birthdate");
const quantityEl = document.getElementById("quantity");
const locationEl = document.querySelectorAll("input[name='location']");
const checkbox1El = document.getElementById("checkbox1");

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
const checkTextInput = (input) => {
  let valid = false;
  const value = input.value;
  const parent = input.parentElement;
  if (value.length < 2) {
    parent.setAttribute("data-error", "Veuillez entrer au moins 2 caractères");
  } else {
    parent.removeAttribute("data-error");
    valid = true;
  }
  return valid;
};

//email regex
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkemail = () => {
  let valid = false;
  const email = emailEl.value;
  const emailParent = emailEl.parentElement;
  if (!email.match(emailValid)) {
    emailParent.setAttribute("data-error", "Veuillez entrer un e-mail valide");
  } else {
    emailParent.removeAttribute("data-error");
    valid = true;
  }
  return valid;
};

const checkBirthdate = () => {
  let valid = false;
  const birthdate = birthdateEl.value;
  const today = Date.now();
  const birthdateParse = Date.parse(birthdate);
  const birthdateParent = birthdateEl.parentElement;
  if (birthdate === "" || birthdateParse >= today) {
    birthdateParent.setAttribute(
      "data-error",
      "Veuillez entre une date de naissance valide"
    );
  } else {
    birthdateParent.removeAttribute("data-error");
    valid = true;
  }
  return valid;
};

const checkParticipation = () => {
  let valid = false;
  const quantity = quantityEl.value;
  const quantityParent = quantityEl.parentElement;
  if (quantity === "") {
    quantityParent.setAttribute("data-error", "Veuillez entrer un nombre");
  } else {
    quantityParent.removeAttribute("data-error");
    valid = true;
  }
  return valid;
};

const checkCity = () => {
  let valid = false;
  const locationParent = document.querySelector(".radio-btn");
  let checkboxChecked = 0;
  for (let i = 0; i < locationEl.length; i++) {
    if (locationEl[i].checked) {
      checkboxChecked++;
    }
  }
  if (checkboxChecked === 0) {
    locationParent.setAttribute(
      "data-error",
      "Veuillez sélectionner une ville"
    );
  } else {
    locationParent.removeAttribute("data-error");
    valid = true;
  }
  return valid;
};

const checkCondition = () => {
  let valid = false;
  const checkboxParent = checkbox1El.parentElement;
  if (!checkbox1El.checked) {
    checkboxParent.setAttribute(
      "data-error",
      "Veuillez accepter les conditions d'utililisation"
    );
  } else {
    checkboxParent.removeAttribute("data-error");
    valid = true;
  }
  return valid;
};

const validationMessage = () => {
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
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstNameValidation = checkTextInput(firstNameEl);
  const lastNameValidation = checkTextInput(lastNameEl);
  const emailValidation = checkemail();
  const birthdateValidation = checkBirthdate();
  const participationValidation = checkParticipation();
  const cityValidation = checkCity();
  const conditionValidation = checkCondition();

  const formValidaton =
    firstNameValidation &&
    lastNameValidation &&
    emailValidation &&
    birthdateValidation &&
    participationValidation &&
    cityValidation &&
    conditionValidation;

  if (formValidaton) {
    validationMessage();
  }
});
