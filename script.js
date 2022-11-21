const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorIcons = document.querySelectorAll(".error-icon")
const errorText = document.querySelectorAll(".error-text")

const firstNameErrorIcon = document.querySelector(".error-first-name-icon")
const firstNameErrorText = document.querySelector(".error-first-name-text") 
const lastNameErrorIcon = document.querySelector(".error-last-name-icon")
const lastNameErrorText = document.querySelector(".error-last-name-text")
const emailErrorIcon = document.querySelector(".error-email-icon")
const emailErrorText = document.querySelector(".error-email-text")
const passwordErrorIcon = document.querySelector(".error-password-icon")
const passwordErrorText = document.querySelector(".error-password-text")

form.addEventListener("submit", (e) => { 
   if (firstName.value.length == 0) {
      firstName.style.cssText = ("border: 3px solid hsl(0, 100%, 74%)")
      firstNameErrorIcon.classList.remove("error-icon-display")
      firstNameErrorText.textContent = "First Name cannot be empty";
      e.preventDefault()
   } else if (firstName.value.length != 0) {
      firstName.style.cssText = ("border: 1px solid hsl(246, 25%, 77%)")
      firstNameErrorIcon.classList.add("error-icon-display")
      firstNameErrorText.textContent = "";
   }

   if (lastName.value.length == 0) {
      lastName.style.cssText = ("border: 3px solid hsl(0, 100%, 74%)")
      lastNameErrorIcon.classList.remove("error-icon-display")
      lastNameErrorText.textContent = "Last Name cannot be empty";
      e.preventDefault()
   } else if (lastName.value.length != 0) {
      lastName.style.cssText = ("border: 1px solid hsl(246, 25%, 77%)")
      lastNameErrorIcon.classList.add("error-icon-display")
      lastNameErrorText.classList.add(".error-text-display")
   }

   if (!(email.value.match(mailFormat))) {
      email.style.cssText = ("border: 3px solid hsl(0, 100%, 74%)")
      emailErrorIcon.classList.remove("error-icon-display")
      emailErrorText.textContent = "Looks like this is not an email"
      e.preventDefault()
   } else if (email.value.match(mailFormat)) {
      email.style.cssText = ("border: 1px solid hsl(246, 25%, 77%)")
      emailErrorIcon.classList.add("error-icon-display")
      emailErrorText.textContent = ("")
   }

   if (password.value.length == 0) {
      password.style.cssText = ("border: 3px solid hsl(0, 100%, 74%)")
      passwordErrorIcon.classList.remove("error-icon-display")
      passwordErrorText.textContent = "Password cannot be empty"
   } else if (password.value.length != 0) {
      password.style.cssText = ("border: 1px solid hsl(246, 25%, 77%)")
      passwordErrorIcon.classList.add("error-icon-display")
      passwordErrorText.textContent = ""
   }

   /*
   if (!(email.value.match(mailFormat))) {
      errorIcons.forEach(errorIcon => {
         errorIcon.classList.remove("error-icon-display")
      })      
      e.preventDefault()
   }
   */
})