document.getElementById("myHeading").innerHTML = "Hellow World!";
document.querySelector(".heading-2").innerHTML = "My second heading";

function changeText(id) {
  id.innerHTML = "This element Text has changed.";
}

function displayDate() {
  document.getElementById("myDiv").innerHTML = Date();
}

document.getElementById("myTime").addEventListener("click", displayTime);
function displayTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let am = true;
  if (hours > 12) {
    am = false;
    hours -= 12;
  }

  let currentTime = hours + ":" + currentDate.getMinutes();

  if (am) {
    currentTime += " AM";
  } else {
    currentTime += " PM";
  }
  document.getElementById("myDiv").innerHTML = currentTime;
}

function myAge() {
  let age = ageForm.age.value;
  console.log("Input " + age + "," + typeof age);
  document.getElementById("myDiv").innerHTML = age;
  return false;
}
