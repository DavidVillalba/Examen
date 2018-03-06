var formElement = null;
var respuestaSelect = [];
var respuestasMultiple = [];
var respuestaText = [];
var respuestaRadio = [];
var respuestasCheckbox = [];
var notaFinal = 10;

window.onload = function () {
    var url = "https://rawgit.com/DavidVillalba/Examen/master/json/preguntas.json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarJson(this.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

    formElement = document.getElementById("formulario");
    document.getElementById("containerBtn").onclick = function () {
        if (comprobar() == true) {
            corregir();
            mostrarNota();
        }
    };
}

alert("ewgweggf");

function gestionarJson(datosJson) {
    var preguntas = JSON.parse(datosJson);//Parse JSON

    //Coger title del Json y ponerlo en el html
    for (i = 0; i < 10; i++) {
        document.getElementsByTagName("h4")[i].innerHTML = preguntas.question[i].title;
    }

    //Select
    for (i = 2; i < 6; i++) {
        var opciones = preguntas.question[i].option.length;
        var select = document.getElementsByTagName("select")[i - 2];
        for (j = 0; j < opciones; j++) {
            var option = document.createElement("option");
            option.text = preguntas.question[i].option[j];
            option.value = j + 1;
            select.options.add(option);
        }
    }

    //Checkbox
    for (i = 6; i < 8; i++) {
        var opciones = preguntas.question[i].option.length;
        var checkbox = document.getElementsByTagName("div")[i + 2];
        if (i == 6) {
            agregaName = "opcion7";
        }
        else {
            agregaName = "opcion8";
        }
        for (j = 0; j < opciones; j++) {
            var label = document.createElement("label");
            var input = document.createElement("input");
            var span = document.createElement("span");
            var br = document.createElement("br");
            checkbox.appendChild(label);
            label.innerText = preguntas.question[i].option[j];
            label.appendChild(input);
            label.appendChild(span);
            label.className = "container";
            input.type = "checkbox";
            input.name = agregaName;
            input.value = j + 1;
            span.className = "checkmark";
            checkbox.appendChild(br);
        }
    }

    //Radio
    for (i = 8; i < 10; i++) {
        var opciones = preguntas.question[i].option.length;
        var radio = document.getElementsByTagName("div")[i + 2];
        if (i == 8) {
            agregaName = "opcion9";
        }
        else {
            agregaName = "opcion10";
        }
        for (j = 0; j < opciones; j++) {
            var label = document.createElement("label");
            var input = document.createElement("input");
            var span = document.createElement("span");
            var br = document.createElement("br");
            radio.appendChild(label);
            label.innerText = preguntas.question[i].option[j];
            label.appendChild(input);
            label.appendChild(span);
            label.className = "containerRadio";
            input.type = "radio";
            input.name = agregaName;
            input.value = j + 1;
            span.className = "checkmarkRadio";
            //span.innerText = preguntas.question[i].option[j];
            radio.appendChild(br);
        }
    }

}

function comprobar() {
    //Text
    for (i = 0; i < 2; i++) {
        if (formElement.elements[i].value == "") {
            formElement.elements[i].focus();
            alert("Responde la pregunta: " + (i + 1));
            return false;
        }
    }
    //Select
    for (i = 2; i < 4; i++) {
        if (formElement.elements[i].selectedIndex == 0) {
            formElement.elements[i].focus();
            alert("Responde la pregunta: " + (i + 1));
            return false;
        }
    }
    //Multiple
    for (i = 4; i < 6; i++) {
        var multiple = false;
        for (j = 1; j < formElement.elements[i].length; j++) {
            var option = formElement.elements[i].options[j];
            if (option.selected) {
                multiple = true;
            }
        }
        if (!multiple) {
            formElement.elements[i].focus();
            alert("Responde la pregunta: " + (i + 1));
            return false;
        }
    }
    //Check
    for (i = 6; i < 8; i++) {
        var check = false;
        var opcion;
        if (i == 6) {
            opcion = formElement.opcion7;
        } else {
            opcion = formElement.opcion8;
        }
        for (j = 0; j < opcion.length; j++) {
            if (opcion[j].checked) {
                check = true;
            }
        }
        if (!check) {
            opcion[0].focus();
            alert("Responde la pregunta: " + (i + 1));
            return false;
        }
    }

    //Radio
    for (i = 8; i < 10; i++) {
        var opcionRadio = null;
        if (i == 8) {
            opcionRadio = formElement.opcion9;

        } else {
            opcionRadio = formElement.opcion10;
        }
        if (opcionRadio.value == "") {
            formElement.elements[i].focus();
            alert("Por favor, responde la pregunta " + (i + 1));
            return false;
        }
    }

    return true;
}

function corregir() {
    for (i = 0; i < 2; i++) {
        var text = formElement.elements[i].value;
        if (text.toLowerCase() == respuestaText[i]) {
            notaFinal = notaFinal;
        } else {
            notaFinal = notaFinal - 1;
        }
    }

    for (i = 2; i < 4; i++) {
        var select = formElement.elements[i];
        if ((select.selectedIndex - 1) == respuestaSelect[i]) {
            notaFinal = notaFinal;
        } else {
            notaFinal = notaFinal - 1;
        }
    }

    /*for (i = 4; i < 6; i++) {
        var select = formElement.elements[i];
        var escorrecta = [];
        for (j = 1; j < (select.length); j++) {
            var opt = select.options[j];
            if (opt.selected == true) {
                escorrecta[j] = false;
                for (k = 0; k < respuestasMultiple[i].length; k++) {
                    if ((j) == respuestasMultiple[i][k]) escorrecta[j] = true;
                }
                if (escorrecta[i] == true) {
                    notaFinal = notaFinal;
                } else {
                    notaFinal = notaFinal - (1 / respuestasMultiple[i].length);
                }
            }
        }
    }

    /*for (a = 6; a < 8; a++) {
        var escorrecta = [];
        var opcionCheckbox;
        if (a == 6) {
            opcionCheckbox = formElement.opcion7;
        } else {
            opcionCheckbox = formElement.opcion8;
        }
        for (b = 0; b < opcionCheckbox.length; b++) {
            if (opcionCheckbox[b].checked) {
                escorrecta[b] = false;
                for (c = 0; c < respuestasCheckbox[a].length; c++) {
                    if ((b) == respuestasCheckbox[a][c]) escorrecta[b] = true;
                }
                if (escorrecta[b] == true) {
                    notaFinal = notaFinal;
                } else {
                    notaFinal = notaFinal - (1 / respuestasCheckbox[a].length);
                }
            }
        }
    }*/

    for (i = 8; i < 10; i++) {
        var opcionRadio;
        if (i == 8) {
            opcionRadio = formElement.opcion9;
        } else {
            opcionRadio = formElement.opcion10;
        }
        if ((opcionRadio.value - 1) == respuestaRadio[i]) {
            notaFinal = notaFinal;
        } else {
            notaFinal = notaFinal - 1;
        }
    }
}

function mostrarNota() {
    alert("Tu nota final es " + notaFinal.toFixed(2));
}