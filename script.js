const formContainer = document.createElement("div");
document.body.append(formContainer);
const form = document.createElement("form");
form.id = "myForm";

const labels = ["First Name:", "Middle Name:", "Last Name:", "Email:"];
const ids = ["firstName", "middleName", "lastName", "email"];
const types = ["text", "text", "text", "email"];

for (let i = 0; i < labels.length; i++) {
  const label = document.createElement("label");
  label.htmlFor = ids[i];
  label.textContent = labels[i];
  form.appendChild(label);

  const input = document.createElement("input");
  input.type = types[i];
  input.id = ids[i];
  input.name = ids[i];
  form.appendChild(input);

  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));
}

const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
form.appendChild(submitBtn);

formContainer.appendChild(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const middleName = document.getElementById("middleName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;

  console.log("First Name:", firstName);
  console.log("Middle Name:", middleName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
});
