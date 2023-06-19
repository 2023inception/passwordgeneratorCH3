var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '~', '`', '|', '\\', '/', '(', ')', '[', ']', '{', '}', ':', ';', '"', "'", '<', '>', ',', '.', '?'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordCriteria = getPasswordCriteria();
  var password = generatePassword(passwordCriteria);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function getPasswordCriteria() {
  var includeSpecialCharacters = prompt('Would you like to include special characters?');
  var includeNumbers = prompt('Would you like to include numbers?');
  var includeLowerCase = prompt('Would you like to include lowercase letters?');
  var includeUpperCase = prompt('Would you like to include uppercase letters?');
  var length = parseInt(prompt('password length must be between 8 and 128 characters'));

  if (length < 8 || length > 128) {
    alert('Invalid password length. Please choose a length between 8 and 128 characters.');
    return getPasswordCriteria();
  }

  var passwordCriteria = {
    includeSpecialCharacters: includeSpecialCharacters === 'yes',
    includeNumbers: includeNumbers === 'yes',
    includeLowerCase: includeLowerCase === 'yes',
    includeUpperCase: includeUpperCase === 'yes',
    length: Math.max(8, Math.min(128, length)),
  };

  return passwordCriteria;
}

function generatePassword(criteria) {
  var characters = [];

  if (criteria.includeSpecialCharacters) {
    characters = characters.concat(specialCharacters);
  }

  if (criteria.includeNumbers) {
    characters = characters.concat(numbers);
  }

  if (criteria.includeLowerCase) {
    characters = characters.concat(lowercaseLetters);
  }

  if (criteria.includeUpperCase) {
    characters = characters.concat(uppercaseLetters);
  }

  if (characters.length === 0) {
    return null;
  }

  var password = '';
  var length = 10;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
