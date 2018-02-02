
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

    /*
    Select
    */
    for (i = 2; i < 6; i++) {
        var opcionesSelect = [];
        var nopt = xmlDoc.getElementsByTagName("question")[i].getElementsByTagName('option').length;
        for (j = 0; j < nopt; j++) {
            opcionesSelect[j] = xmlDoc.getElementsByTagName("question")[i].getElementsByTagName('option')[j].innerHTML;
        }

        var select = document.getElementsByTagName("select")[i - 2];
        for (k = 0; k < opcionesSelect.length; k++) {
            var option = document.createElement("option");
            option.text = opcionesSelect[k];
            option.value = k + 1;
            select.options.add(option);
        }
        //ponerDatosSelectHtml(opcionesSelect, i);
    }

    /*
    Checkbox
    */
    
}

function ponerDatosSelectHtml(opt, i) {
    var select = document.getElementsByTagName("select")[i - 2];
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

/*http://jsfiddle.net/LYteC/4/*/
