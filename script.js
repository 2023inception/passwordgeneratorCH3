var specialCharacters = [ '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '`',
  '|', '\\', '/', '(', ')', '[', ']', '{', '}', ':', ';', '"', "'", '<',
  '>', ',', '.', '?'];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


function userPrompts () {
  var specialCharacters = prompt('woud you like to include special characters?');
  var numbers = prompt('woud you like to include numbers?');
  var lowerCase = prompt('woud you like to include lower case letters?');
  var upperCase = prompt('woud you like to include upper case letters?');
}

if (specialCharacters === 'yes') {
  console.log('Special characters will be included.');
} else {
  console.log('Special characters will not be included.');
}

if (numbers === 'yes') {
  console.log('Numbers will be included.');
} else {
  console.log('Numbers will not be inlcuded.');
}

if (lowerCase === 'yes') {
  console.log('lower case letters will be included.'); 
} else {
  console.log('lower case lettesr will not be included'.);
}

if (upperCase === 'yes') {
  console.log('uper case letters will be included.');
} else {
  console.log('upper case letters will not be included.'); 

}

userPrompts();




























// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordCriteria = getPasswordCritera ();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(criteria) {
  

}