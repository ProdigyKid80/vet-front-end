const url = "http://localhost:8080/v1/logs";
const pet_id = location.search.split("=")[1];

const token = localStorage.getItem("token");

document.forms.addLog.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = addLog.title.value.trim();
  const date = addLog.date.value;
  const description = addLog.description.value.trim();

  postLog({ pet_id, title, date, description });
});

const postLog = async (logData) => {
  try {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(logData),
    });
    const data = await res.json();

    if (data.err) {
      return alert(data.err);
    }

    alert(data.msg);
    location.replace(`/logs.html?pet_id=${pet_id}`);
  } catch (err) {
    alert(err);
  }
};
