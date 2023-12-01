let count = 1;
let isSubmit = false;
let nameInput = document.getElementById("input01");
const submitButton = document.getElementById("submit");
const resultSpan = document.getElementById("result");
const editField = document.getElementById("editField");
const editButtton = document.getElementById("editButtton");

let inputarray = [];

submitButton.addEventListener("click", () => {
  submit();
  count++;
});

editButtton.addEventListener("click", () => {
  editButttonFunction();
  isSubmit = true;
});

function submit() {
  resultSpan.innerHTML += count + ". " + nameInput.value + "<br>";
  inputarray.push(nameInput.value);
}

function editButttonFunction() {
  //   const index = parseInt(editField.value) - 1;
  //   let name = inputarray[index];

  if (editField.value.trim() !== "" && isSubmit) {
    const newNameInput = document.createElement("input");
    newNameInput.type = "text";
    newNameInput.placeholder = "Enter the New Name";
    document.body.appendChild(newNameInput);

    const submitNewButton = document.createElement("button");
    submitNewButton.type = "submit";
    submitNewButton.textContent = "Submit";
    document.body.appendChild(submitNewButton);

    submitNewButton.addEventListener("click", () => {
      nameInput.value = newNameInput.value;
      submit();
    });
  }

  editField.value = "";
}
