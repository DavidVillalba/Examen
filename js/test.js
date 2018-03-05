
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
            if (confirm("¿Quieres saber su nota final?")) {
				corregir();
				MostrarNota();
			}
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
        for (j = 0; j < formElement.elements[i].length; j++) {
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
        for (j = 0; j < formElement.elements[i].length; j++) {
            var option = formElement.elements[i].options[j];
            if (option.checked) {
                check = true;
            }
        }
        if (!check) {
            formElement.elements[i].focus();
            alert("Responde la pregunta: " + (i + 1));
            return false;
        }
    }
    //Radio
    for (i = 8; i < 10; i++) {

        var nombreRadio = null;
        if (i == 8) {
            nombreRadio = formElement.nueve;

        } else {
            nombreRadio = formElement.diez;
        }
        if (nombreRadio.value == "") {
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

    /*for (a = 4; a < 6; a++) {
        var select = formElement.elements[a];
        var escorrecta = [];
        for (i = 1; i < (select.length); i++) {
            var opt = select.options[i];
            if (opt.selected == true) {
                escorrecta[i] = false;
                for (j = 0; j < respuestasMultiple[a].length; j++) {
                    if ((i) == respuestasMultiple[a][j]) escorrecta[i] = true;
                }
                if (escorrecta[i] == true) {
                    notaFinal = notaFinal;
                } else {
                    notaFinal = notaFinal - (1 / respuestasMultiple[a].length);
                }
            }
        }
    }

    for (a = 6; a < 8; a++) {
        var escorrecta = [];
        var nombreCheckbox;
        if (a == 6) {
            nombreCheckbox = formElement.seis;
        } else {
            nombreCheckbox = formElement.siete;
        }
        for (b = 0; b < nombreCheckbox.length; b++) {
            if (nombreCheckbox[b].checked) {
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
        var nombreRadio;
        if (i == 8) {
            nombreRadio = formElement.nueve;
        } else {
            nombreRadio = formElement.diez;
        }
        if ((nombreRadio.value - 1) == respuestaRadio[i]) {
            notaFinal = notaFinal;
        } else {
            notaFinal = notaFinal - 1;
        }
    }
}

function MostrarNota(){
	alert("Tu nota final es "+notaFinal.toFixed(2));
}