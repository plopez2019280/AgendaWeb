const $submit = document.getElementById("login-btn"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username");

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        if ($password.value === "123" && $username.value === "agenda") {
            e.preventDefault();
            window.location.href = "./assets/pages/contacto.html";
        } else if ($password.value !== "123" && $username.value !== "agenda") {
            window.alert("¡Credenciales incorrectas!");
        }
    }
})