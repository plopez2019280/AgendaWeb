const $submit = document.getElementById("login-btn"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible");

document.addEventListener("change", (e => {
    if(e.target === $visible){
        if($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
}));

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        if($password.value === "password" && $username.value === "username"){
            e.preventDefault();
            window.location.href = "./assets/pages/contacto.html";
        }else if($password.value !== "password" && $username.value !== "username"){
            window.alert("feo maldito");
        }
    }
})