window.onload = function () {
    document.getElementById("menuMovil").onclick = menuMovil;
    document.getElementById("inicio").onclick = inicio;
    document.getElementById("info").onclick = info;
    document.getElementById("ubicacion").onclick = ubicacion;
    document.getElementById("about").onclick = about;
    
    document.getElementById("titulo").style.display = "block";
};

function menuMovil() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        
        if (document.getElementById("titulo").style.display === "block") {
            document.getElementById("info").style.display = "none";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("about").style.display = "none";
            document.getElementById("menuMovil").style.position = "absolute";
        }
        
        if (document.getElementById("containerInfo").style.display === "block") {
            document.getElementById("inicio").style.display = "none";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("about").style.display = "none";
            document.getElementById("menuMovil").style.position = "absolute";
        }
        
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
    document.getElementById("titulo").style.display = "block";
    document.getElementById("containerBtn").style.display = "block";
    document.getElementById("containerInfo").style.display = "none";
    document.getElementById("containerUbicacion").style.display="none";
    document.getElementById("containerAbout").style.display="none";
}

function info() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("ubicacion").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    }
    document.getElementById("titulo").style.display = "none";
    document.getElementById("containerBtn").style.display = "none";
    document.getElementById("containerInfo").style.display = "block";
    document.getElementById("containerUbicacion").style.display="none";
    document.getElementById("containerAbout").style.display="none";
}

function ubicacion() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("about").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    }
    document.getElementById("titulo").style.display = "none";
    document.getElementById("containerBtn").style.display = "none";
    document.getElementById("containerInfo").style.display = "none";
    document.getElementById("containerUbicacion").style.display="block";
    document.getElementById("containerAbout").style.display="none";
    
}

function about() {
    if (document.getElementById("menuMovil").style.position === "initial") {
        document.getElementById("inicio").style.display = "none";
        document.getElementById("info").style.display = "none";
        document.getElementById("ubicacion").style.display = "none";
        document.getElementById("menuMovil").style.position = "absolute";
    }
    document.getElementById("titulo").style.display = "none";
    document.getElementById("containerBtn").style.display = "none";
    document.getElementById("containerInfo").style.display = "none";
    document.getElementById("containerUbicacion").style.display="none";
    document.getElementById("containerAbout").style.display="block";
}