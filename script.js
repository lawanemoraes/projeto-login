// ================================
// LOGIN
// ================================

const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const formStatus = document.getElementById("form-status");

    emailError.textContent = "";
    passwordError.textContent = "";
    formStatus.textContent = "";

    email.classList.remove("error");
    password.classList.remove("error");
    formStatus.classList.remove("success", "error");

    let formularioValido = true;

    if (email.value.trim() === "") {
      emailError.textContent = "O campo e-mail é obrigatório.";
      email.classList.add("error");
      formularioValido = false;
    }

    if (password.value.trim() === "") {
      passwordError.textContent = "O campo senha é obrigatório.";
      password.classList.add("error");
      formularioValido = false;
    }

    if (formularioValido) {
      localStorage.setItem("usuario", email.value);
      localStorage.setItem("autenticado", "true");

      window.location.href = "dashboard.html";
    } else {
      formStatus.textContent = "Preencha os campos obrigatórios.";
      formStatus.classList.add("error");
    }
  });
}


// ================================
// DASHBOARD
// ================================

const welcomeMessage = document.getElementById("welcome-message");

if (welcomeMessage) {
  const autenticado = localStorage.getItem("autenticado");
  const usuario = localStorage.getItem("usuario");

  if (autenticado !== "true") {
    window.location.href = "index.html";
  } else {
    welcomeMessage.textContent = `Bem-vindo, ${usuario}!`;
  }
}


// ================================
// CADASTRO
// ================================

const cadastroForm = document.getElementById("cadastro-form");

if (cadastroForm) {
  cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("name");
    const email = document.getElementById("email");
    const senha = document.getElementById("password");
    const status = document.getElementById("cadastro-status");

    status.textContent = "";
    status.classList.remove("success", "error");

    let cadastroValido = true;

    if (nome.value.trim() === "") {
      cadastroValido = false;
    }

    if (email.value.trim() === "") {
      cadastroValido = false;
    }

    if (senha.value.trim() === "") {
      cadastroValido = false;
    }

    if (!cadastroValido) {
      status.textContent = "Preencha todos os campos.";
      status.classList.add("error");
      return;
    }

    status.textContent = "Usuário cadastrado com sucesso!";
    status.classList.add("success");

    cadastroForm.reset();
  });
}
