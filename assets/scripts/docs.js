const docsContainer = document.getElementById("docs");
const docBtn = document.getElementById("docFilter");

const getDocs = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    if (data.length > 0) {
      displayDocs(data);
    } else {
      docsContainer.innerText = "No files found.";
    }
  } catch (err) {
    alert(err);
  }
};

getDocs(`${url}/documents/${petId}`);

const displayDocs = (data) => {
  docsContainer.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    docsContainer.appendChild(div);

    const title = document.createElement("h4");
    const icon = document.createElement("i");
    icon.classList.add("far", "fa-file-alt");
    title.appendChild(icon);
    title.innerHTML += item.filename;
    div.appendChild(title);

    title.addEventListener("click", () => getFile(item.filename));
  });
};

const getFile = async (filename) => {
  try {
    const res = await fetch(`${url}/documents/file/${filename}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = res.url;

    if (data) {
      return window.open(data, "_blank");
    } else {
      return alert("File not found");
    }
  } catch (err) {
    alert(err);
  }
};

//-----------------------FILTERS---------------------
docBtn.addEventListener("click", () => {
  docBtn.classList.toggle("btn-inactive");
  docBtn.classList.toggle("btn-light");

  document.getElementById("docs").classList.toggle("not-shown");
});
