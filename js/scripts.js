function submeter() {
    window.alert("Obrigado pelo feedback")
}

function regista() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    localStorage.setItem("username",username.value);
    localStorage.setItem("username",password.value);
    window.alert("Registrado")
}

function login() {
    var storedUsername=localStorage.getItem("username");
    var storedPassword=localStorage.getItem("password");
    let lUsername=document.getElementById("lUsername").value
    let lPassword=document.getElementById("lPassword").value
    if ((storedUsername!=lUsername) || (storedPassword!=lPassword)) {
        window.alert("Username e/ou password incorreto")
    }
    else {
        window.alert("Login bem sucedido")
    }
}

function addTablet() {
    
}