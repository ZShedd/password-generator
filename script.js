// Character options
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
var lower = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var integer = ["0","1", "2", "3", "4","5","6","7","8","9"];
var special = ["!", "@", "#", "$","%","&","'","(",")","*","+","=",",","-",".","/",":",";","<",">","?","[","]","^","_","{","}","|","`","~"];

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