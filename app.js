function getData(){
    let correo = document.getElementById("email").value;
    if(correo == ""){
        document.getElementById("email").focus();
    } else{
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
    }
    console.log(correo);
}

function Aviso(){
    alert("Esperanos poquito!");
}

function hola (){
    alert("hola mundo");
}