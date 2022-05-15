const url = "http://localhost:8080/v1/pets";

const token = localStorage.getItem("token");

document.forms.addPet.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = addPet.name.value.trim();
  const birthday = addPet.birthday.value;
  const email = addPet.email.value.trim();

  postPet({ name, birthday, email });
});

const postPet = async (petData) => {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(petData),
    });
    const data = await res.json();

    if (data.err) {
      return alert(data.err);
    }

    alert(data.msg);
    location.replace("/dashboard.html");
  } catch (err) {
    alert(err);
  }
};
