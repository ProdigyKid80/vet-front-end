const petsContainer = document.querySelector(".cards");
const url = "http://localhost:8080/v1/pets";

const token = localStorage.getItem("token");

const getData = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (data.length > 0) {
      displayPets(data);
    } else {
      alert("Oops! Something's wrong");
    }
  } catch (err) {
    alert(err);
  }
};

getData(url);

const displayPets = (data) => {
  petsContainer.innerHTML = "";

  data.forEach((pet) => {
    const div = document.createElement("div");
    div.classList.add("card");
    petsContainer.appendChild(div);

    const name = document.createElement("h4");
    name.innerText = pet.name;
    div.appendChild(name);

    const content = document.createElement("div");
    content.classList.add("content");
    div.appendChild(content);

    const birthday = document.createElement("p");
    birthday.innerText = new Date(pet.birthday).toLocaleDateString("en-CA");
    content.appendChild(birthday);

    const email = document.createElement("p");
    email.innerText = pet.email;
    content.appendChild(email);

    const actions = document.createElement("div");
    actions.classList.add("actions");
    div.appendChild(actions);

    const viewBtn = document.createElement("button");
    viewBtn.classList.add("btn");
    viewBtn.textContent = "View log";
    actions.appendChild(viewBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-light");
    deleteBtn.textContent = "Delete";
    actions.appendChild(deleteBtn);
  });
};

//---------- ADD PET -------------
document.getElementById("addPetBtn").addEventListener("click", () => {
  location = "add.html";
});
