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

    //Coger title del xml y ponerlo en el html
    for (i = 0; i < 10; i++) {
        var titulo = xmlDoc.getElementsByTagName("title")[i].innerHTML;
        document.getElementsByTagName("h4")[i].innerHTML = titulo;
    }

    //Text
    //Select
    var opcionesSelect = [];
    var opcion = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName('option').length;
    for (i = 0; i < opcion; i++) {
        opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[2].getElementsByTagName('option')[i].innerHTML;
    }
    
    ponerDatosSelectHtml(opcionesSelect);

}

function ponerDatosSelectHtml(opcion) {
    var select = document.getElementsByTagName("select")[0];
    for (i = 0; i < opcion.length; i++) {
        var option = document.createElement("option");
        option.text = opcion[i];
        option.value = i + 1;
        select.options.add(option);
    }
}
