window.onload = function () {
    //Leer XML >> xml/formulario.xml
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "https://rawgit.com/DavidVillalba/Examen/master/xml/formulario.xml", true); //cambiar en github
    xhttp.send();
}

function gestionarXml(datosXml) {
    var xmlDoc = datosXml.responseXML;//Parse XML a xmlDOC

    //
    for (i = 0; i < 10; i++) {
        var titulo = xmlDoc.getElementsByTagName("title")[i].innerHTML;
        document.getElementsByTagName("h4")[i].innerHTML = titulo;
    }

}
