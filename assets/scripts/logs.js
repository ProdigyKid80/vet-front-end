document.getElementById("logFilter").addEventListener("click", () => {
  document.getElementById("logFilter").classList.toggle("btn-inactive");
});

document.getElementById("prescFilter").addEventListener("click", () => {
  document.getElementById("prescFilter").classList.toggle("btn-inactive");
});

//---------- LOG OUT -------------
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  location.replace("/index.html");
});
