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

// Form fields
const inputTextType = document.querySelectorAll(".text-control");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox = document.getElementById("checkbox1");

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

const isRequired = (value) => {
  if (value === "") {
    return false;
  } else {
    return true;
  }
};

const minLength = (length) => {
  if (length < 2) {
    return false;
  } else {
    return true;
  }
};
const border = () => {
  const inputs = Array.from(inputTextType);
  inputs.map((input) => {
    if (input.value === "") {
      input.classList.add("input-border");
    } else {
      input.classList.remove("input-border");
    }
  });
};

// inputs.forEach((input) => input.classList.add("input-border"));

// Email Regex
const isEmailValid = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
};

const textError = (tag, message) => {
  const span = document.querySelector("." + tag + "-container .error");
  span.textContent = message;
};

//First name validation
const checkFirstName = () => {
  const firstNameField = firstName.value;

  if (!isRequired(firstNameField)) {
    textError("firstname", "Veuillez entrer un prénom");
  } else if (!minLength(firstNameField.length)) {
    textError("firstname", "Veuillez entrer 2 caractères minimum ");
  } else {
    textError("firstname", "");
  }
};

const checkLastName = () => {
  const lastNameField = lastName.value;

  if (!isRequired(lastNameField)) {
    textError("lastname", "Veuillez entrer un nom");
  } else if (!minLength(lastNameField.length)) {
    textError("lastname", "Veuillez entrer 2 caractères minimum ");
  } else {
    textError("lastname", "");
  }
};

const checkEmail = () => {
  const emailField = email.value;
  if (!isRequired(emailField)) {
    textError("email", "Veuillez entrer un e-mail");
  } else if (!isEmailValid(emailField)) {
    textError("email", "Veuillez entrer un email valide");
  } else {
    textError("email", "");
  }
};

const checkBirthDate = () => {
  const dateField = birthDate.value;
  if (!isRequired(dateField)) {
    textError("birthdate", "Veuillez entrer une date de naissance");
  } else {
    textError("birthdate", "");
  }
};
const checkQuantity = () => {
  const quantityField = quantity.value;
  if (!isRequired(quantityField)) {
    textError("quantity", "Veuillez entrer un nombre");
  } else {
    textError("quantity", "");
  }
};
const checkRadio = () => {
  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    textError("radio", "Veuillez sélectionner une ville");
  } else {
    textError("radio", "");
  }
};
const checkCheckbox = () => {
  if (!checkbox.checked) {
    textError("checkbox", "Veuillez accepter  les conditions d'utilisation");
  } else {
    textError("checkbox", "");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (firstName.value.length < 2) {
  //   textError.innerHTML = "<p>Veuillez entrer au moins 2 caractères</p>";
  // } else if (lastName.value.length < 2) {
  //   textError.innerHTML = "<p>Veuillez entrer au moins 2 caractères</p>";
  // }
});
function validate() {
  checkFirstName();
  checkLastName();
  checkEmail();
  checkBirthDate();
  checkQuantity();
  checkRadio();
  checkCheckbox();
  border();
}
