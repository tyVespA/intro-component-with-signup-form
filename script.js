const form = document.querySelector(".form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const errorIcons = document.querySelectorAll(".error-icon")
const errorText = document.querySelectorAll(".error-text")
const firstNameError = document.querySelector(".fn") 

form.addEventListener("submit", (e) => { 
   if (!(email.value.match(mailFormat))) {
      errorIcons.forEach(errorIcon => {
         errorIcon.classList.remove("error-icon-display")
      })      
      e.preventDefault()
   }
})