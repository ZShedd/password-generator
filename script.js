// Character options
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var lower = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var integer = ["0","1", "2", "3", "4","5","6","7","8","9"];
var special = ["!", "@", "#", "$","%","&","'","(",")","*","+","=",",","-",".","/",":",";","<",">","?","[","]","^","_","{","}","|","`","~"];
//Confirmation Variables
var hasLower = confirm("Would you like lower case letters in your password?")
var hasUpper = confirm("Would you like upper case letters in your password?")
var hasNumbers = confirm("Would you like numbers in your password?")
var hasSpecial = confirm("Would you like special characters in your password?")

// Password Generator Functions
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var passwordOptions = [];
  var finalPassword = [];
  var length = prompt("How many characters would you like in your password?")
  console.log(length) }
  if (length < 8 || length > 128) {
    alert("Please enter a password between 8-128 characters.")
    return;
  }

// If statements
  if (hasLower === true) {
    passwordOptions = passwordOptions.concat(lower);
    finalPassword.push(lower[Math.floor(Math.random() * lower.length)]);
    length--;
  }
  if (hasUpper === true) {
    passwordOptions = passwordOptions.concat(upper);
    finalPassword.push(upper[Math.floor(Math.random() * upper.length)]);
    length--;
  }
  if (hasNumbers === true) {
    passwordOptions = passwordOptions.concat(number);
    finalPassword.push(number[Math.floor(Math.random() * number.length)]);
    length--;
  }

  // Generate password into #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Button Generator
  generateBtn.addEventListener("click", writePassword);