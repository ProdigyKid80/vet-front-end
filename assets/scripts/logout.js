//---------- LOG OUT -------------
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  location.replace("/index.html");
});
