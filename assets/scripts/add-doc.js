const url = "http://localhost:8080/v1/documents";
const pet_id = location.search.split("=")[1];

const token = localStorage.getItem("token");

document.forms.addDoc.addEventListener("submit", (e) => {
  e.preventDefault();

  const file = addDoc.file.files[0];

  uploadFile(file);
});

const uploadFile = async (file) => {
  try {
    let formData = new FormData();
    formData.append("document", file);
    const res = await fetch(`${url}/${pet_id}`, {
      method: "POST",
      body: formData,
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
