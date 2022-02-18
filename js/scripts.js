function submeter() {
    var storedUsername=sessionStorage.getItem("username");
    window.alert("Obrigado pelo feedback"+storedUsername)
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

let total=document.getElementById("")

function confirmed() {
    window.alert("Produto comprado com sucesso")
}

function addComputer() {
    
    sessionStorage.setItem("total",total.value+220)
}

function addTablet() {
    sessionStorage.getItem("total",total.value)
    sessionStorage.setItem("total",total.value+120)
}

function addTV() {
    sessionStorage.getItem("total",total.value)
    sessionStorage.setItem("total",total.value+400)
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

function productCheck() {
    var user=sessionStorage.getItem("username")
    var nProdutos=document.getElementById("nProduto")
    sessionStorage.setItem("nProdutos",nProdutos.value)
    sessionStorage.getItem("nprodutos")
    document.getElementById("username").value=user
}

function confirmed() {
    sessionStorage.getItem("nprodutos")
    sessionStorage.setItem("nProdutos",nProdutos.value+1)
}}