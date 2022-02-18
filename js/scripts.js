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


function confirmed() {
    window.alert("Produto comprado com sucesso")
}

function addComputer() {
    document.getElementById("total").value=total+220  
}

function addTablet() {
    document.getElementById("total").value=total+120
}

function addTV() {
    document.getElementById("total").value=total+400
}

function addHammer() {
    document.getElementById("total").value=total+30
}

function addLadder() {
    document.getElementById("total").value=total+60
}


function addToolbox() {
    document.getElementById("total").value=total+100
}

function addPanela() {
    document.getElementById("total").value=total+20
}
function addFridge() {
    document.getElementById("total").value=total+290
}
function addFogao() {
    document.getElementById("total").value=total+330
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
}