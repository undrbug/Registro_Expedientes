let loginForm = document.querySelector(".my-form");

let user = {
  email: "julio@iprodha.com.ar",
  password: "Julio1234",
}

const url = "http://127.0.0.1:5500/proyectos/julio_iprodha/front/index/index.html";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value === user.email && password.value === user.password) {
    window.location.href = url;
  }
});