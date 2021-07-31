const $emailInput = document.querySelector(".email-input");
const $emailError = document.querySelector(".email-error");
const $iconError = document.querySelector(".icon-error");
const $submitEmail = document.querySelector(".submit-email");
const mailPatern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
$submitEmail.addEventListener("click", validateEmail);

function validateEmail() {
  const inputText = $emailInput.value;

  if (mailPatern.test(inputText)) {
    $emailInput.value = "";
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
