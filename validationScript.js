    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

const myForm = document.getElementById("myForm")
const submitButton = document.getElementById("submit")
const inputBox = document.getElementById("inputField")

submitButton.addEventListener("click", function(event) {
  if (/^[a-zA-Z0-9]+$/.test(inputBox.value)) {
    inputBox.setCustomValidity("")
    alert(`"${inputBox.value}" is valid!`)
  } else {
    inputBox.setCustomValidity(`"${inputBox.value}" is NOT valid!`)
  }
})