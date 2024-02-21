const formContainer = document.createElement("div");
document.body.append(formContainer);

const form = document.createElement("form");
form.id = "myForm";

const labels = [
  "First Name:",
  "Middle Name:",
  "Last Name:",
  "Email:",
  "pincode",
  "city",
];
const ids = ["firstName", "middleName", "lastName", "email", "pincode", "city"];
const types = ["text", "text", "text", "email", "text", "text"];

for (let i = 0; i < labels.length; i++) {
  elementCreate(ids[i], labels[i], types[i]);
}

function elementCreate(id, labels, type) {
  const label = document.createElement("label");

  label.htmlFor = id;

  label.textContent = labels;

  form.appendChild(label);
  form.appendChild(document.createElement("br"));
  const input = document.createElement("input");
  input.type = type;
  input.id = id;
  input.name = id;
  form.appendChild(input);
  form.appendChild(document.createElement("br"));
}
formContainer.appendChild(form);

const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit";
form.appendChild(submitBtn);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const middleName = document.getElementById("middleName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const pincode = document.getElementById("pincode").value;
  const city = document.getElementById("city").value;
  console.log("First Name:", firstName);
  console.log("Middle Name:", middleName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Pincode:", pincode);
  console.log("City:", city);
});
