const buttonElement = document.querySelector("#submitButton");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const phoneNumberInput = document.getElementById("phone-number");
const sectionContainer = document.getElementById("section-container");
const warningElement = document.querySelector(".warningDisplay");

let signUps = [];
let id = 0;

function displayName(name, lastName) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  p.textContent = `No. ${id}`;
  div.appendChild(p);
  sectionContainer.appendChild(div);
  let anotherP = document.createElement("p");
  anotherP.innerHTML = `Name: ${name} ${lastName}`;
  div.appendChild(anotherP);
}

function addDatas(e) {
  e.preventDefault();
  let name = firstNameInput.value;
  let lastName = lastNameInput.value;
  let phoneNumber = phoneNumberInput.value;

  if (name && lastName && phoneNumber) {
    warningElement.setAttribute("hidden", "");
    id++;
    signUps.push({
      id: id,
      firstName: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
    });

    displayName(name, lastName);
  } else {
    warningElement.removeAttribute("hidden");
  }
}

buttonElement.addEventListener("click", addDatas);
// sdisplayName();
