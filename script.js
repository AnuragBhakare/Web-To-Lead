console.log("Welcome to Web-To-Lead");

let captchachecked = false;

function beforesubmit(event) {
  if (captchachecked) {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");

    console.log("input date -  ", inputdate.value);
    //input date is in string form we need to convert it in a date format
    // It should be converted into timezone of "Default Lead Creator"
    // Default Lead Creator can be found under setup -> web-to-lead
    // Time zone can be found by using - System.debug(UserInfo.getLocale());
    // undetrscore should be replace by hyphen in locale format
    // example - for "en_IN" should be written as "en-IN"

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");

    outputdate.value = formattedDate;
  } else {
    alert("Please check the reCAPTCHA box to submit the lead.");
    event.preventDefault();
  }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function captchasuccess() {
  captchachecked = true;
}
