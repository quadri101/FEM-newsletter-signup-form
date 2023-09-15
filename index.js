$(".success-main").hide();
// $(".form-main").hide();
$(".error-message").hide();

$("form").on("submit", function (event) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const emailInput = $("[name='email']");
  const emailValue = emailInput[0].value;

  if (emailValue === "") {
    $(".error-message").text("Email cannot be empty");
    $(".error-message").show();
  } else if (!emailValue.match(validRegex)) {
    $(".error-message").text("Valid email required");
    $(".error-message").show();
  } else {
    $(".error-message").hide();
    $(".form-main").hide();
    $(".success-main").show();
  }
  event.preventDefault();
});

$(".dismiss-button").click(function () {
  $(".success-main").hide();
  $(".form-main").show();

  const emailInput = $("[name='email']");
  emailInput[0].value = "";
});
