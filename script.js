
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var specialCharacters = [
  '?',
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];




function pwCriteria (){ 
  var pwLength = parseInt (prompt("Choose a password between 8 and 128 characters"))

if(pwLength<8 || pwLength>128 || Number.isNaN(pwLength)) {alert("Your password needs to be a number between 8 and 128 Characters");
return;}

var lowerChoice = confirm("click OK if you want lowercase characters");
var upperChoice = confirm("click OK if you want uppercase characters");
var numChoice = confirm("click OK if you want numbers");
var specChoice = confirm("click OK if you want special characters");

if(lowerChoice ===false &&
  upperChoice ===false &&
  numChoice ===false&&
  specChoice ===false){
    alert('please choose at least one Character type')
  }


}
function generatePassword (){

pwCriteria()

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




