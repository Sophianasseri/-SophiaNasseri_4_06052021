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

const validate = (event) => {
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

  const inputs = Array.from(inputTextType);
  inputs.map((input, index) => {
    console.log(index);
    if (input.value === "" || input.value.length < 2 || !isEmailValid()) {
      input.classList.add("input-border");
    } else {
      input.classList.remove("input-border");
      return true;
    }
  });

  //First name validation

  const firstNameField = firstName.value;

  if (!isRequired(firstNameField)) {
    textError("firstname", "Veuillez entrer un prénom");
    event.preventDefault();
  } else if (!minLength(firstNameField.length)) {
    textError("firstname", "Veuillez entrer 2 caractères minimum ");
    event.preventDefault();
  } else {
    textError("firstname", "");
  }

  const lastNameField = lastName.value;

  if (!isRequired(lastNameField)) {
    textError("lastname", "Veuillez entrer un nom");
    event.preventDefault();
  } else if (!minLength(lastNameField.length)) {
    textError("lastname", "Veuillez entrer 2 caractères minimum ");
    event.preventDefault();
  } else {
    textError("lastname", "");
  }

  const emailField = email.value;
  if (!isRequired(emailField)) {
    textError("email", "Veuillez entrer un e-mail");
    event.preventDefault();
  } else if (!isEmailValid(emailField)) {
    textError("email", "Veuillez entrer un email valide");
    event.preventDefault();
  } else {
    textError("email", "");
  }

  const dateField = birthDate.value;
  if (!isRequired(dateField)) {
    textError("birthdate", "Veuillez entrer une date de naissance");
    event.preventDefault();
  } else {
    textError("birthdate", "");
  }

  const quantityField = quantity.value;
  if (!isRequired(quantityField)) {
    textError("quantity", "Veuillez entrer un nombre");
    event.preventDefault();
  } else {
    textError("quantity", "");
  }

  if (
    location1.checked == false &&
    location2.checked == false &&
    location3.checked == false &&
    location4.checked == false &&
    location5.checked == false &&
    location6.checked == false
  ) {
    textError("radio", "Veuillez sélectionner une ville");
    event.preventDefault();
  } else {
    textError("radio", "");
  }
  if (!checkbox.checked) {
    textError("checkbox", "Veuillez accepter  les conditions d'utilisation");
    event.preventDefault();
  } else {
    textError("checkbox", "");
  }
};
