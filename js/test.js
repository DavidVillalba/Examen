var formElement = null;
var respuestaText = [];
var respuestaSelect = [];
var respuestasMultiple = [];
var respuestasCheckbox = [];
var respuestaRadio = [];
var nota = 0;

window.onload = function () {
    var url = "https://cdn.jsdelivr.net/gh/DavidVillalba/Examen/json/preguntas.json";
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
        corregir();
        mostrarNota();
        /* if (comprobar() == true) {
             corregir();
             mostrarNota();
         }*/
    };
}

alert("Instrucciones. Este examen pondrá a prueba todos tus conocimientos sobre HTML y XML. Te encontrarás preguntas, unas solo tienen una respuesta posible a elegir entre varias; otras tendrás que responderlas escribiendo y algunas tienen diversas respuestas correctas. Debes responder OBLIGATORIAMENTE a todas las preguntas. No podrás corregir el examen si dejas alguna en blanco. Las repuestas incorrecta restan. ¡Suerte!");

function gestionarJson(datosJson) {
    var preguntas = JSON.parse(datosJson);//Parse JSON

    //Coger title del Json y ponerlo en el html
    for (i = 0; i < 10; i++) {
        document.getElementsByTagName("h4")[i].innerHTML = preguntas.question[i].title;
    }

    //Text
    for (i = 0; i < 2; i++) {
        respuestaText[i] = preguntas.question[i].answer;
    }

    //Select
    for (i = 2; i < 4; i++) {
        var opciones = preguntas.question[i].option.length;
        var select = document.getElementsByTagName("select")[i - 2];
        respuestaSelect[i] = preguntas.question[i].answer;
        for (j = 0; j < opciones; j++) {
            var option = document.createElement("option");
            option.text = preguntas.question[i].option[j];
            option.value = j + 1;
            select.options.add(option);
        }
    }

    //SelectMultiple
    for(i=4;i<6; i++){
        var opciones = preguntas.question[i].option.length;
        var select = document.getElementsByTagName("select")[i - 2];
        respuestasMultiple[i] = [];
        for (j = 0; j < opciones; j++) {
            var option = document.createElement("option");
            option.text = preguntas.question[i].option[j];
            option.value = j + 1;
            select.options.add(option);
            respuestasMultiple[i][j] = preguntas.question[i].answer[j];
        }

    }

    //Checkbox
    for (i = 6; i < 8; i++) {
        var opciones = preguntas.question[i].option.length;
        var checkbox = document.getElementsByTagName("div")[i + 2];
        respuestasCheckbox[i] = [];
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
            respuestasCheckbox[i][j] = preguntas.question[i].answer[j];
        }
    }

    //Radio
    for (i = 8; i < 10; i++) {
        var opciones = preguntas.question[i].option.length;
        var radio = document.getElementsByTagName("div")[i + 2];
        respuestaRadio[i] = preguntas.question[i].answer;
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
        if (text == respuestaText[i]) {
            nota++;
        }
    }

    for (i = 2; i < 4; i++) {
        var select = formElement.elements[i];
        if ((select.selectedIndex - 1) == respuestaSelect[i]) {
            nota++;
        }
    }

    for (i = 4; i < 6; i++) {
        var select = formElement.elements[i];
        var escorrecta = [];
        for (j = 1; j < (select.length); j++) {
            var opt = select.options[j];
            if (opt.selected == true) {
                escorrecta[j] = false;
                for (k = 0; k < respuestasMultiple[i].length; k++) {
                    if ((j) == respuestasMultiple[i][k])
                        escorrecta[j] = true;
                }
                if (escorrecta[i] == true) {
                    nota = nota + 0.5;
                }
            }
        }
    }

    for (i = 6; i < 8; i++) {
        var escorrecta = [];
        var opcionCheckbox;
        if (i == 6) {
            opcionCheckbox = formElement.opcion7;
        } else {
            opcionCheckbox = formElement.opcion8;
        }
        for (j = 0; j < opcionCheckbox.length; j++) {
            if (opcionCheckbox[j].checked) {
                escorrecta[j] = false;
                for (k = 0; k < respuestasCheckbox[i].length; k++) {
                    if ((j) == respuestasCheckbox[i][k]) escorrecta[j] = true;
                }
                if (escorrecta[j] == true) {
                    nota = nota + 0.5;
                }
            }
        }
    }

    for (i = 8; i < 10; i++) {
        var opcionRadio;
        if (i == 8) {
            opcionRadio = formElement.opcion9;
        } else {
            opcionRadio = formElement.opcion10;
        }
        if (opcionRadio.value-1 == respuestaRadio[i]) {
            nota++;
        }
    }
}

function mostrarNota() {
    alert("Tu nota es " + nota.toFixed(2));
}