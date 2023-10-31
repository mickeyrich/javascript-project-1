alert("Hello, World!");

// Prompt the user for their name and store it in the 'username' variable
var username = prompt("What's your name?");

// Prompt the user for their age and store it in the 'age' variable
var age = parseFloat(prompt("How old are you?"));

// Prompt the user for their choice (one or two messages)
var choice = prompt(
  "Do you want one message or two messages? (Type 'one' or 'two')"
);

// Create a friendly message with the user's name, age, and math-based message
var message = "Hello, " + username + "!";

if (!isNaN(age)) {
  message += " You are " + age + " years old.";
} else {
  message += " Your age is not specified.";
}

if (choice === "one") {
  message += " How are you feeling today?";
} else if (choice === "two") {
  message += " Thanks for visiting. Have a great day!";
} else {
  message += " We're not sure what you want, but have a great day!";
}

// Display the message using the 'alert' function
alert(message);
