//1.pop up ask if you want to create password
//2. ask length of password 8-128 done
//3. Alphabet a-z and upper and lower case
//4. special chars (figure that out)
//5.if at least one char type was picked a password is generated
//6.password shown on screen
var lettersLowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "P", "q", "r", "s", "t", "u", "v", "W", "x", "y", "z"];
var lettersUppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "v", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!","#", "$", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":",, ";", "<", ">", "=", "?", "@", "[", "]", "/", "^", "_", "`", "{","}","~" ]
var possibleChars = []
var lowerCaseChoice;
var upperCaseChoice;
var numChoice;
var specialCharChoice;

function generatePassword() {
  var  passLength;
  if (confirm("Would you like to create a password") === true) {
      passLength = parseInt(
      prompt('How many characters between 8 and 128 would you like in your password?'));
    if (passLength < 8) { alert("Needs to be at least 8 characters");
    return;}
    if (passLength > 128) {alert ("Are you really going to remember all of that? Less then 128 please");
  return;}
      if (isNaN(passLength)) {alert ("Pick a Number between 8-128 instead")
        return;
      }
        if (
        lowerCaseChoice === false &&
        upperCaseChoice === false &&
        numChoice === false &&
        specialCharChoice === false
      ) { alert("Please pick at least one character type.");
      return;
    }
      var lowerCaseChoice = confirm("Would you like lowercase letters?");
     
      
      var upperCaseChoice = confirm("Would you like UPPERCASE letters");
     
      
      var numChoice = confirm("Would you like Numbers?");
  
      var specialCharChoice = confirm("Would you like special characters");
      
      if(lowerCaseChoice){possibleChars.concat(lettersLowercase)}
      if(upperCaseChoice){possibleChars.concat(lettersUppercase)}
      if(numChoice){possibleChars.concat(numbers)}
     if(specialCharChoice){possibleChars.concat(specialChars)}
    
     var userChoices = {
        passLength: passLength,
        lowerCaseChoice: lowerCaseChoice,
        upperCaseChoice: upperCaseChoice,
        numChoice: numChoice,
        specialCharChoice: specialCharChoice
      };
     return userChoices;
    
    
    }
    var actualPass = ""
    for (var i = 0; i < passLength; i++) {
     var rando = possibleChars[Math.floor(Math.random() * possibleChars.length)];
     actualPass.push(rando);}
   
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
