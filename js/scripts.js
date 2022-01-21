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

function confirmed() {
    window.alert("Produto comprado com sucesso")
}


var total=document.getElementById("total").value

function addComputer() {
    total=total+220
    return total
}

function addTablet() {
    total=total+120
    return total
}

function addTV() {
    total=total+400
    return total
}

function addHammer() {
    total=total+30
    return total
}

function addLadder() {
    total=total+60
    return total
}


function addToolbox() {
    total=total+100
    return total
}

function addPanela() {
    total=total+20
    return total
}
function addFridge() {
    total=total+290
    return total
}
function addFogao() {
    total=total+330
    return total
}

