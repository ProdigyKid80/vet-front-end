const url = "http://localhost:8080/v1/users";

//-------------------- LOG IN -----------------
document.forms.login.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    email: login.email.value.toLowerCase().trim(),
    password: login.pass.value,
  };

  loginFunc(userData);
});

const loginFunc = async (userData) => {
  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.err) {
      return alert(data.err);
    }

    localStorage.setItem("token", data.token);
    location.replace("/dashboard.html");
  } catch (err) {
    alert(err);
  }
};

//-------------------- SIGN UP -----------------
document.forms.signup.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    name: signup.name.value.trim(),
    email: signup.sEmail.value.toLowerCase().trim(),
    password: signup.sPass.value,
  };

  signinFunc(userData);
});

const signinFunc = async (userData) => {
  try {
    const res = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    if (data.err) {
      return alert(data.err);
    }

    alert(`${data.msg}
      Please, log in now.
    `);

    location.replace("/index.html");
  } catch (err) {
    alert(err);
  }
};
