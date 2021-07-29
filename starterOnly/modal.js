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
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantity = document.getElementById("quantity");

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

// Email Regex

const isEmailValid = (email) => {
  if (
    !value.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    return false;
  } else {
    return true;
  }
};

const textError = (message) => {
  const error = document.querySelector(".error");
  console.log(error);
  error.textContent = message;
};

const checkFirstName = () => {
  let valid = false;

  const name = firstName.value;

  if (!isRequired(name)) {
    textError("Veuillez entrer un prénom");
  } else if (!minLength(name.length)) {
    textError("Veuillez entrer 2 caractères minimum ");
  } else {
    valid = true;
  }
  return valid;
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
}
