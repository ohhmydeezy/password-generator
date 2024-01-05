// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
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
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
    let characterLength = prompt("How Many Charecter's would you like for your password")
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Error, Try Again")
    }
    else {
        var specialCharacters = confirm("Would you like the password to have special Characters");
        var numericCharacters = confirm("Would you like your password to have Numeric Characters");
        var upperCase = confirm("Would you like UpperCase letters in your password");
        var lowerCase = confirm("Would you like lowercase letters in your password");
    };
    if (!specialCharacters && !numericCharacters && !upperCase && !lowerCase) {
        alert("Error, atleast one charecter type must be selected")
    };
    var options = {
        characterLength: characterLength,
        specialCharacterconfirm: specialCharacters,
        numericCharacterconfirm: numericCharacters,
        upperCaseConfirm: upperCase,
        lowerCaseConfirm: lowerCase,
    }
    return options;
}

// Function for getting a random element from an array
function getRandom(arr) {
    var randomiser = Math.floor(Math.random() * arr.length);
    return arr[randomiser];
}

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var password = [];
    var allSelectedChars = [];
    var guaranteedChars = [];
    if (options.specialCharacterconfirm) {
        allSelectedChars = allSelectedChars.concat(specialCharacters)
        guaranteedChars.push(getRandom(specialCharacters))
    };
    if (options.numericCharacterconfirm) {
        allSelectedChars = allSelectedChars.concat(numericCharacters)
        guaranteedChars.push(getRandom(numericCharacters))
    };
    if (options.upperCaseConfirm) {
        allSelectedChars = allSelectedChars.concat(upperCasedCharacters)
        guaranteedChars.push(getRandom(upperCasedCharacters))
    };
    if (options.lowerCaseConfirm) {
        allSelectedChars = allSelectedChars.concat(lowerCasedCharacters)
        guaranteedChars.push(getRandom(lowerCasedCharacters))
    };
    for (let i = 0; i < options.characterLength; i++) {
        let chosenChar = getRandom(allSelectedChars);
        password.push(chosenChar);
    };
    for (let i = 0; i < guaranteedChars.length; i++) {
        let randomiseGuaranteeChar = Math.floor(Math.random() * options.characterLength);
        password[randomiseGuaranteeChar] = guaranteedChars[i];
    }
    var finalPassword = password.join('');

    return finalPassword;;
};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);