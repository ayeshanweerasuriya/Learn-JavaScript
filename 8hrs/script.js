const taskInput = document.getElementById("taskInput");
const status = document.getElementById("status");

// Event listener for when the input field gains focus
taskInput.addEventListener("focus", () => {
  status.textContent = "Input field is active";
  document.body.style.backgroundColor = "green";
});

taskInput.addEventListener("mouseover", () => {
  status.textContent = "mouse pointer is moving while it is over an element.";
  document.body.style.backgroundColor = "green";
});

// Event listener for when the input field loses focus
taskInput.addEventListener("blur", () => {
  status.textContent = "Input field is not active";
  document.body.style.backgroundColor = "red";
});
