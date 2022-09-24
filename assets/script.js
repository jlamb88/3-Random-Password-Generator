
// generate full Character set array
function generateCharSet(start,finish) {
pwdCharSet=[];
charNo = start;
for (n=0; n<finish-start+1; n++)
  {pwdCharSet[n] = String.fromCharCode(charNo);
  charNo += 1;}
return pwdCharSet;
}

// read the char code range for typical characters and select out the special characters //
function generateSpcChars() {
  Post = 0;
  spclCharSet = []
  for (n=33;n<127;n++) {
    testChar = String.fromCharCode(n)
    if (/[^A-Za-z0-9]/.test(testChar)) {
      spclCharSet[Post] = testChar;
      Post += 1;
      }
  }
  return spclCharSet;
}

function generateRndmInt(start, end) {
  rndmInt = Math.floor(Math.random()*(end-start+1))+start;
  return rndmInt;
  }

function generateRndmChar(start, end) {
    rndmChar = String.fromCharCode(generateRndmInt(start,end));
    return rndmChar;
  }

pswdLngthEntry = document.querySelector("#password-length");
lowerCase = document.querySelector("#lower-alpha");
upperCase = document.querySelector("#upper-alpha");
numbers = document.querySelector("#numbers");
spclChars = document.querySelector("#special-chars");


function generatePassword() {
  pswdLength = pswdLngthEntry.valueAsNumber; 
  
  if (pswdLength<8 || pswdLength>128) {
    alert("Please select a password length between 8 and 128");
    return;
    }
  
  pswdArry = Array(pswdLength);
  chars = 0;
  generateSpcChars();
  if (!(lowerCase.checked||upperCase.checked||numbers.checked||spclChars.checked)) {
    alert ("Please select password character types");
    return;
    }
  
    for (n=1; n<=pswdLength;n++) {
    if (lowerCase.checked) {
      do 
        {rndmPos = generateRndmInt(0,pswdLength-1);}
      while (pswdArry[rndmPos] != null);

      pswdArry[rndmPos] = generateRndmChar(97, 122); //char codes for lower case are between 97 and 122 //
      chars+=1
    }

    if (upperCase.checked&&(chars<pswdLength)) {
      do 
        {rndmPos = generateRndmInt(0,pswdLength-1);}
      while (pswdArry[rndmPos] != null);
      pswdArry[rndmPos] = generateRndmChar(65,90); //char codes for upper case are between 65 and 90 //
      chars+=1
    }
      
    if (numbers.checked&&(chars<pswdLength)) {
      do 
        {rndmPos = generateRndmInt(0,pswdLength-1);}
      while (pswdArry[rndmPos] != null);
      pswdArry[rndmPos] = generateRndmChar(48,57); //char codes for digits are between 48 and 57 //
      chars+=1
    }

    if (spclChars.checked&&(chars<pswdLength)) {
      do
        {rndmPos = generateRndmInt(0,pswdLength-1);}
      while (pswdArry[rndmPos] != null);
      pswdArry[rndmPos] = spclCharSet[generateRndmInt(0,spclCharSet.length-1)];
      chars+=1
    }
    n = chars;
    password = pswdArry.join("");
    
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
 