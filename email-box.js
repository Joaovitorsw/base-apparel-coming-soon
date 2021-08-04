const $emailInput = document.querySelector(".email-input");
const $emailError = document.querySelector(".email-error");
const $iconError = document.querySelector(".icon-error");
const $submitEmail = document.querySelector(".submit-email");
const mailPatern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

$submitEmail.addEventListener("click", submitEmail);
$emailInput.addEventListener("input", ($text) => validateEmail($text));
document.addEventListener("keypress", function (key) {
  if (key.key === "Enter") {
    submitEmail();
  }
});

function submitEmail() {
  const inputText = $emailInput.value;
  if (mailPatern.test(inputText)) {
    $emailInput.value = "";
  }
}

function validateEmail() {
  const inputText = $emailInput.value;

  if (mailPatern.test(inputText)) {
    removeErrorMessage();
  } else {
    setErrorMessage();
  }
}

function activeClass($element, status) {
  $element.classList.add(status);
}
function removeClass($element, status) {
  $element.classList.remove(status);
}

function setErrorMessage() {
  [$emailInput, $emailError, $iconError, $submitEmail].forEach(($element) => {
    activeClass($element, "active");
  });
}
function removeErrorMessage() {
  [$emailInput, $emailError, $iconError, $submitEmail].forEach(($element) => {
    removeClass($element, "active");
  });
}
