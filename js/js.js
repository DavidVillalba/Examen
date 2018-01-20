window.onload = function () {
    document.getElementById("menuMovil").onclick = menuMovil;
    document.getElementById("inicio").onclick = inicio;
    document.getElementById("info").onclick = info;
    document.getElementById("ubicacion").onclick = ubicacion;
     document.getElementById("about").onclick = about;
};

function menuMovil() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("info").style.display = "none";
        document.getElementById("ubicacion").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    } else {
        document.getElementById("inicio").style.display = "block";
        document.getElementById("info").style.display = "block";
        document.getElementById("ubicacion").style.display = "block";
        document.getElementById("about").style.display = "block";
        document.getElementById("menuMovil").style.position = "initial";
        document.getElementById("menuMovil").style.textAlign = "left";
    }

}

function inicio() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("info").style.display = "none";
        document.getElementById("ubicacion").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    } 
}

function info() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("ubicacion").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    } 
}

function ubicacion() {
   if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    }
}

function about() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("ubicacion").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    }
}