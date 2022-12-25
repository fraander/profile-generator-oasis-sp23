function updatePage() {
  updatePhoto();
  updateName();
  updateTitle();
  updateEmail();
  updatePhone();
  updateFact();

  document.getElementById("output").style.display = "block";
}

// change when this is called (called when uploading photo right now)
function updatePhoto(event) {
   var reader = new FileReader();
   reader.onload = function() {
      var output = document.getElementById("photo-output");
      output.src = reader.result;
   }
   if (event == null) {} else {
      reader.readAsDataURL(event.target.files[0]);
   }
}

function updateName() {
  let value = document.getElementById("form-name").value;

  if (value.length != 0) {
   let output = document.getElementById("name-output");
   output.innerHTML = "<h1 style='font-size: large; margin-bottom: -10px'>" + value + "</h1>";
  }
}

function updateTitle() {
  let value = document.getElementById("form-title").value;

  if (value.length != 0) {
   let output = document.getElementById("title-output");
   output.innerHTML = "<p style='font-size: small'>" + value + "</p>";
  }
}

function updateEmail() {
  let value = document.getElementById("form-email").value;

  if (value.length != 0) {
   let output = document.getElementById("email-output");
   output.innerHTML = "<p>Email:<br/>" + value + "</p>";
  }
}

function updatePhone() {
   let value = document.getElementById("form-phone").value;

   if (value.length != 0) {
    let output = document.getElementById("phone-output");
    output.innerHTML = "<p>Phone:<br/>" + value + "</p>";
   }
}

function updateFact() {
   let value = document.getElementById("form-fun-fact").value;

   if (value.length != 0) {
    let output = document.getElementById("fact-output");
    output.innerHTML = "<p>Fun Fact:<br/>" + value + "</p>";
   }
}
