window.onload = function () {
    //Leer XML >> xml/formulario.xml
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "https://rawgit.com/DavidVillalba/Examen-Autocorreccion/tree/v.24_01_2018/xml", true); //cambiar en github
    xhttp.send();
}

function gestionarXml(datosXml) {
    var xmlDoc = datosXml.responseXML;//Parse XML a xmlDOC

    //
    //for (i = 0; i < 10; i++) {
        var titulo = xmlDoc.getElementsByTagName("title")[0].innerHTML;
        ponerTitulos(titulo);
    //}

}

//Poner los titulos en el HTML
function ponerTitulos(titulo) {
    //for (i = 0; i < 10; i++) {
        document.getElementsByTagName("h4")[0].innerHTML = titulo;
    //}
}