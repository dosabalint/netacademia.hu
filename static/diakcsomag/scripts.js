// collect dom items
const $orderForm = $("#diakcsomag-adatbekero"),
  $teacherForm = $("#diaktanar-adatbekero"),
  $orderButton = $("#diakcsomag-adatbekero input[type=\"submit\"]"),
  $teacherButton = $("#diaktanar-adatbekero input[type=\"submit\"]"),
  $diakField = $("#diakszam"),
  $iskolaField = $("#diakiskola"),
  $varosField = $("#diakvaros"),
  $teacherFormFields = $("#diaktanar-adatbekero input:not([type=\"submit\"])"),
  $nevField = $("#nev"),
  $emailField = $("#email"),
  $mobilField = $("#mobil"),
  $successMessage = $(".success-message"),
  $failMessage = $(".fail-message");

// hide messages
$failMessage.hide();
$successMessage.hide();

// spreadsheet form url
const formToUrl =
  "https://script.google.com/macros/s/AKfycbwC4p7Y8apjNw-CkBQ1f1p1Bs6MPv-HKzHWmClcLPAGl72TX6V7/exec";

// order button click
$orderButton.click(function(event) {
  event.preventDefault();

  // field validation
  if ($diakField.val().length !== 11
    || $iskolaField.val().length === 0
    || $varosField.val().length === 0) {
    return;
  }

  // request
  $.ajax({
    url: formToUrl,
    method: "GET",
    dataType: "json",
    data: $orderForm.serializeArray()
  })
    .done(function() {
      $orderForm.submit();
    });
});

// teacher button click
$teacherButton.click(function(event) {
  event.preventDefault();

  console.log(1);
  // field validation
  if (!$nevField.val()
    || !$emailField.val()
    || !$mobilField.val()) {
    return;
  }

  console.log(2);
  // request
  $.ajax({
    url: formToUrl,
    method: "GET",
    dataType: "json",
    data: $teacherForm.serializeArray(),
    success: function() {
      $successMessage.show();
      $teacherFormFields.val("");
    },
    error: function(error) {
      $failMessage.show();
      console.log(error);
    }
  });
});
