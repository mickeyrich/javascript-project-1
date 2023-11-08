function addAttendee() {
  let name = birthdayForm.first.value + " " + birthdayForm.last.value;

  let ul = document.getElementById("attendees");

  let li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  ul.appendChild(li);
}
