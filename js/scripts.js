function submeter() {
    window.alert("Obrigado pelo feedback")
}

function regista() {
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    sessionStorage.setItem("username",username.value);
    sessionStorage.setItem("password",password.value);
    window.alert("Registrado")
}

function login() {
    var storedUsername=sessionStorage.getItem("username");
    var storedPassword=sessionStorage.getItem("password");
    var lUsername=document.getElementById("lUsername").value
    var lPassword=document.getElementById("lPassword").value
    if ((storedUsername==lUsername) && (storedPassword==lPassword)) {
        window.alert("Login bem sucedido")
    }
    else {
        window.alert("Username e/ou password incorreto")
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

