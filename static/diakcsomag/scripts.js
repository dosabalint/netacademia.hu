const $form = $("#diakcsomag-adatbekero"),
  $button = $("#diakcsomag-adatbekero input[type=\"submit\"]"),
  $diakField = $("#diak");

$button.click(function(event) {
  event.preventDefault();

  // form, gform
  const formToUrl =
    "https://script.google.com/macros/s/AKfycbwC4p7Y8apjNw-CkBQ1f1p1Bs6MPv-HKzHWmClcLPAGl72TX6V7/exec";

  // field validation
  if ($diakField.val().length !== 11) {
    return;
  }

  // request
  $.ajax({
    url: formToUrl,
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  })
    .done(function() {
      $form.submit();
    });
});
