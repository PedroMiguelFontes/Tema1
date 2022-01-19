var username=document.getElementById("username").value
var password=document.getElementById("password").value


function submeter() {
    window.alert("Obrigado pelo feedback")
}

function regista() {
    window.alert("Registrado")
}

function login() {
    let lUsername=document.getElementById("lUsername").value
    let lPassword=document.getElementById("lPassword").value
    if ((username!=lUsername) || (password!=lPassword)) {
        window.alert("Username e/ou password incorreto")
    }
    else {
        window.alert("Login bem sucedido")
    }
}