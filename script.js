// --------------------------
// Part 1: Variables & Conditionals
// --------------------------
let userName = "Drew";
let isStudent = true;

if (isStudent) {
  console.log(userName + " is a student.");
} else {
  console.log(userName + " is not a student.");
}

// --------------------------
// Part 2: Custom Functions
// --------------------------
function greetUser(name) {
  return "Hello, " + name + "! Welcome to Week 5 Assignment.";
}

function calculateSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// --------------------------
// Part 3: Loops
// --------------------------

// Example 1: For loop
function displayNumbers() {
  let list = document.getElementById("numbersList");
  list.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
}

// Example 2: While loop
function logNumbers() {
  let i = 1;
  while (i <= 3) {
    console.log("While loop number: " + i);
    i++;
  }
}
logNumbers(); // runs automatically

// --------------------------
// Part 4: DOM Interactions
// --------------------------
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = greetUser(userName);
});

document.getElementById("showNumbersBtn").addEventListener("click", displayNumbers);

document.getElementById("sumBtn").addEventListener("click", function() {
  document.getElementById("sumResult").textContent = 
    "The sum of numbers 1 to 5 is: " + calculateSum(5);
});
