
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

var decodeEntities = (function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');

function gestionarXml(datosXml) {
    var xmlDoc = datosXml.responseXML;//Parse XML a xmlDOC

    //Coger title del xml y ponerlo en el html
    for (i = 0; i < 10; i++) {
        var titulo = xmlDoc.getElementsByTagName("title")[i].innerHTML;
        document.getElementsByTagName("h4")[i].innerHTML = titulo;
    }

    for (numPregunta = 2; numPregunta < 4; numPregunta++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option').length;
        for (i = 0; i < nopt; i++) {
            opcionesSelect[i] = xmlDoc.getElementsByTagName("question")[numPregunta].getElementsByTagName('option')[i].innerHTML;
        }
        ponerDatosSelectHtml(opcionesSelect, numPregunta);
    }
}

function ponerDatosSelectHtml(opt, numPregunta) {
    var select = document.getElementsByTagName("select")[numPregunta - 2];
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

/*http://jsfiddle.net/LYteC/4/*/
