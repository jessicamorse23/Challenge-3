function generatePassword() {
  // When button is clicked for a new password
  // Then a window.prompt for password criteria: length between 8-128 characters
  // Select length of password - between 8-128 characters
  var passwordLength = prompt(
    "How many characters do you want in your password? Password may contain between 8 - 128 characters."
  );
  if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
    console.log(passwordLength);

    // User input must be between 8-128 characters

    // Then a series of window prompts for including: uppercase, lowercase, numeric, and/or special characters
    var includeUppercase = confirm(
      "Do you want to include uppercase characters in your password?"
    );
    var includeLowercase = confirm(
      "Do you want to include lowercase characters in your password?"
    );
    var includeSpecial = confirm(
      "Do you want to include special characters in your password?"
    );
    var includeNumbers = confirm(
      "Do you want to include numbers in your password?"
    );
    console.log(includeUppercase);
    console.log(includeLowercase);
    console.log(includeSpecial);
    console.log(includeNumbers);

    if (
      includeLowercase === true ||
      includeUppercase === true ||
      includeSpecial === true ||
      includeNumbers === true
    ) {
      // checks to see if uppercase was desired and adds the characters to the bank of available
      var availableCharacters = "";
      if (includeUppercase) {
        availableCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      console.log(availableCharacters);

      // checks to see if lowercase was desired and adds the characters to the bank of available
      if (includeLowercase) {
        availableCharacters =
          availableCharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
      }

      if (includeSpecial) {
        availableCharacters =
        availableCharacters + "!@#$%^&*";
      }

      if (includeNumbers) {
        availableCharacters =
        availableCharacters +"123456789";
      }

      console.log(availableCharacters);

      var completedPassword = "";
      for (var i = 0; i < parseInt(passwordLength); i++) {
        // get a random index based on the length of our character bank and use that to select one character from that bank and then concatenate it onto the password
        var randomIndex = Math.floor(
          Math.random() * availableCharacters.length
        );
        console.log(randomIndex);
        var randomCharacter = availableCharacters[randomIndex];
        console.log(randomCharacter);
        completedPassword = completedPassword + randomCharacter;
        console.log(completedPassword);
      }
      return completedPassword;
    } else {
      alert("Choose at least one character type.");
    }
  }
  // Input validated and at least one character type selected - window confirmation

  // Then a password is generated and matches selected criteria

  // Password is displayed in alert or written on the page
  else {
    // user enters an incorrect length
    alert(`the length needs to be a number between 8 and 128`);
  }
}
// generatePassword();
// return null;

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
