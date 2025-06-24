let generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () => {
  let length = document.getElementById('length').value;
  console.log(length);
  let includeNumber = document.getElementById('number').checked;

  let includeUpper = document.getElementById('upper').checked;
  let includeLower = document.getElementById('lower').checked;
  let includeSymbols = document.getElementById('symbols').checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const number = "1234567890";
  const symbols = "~!@#$%^&*()_+{}|:;,./'`";

  let passwordArray = [];
  if (includeNumber) {
    passwordArray.push(number[Math.floor(Math.random() * number.length)]);
  }
  if (includeUpper) {
    passwordArray.push(upper[Math.floor(Math.random() * upper.length)]);
  }
  if (includeLower) {
    passwordArray.push(lower[Math.floor(Math.random() * lower.length)]);
  }
  if (includeSymbols) {
    passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  let allchars = "";
  if (includeNumber) allchars += number;
  if (includeLower) allchars += lower;
  if (includeUpper) allchars += upper;
  if (includeSymbols) allchars += symbols;
  let password = passwordArray.join("");
  if (allchars === "") {
    alert("Please Select Atlease One Password Type");
    return;
  }
  while (password.length < length) {
    password = password + allchars[Math.floor(Math.random() * allchars.length)];
  }


  password = shuffleString(password);
  let passwordConsole = document.getElementById('password');
  passwordConsole.value = password;
});

function shuffleString(str) {
  return str.split('').sort(() => Math.random() - 0.5).join('');
}

let copyBtn = document.getElementById('copy-btn');
copyBtn.addEventListener('click', copyPassword);
function copyPassword() {
  const password = document.getElementById('password').value;

  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy!");
    console.error(err);
  });
}
