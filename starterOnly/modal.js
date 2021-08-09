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
  event.preventDefault();

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
  inputs.map((input) => {
    if (input.value === "" || input.value.length < 2 || !isEmailValid()) {
      input.parentElement.setAttribute("data-error", "");
    } else {
      input.parentElement.removeAttribute("data-error", "");
    }
  });

  //Input validation

  let valid = false;

  const firstNameField = firstName.value;

  if (!isRequired(firstNameField)) {
    textError("firstname", "Veuillez entrer un prénom");
    valid = false;
  } else if (!minLength(firstNameField.length)) {
    textError("firstname", "Veuillez entrer 2 caractères minimum ");
  } else {
    textError("firstname", "");
    valid = true;
  }

  const lastNameField = lastName.value;

  if (!isRequired(lastNameField)) {
    textError("lastname", "Veuillez entrer un nom");
    valid = false;
  } else if (!minLength(lastNameField.length)) {
    textError("lastname", "Veuillez entrer 2 caractères minimum ");
    valid = false;
  } else {
    valid = true;
    textError("lastname", "");
  }

  const emailField = email.value;
  if (!isRequired(emailField)) {
    textError("email", "Veuillez entrer un e-mail");
    valid = false;
  } else if (!isEmailValid(emailField)) {
    textError("email", "Veuillez entrer un email valide");
    valid = false;
  } else {
    valid = true;
    textError("email", "");
  }

  const dateField = birthDate.value;
  if (!isRequired(dateField)) {
    textError("birthdate", "Veuillez entrer une date de naissance");
    valid = false;
  } else {
    valid = true;
    textError("birthdate", "");
  }

  const quantityField = quantity.value;
  if (!isRequired(quantityField)) {
    textError("quantity", "Veuillez entrer un nombre");
    valid = false;
  } else {
    valid = true;
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
    valid = false;
  } else {
    textError("radio", "");
  }
  if (!checkbox.checked) {
    textError("checkbox", "Veuillez accepter  les conditions d'utilisation");
    valid = false;
  } else {
    textError("checkbox", "");
  }

  if (valid === true) {
    form.style.visibility = "hidden";
    const closeBtn = document.querySelector(".btn-close");
    closeBtn.style.display = "block";
    const validationMessage = document.querySelector(".validation-message");
    validationMessage.innerHTML =
      "<p> Merci! <br> Votre réservation a été reçue.</p>";
    closeBtn.addEventListener("click", () => {
      modalbg.style.display = "none";
      closeBtn.style.display = "none";
      validationMessage.style.display = "none";
      form.style.visibility = "visible";
      form.reset();
    });
  }
};
