const url = "http://localhost:8080/v1/users";
const restorePassword = document.forms.restorePassword;

restorePassword.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = restorePassword.email.value.toLowerCase().trim();

  sendRandomPass({ email });
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
    alert(data.msg);
    return location.replace("/index.html");
  } catch (err) {
    alert(err);
  }
};
