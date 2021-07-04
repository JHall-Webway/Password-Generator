// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// generate password
function generatePassword() {

  var charset = ""
  var retPassword = ""

  // Password length
  var length = parseInt(window.prompt("How long do you want your password to be? (min: 8, max: 128)"))
  //check to see if length input is a number
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number within parameters.")
    generatePassword();
  } else {
  console.log("Password Length = " + length);
  }

  var lowerCase = window.confirm("Do you want lower case?");
  if (lowerCase) {
    charset = charset + "abcdefghijklmnopqrstuvwxyz"
  }

  var upperCase = window.confirm("Do you want upper case?");
  if (upperCase) {
    charset = charset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  var numeric = window.confirm("Do you want numbers?");
  if (numeric) {
    charset = charset + "1234567890"
  }

  var specialChar = window.confirm("Do you want special characters?");
  if (specialChar) {
    charset = charset + "!#$%&()*+-,/:;<=>?@[]^_`{}|~"
  }

  console.log("charset: " + charset);

  for (var i = 0, c = charset.length; i < length; i++) {
    retPassword += charset.charAt(Math.floor(Math.random() * c))
  }
  
  return retPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
