const petId = location.search.split("=")[1];
const logBtn = document.getElementById("logFilter");

const logsContainer = document.querySelector(".cards");
const nameHeader = document.querySelector("h1");

const url = `http://localhost:8080/v1`;

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
      displayLogs(data);
    } else {
      logsContainer.innerText = "No data found.";
      nameHeader.innerText = "No data found.";
    }
  } catch (err) {
    alert(err);
  }
};

getData(`${url}/logs/${petId}`);

const displayLogs = (data) => {
  nameHeader.innerText = `${data[0].name}: Health Records`;
  logsContainer.innerHTML = "";

  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    logsContainer.appendChild(div);

    const title = document.createElement("h4");
    title.innerText = item.title;
    div.appendChild(title);

    const content = document.createElement("div");
    content.classList.add("content");
    div.appendChild(content);

    const date = document.createElement("p");
    date.innerText = new Date(item.date).toLocaleDateString("en-CA");
    content.appendChild(date);

    const description = document.createElement("p");
    description.innerText = item.description;
    content.appendChild(description);
  });
};

//-----------------------ADD LOG---------------------
document.getElementById("addLog").addEventListener("click", () => {
  location = `/add-log.html?pet_id=${petId}`;
});

document.getElementById("addDoc").addEventListener("click", () => {
  location = `/add-doc.html?pet_id=${petId}`;
});

//-----------------------FILTERS---------------------
logBtn.addEventListener("click", () => {
  logBtn.classList.toggle("btn-inactive");
  logBtn.classList.toggle("btn-light");

  document.getElementById("logs").classList.toggle("not-shown");
});
