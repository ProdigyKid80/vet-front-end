const url = "http://localhost:8080/v1/users";
const changePassForm = document.forms.changePassword;
const token = localStorage.getItem("token");

changePassForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const passData = {
    oldPass: changePassword.oldPass.value,
    newPass: changePassword.newPass.value,
  };

  changePass(passData);
});

const changePass = async (passData) => {
  try {
    const res = await fetch(`${url}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(passData),
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

//---------- LOG OUT -------------
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  location.replace("/index.html");
});
