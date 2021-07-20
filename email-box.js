const $emailBox = document.querySelector(".email-box");
const $emailError = document.querySelector(".email-error");
const $iconError = document.querySelector(".icon-error");
const $arrowButton = document.querySelector(".arrow-button");

$arrowButton.addEventListener("click", validateEmail);

function validateEmail() {
  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const inputText = $emailBox.value;

  if (inputText.match(mailformat)) {
    $emailBox.value = "";
    emailIsValide();
  } else {
    emailErrorNotification();
  }
}

function emailErrorNotification() {
  $emailBox.classList.add("active");
  $emailError.classList.add("active");
  $iconError.classList.add("active");
  $arrowButton.classList.add("active");
}
function emailIsValide() {
  $emailBox.classList.remove("active");
  $emailError.classList.remove("active");
  $iconError.classList.remove("active");
  $arrowButton.classList.remove("active");
}
