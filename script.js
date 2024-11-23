const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  const filter = /[\W_]/g;
  let lowCaseStr = str.toLowerCase().replace(filter, "");
  let reverseStr = lowCaseStr.split("").reverse().join("");
  return reverseStr === lowCaseStr;
}

function submitInput() {
  let inputText = input.value;
  const resultContainer = document.getElementById("result-container");
  if (inputText !== "") {
    resultContainer.classList.remove("hide");
    isPalindrome(inputText)
      ? (result.innerHTML = `<strong>${inputText}</strong> is a palindrome.`)
      : (result.innerHTML = `<strong>${inputText}</strong> is not a palindrome.`);
  } else {
    alert("Please input a value");
  }
}

button.addEventListener("click", submitInput);
