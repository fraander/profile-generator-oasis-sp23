function updatePage() {
  let card = 
    "<div class='group-box'><ul>\n" +
      addElement("", "form-photo") +
      addElement("", "form-name") +
      addElement("", "form-title") +
      addElement("School: ", "form-school") +
      addElement("Email: ", "form-email") +
      addElement("Phone: ", "form-phone") +
      addElement("Fun Fact! ", "form-fun-fact") +
      "</ul></div>";

  document.body.innerHTML += card;
  console.log(card);
}

function addElement(label, id) {
   let content = document.getElementById(id).value
   return content.length == 0 ? "" : "\t<li>" + label + content + "</li>\n";
}
