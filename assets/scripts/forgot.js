const url = "http://localhost:8080/v1/users";
const restorePassword = document.forms.restorePassword;

restorePassword.addEventListener("submit", (e) => {
  e.preventDefault();

  sendRandomPass(restorePassword.email.value.toLowerCase().trim());
});

const sendRandomPass = async (email) => {
  try {
    const res = await fetch(`${url}/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    alert(err);
  }
};
