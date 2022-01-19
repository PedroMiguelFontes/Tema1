let username=document.getElementById("username").value
let password=document.getElementById("password").value
let lUsername=document.getElementById("lUsername").value
let lPassword=document.getElementById("lPassword").value

function submeter() {
    window.alert("Obrigado pelo feedback"+username)
}

function registro() {
    window.alert("Registrado")
}

function login() {
    if ((username!=lUsername) || (password!=lPassword)) {
        window.alert("Username e/ou password incorreto")
    }
    else {
        window.alert("Login bem sucedido")
    }
}