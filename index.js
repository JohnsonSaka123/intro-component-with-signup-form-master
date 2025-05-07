const ClaimButton = document.querySelector(".claim-btn");
const form = document.querySelector(".claim-trial_form");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("passwrd");
const errorMsgs = document.querySelectorAll(".error-msg");

form.addEventListener("submit" , (e)=>{
  e.preventDefault();

  const Email = email.value.trim();

  let hasError = false;

  // Reset error states
  [firstName, lastName, email, password].forEach((input, index) => {
    input.classList.remove("error");
    errorMsgs[index].textContent = "";
  });

  // First Name validation
  if (firstName.value.trim() === "") {
    setError(firstName, 0, "First Name cannot be empty");
    hasError = true;
  }

  // Last Name validation
  if (lastName.value.trim() === "") {
    setError(lastName, 1, "Last Name cannot be empty");
    hasError = true;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(Email)) {
    setError(email, 2, "Looks like this is not an email");
    hasError = true;
  }

  // Password validation
  if (password.value.trim() === "") {
    setError(password, 3, "Password cannot be empty");
    hasError = true;
  }

  if (!hasError) {
    alert("Form is valid! You can now submit.");
    form.submit();
  }
});

function setError(inputElement, index, message) {
  inputElement.classList.add("error");
  errorMsgs[index].textContent = message;
}