window.onload = function () {
    document.getElementById("inicio").onclick = inicio;
    document.getElementById("info").onclick = info;
    document.getElementById("ubicacion").onclick = ubicacion;
};

function inicio() {
    document.getElementById("inicio").innerHTML = "···INICIO···";
    document.getElementById("info").innerHTML = "INFORMACIÓN";
    document.getElementById("ubicacion").innerHTML = "UBICACIÓN";
}

function info() {
    document.getElementById("inicio").innerHTML = "INICIO"
    document.getElementById("info").innerHTML = "···INFORMACIÓN···";
    document.getElementById("ubicacion").innerHTML = "UBICACIÓN";
}

function ubicacion() {
    document.getElementById("inicio").innerHTML = "INICIO"
    document.getElementById("info").innerHTML = "INFORMACIÓN";
    document.getElementById("ubicacion").innerHTML = "···UBICACIÓN···";
}