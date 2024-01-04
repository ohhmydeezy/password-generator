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
    let charecters = prompt("How Many Charecter's would you like for your pasword")
    if (charecters < 8 || charecters > 128) {
        alert("Error, Try Again")
    }
    else {
        var specialCharacters = confirm("Would you like the password to have special charecters");
        var numericCharecters = confirm("Would you like your password to have Numeric charecters");
        var UpperCase = confirm("Would you like Uppercase letters in your password");
        var lowerCase = confirm("Would you like lowercase letters in your password");
    };
    if (!specialCharacters && !numericCharecters && !UpperCase && !lowerCase) {
        alert("Error, atleast one charecter type must be selected")
    };
    var options = {
        specialCharacterconfirm: specialCharacters,
        numericCharacterconfirm: numericCharacters,
        UpperCaseconfirm: UpperCase,
        lowerCaseconfirm: lowerCase,
    }
    return options;
}
getPasswordOptions

// Function for getting a random element from an array
function getRandom(arr) {
    var randomiser = Math.floor(Math.random() * arr.length);
    return arr[randomiser];
}

// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var password = [];
    if (options.specialCharacterconfirm) {
        password.push(getRandom(specialCharacters))
    };
    if (options.numericCharacterconfirm) {
        password.push(getRandom(numericCharacters))
    };
    if (options.UpperCaseconfirm){
        password.push(getRandom(numericCharacters))
    };
    if (options.lowerCaseconfirm){
        password.push(getRandom.lowerCase)
    };
};

generatePassword

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