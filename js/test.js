
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
}

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
        var checkbox = document.getElementsByTagName("div")[i - 4];
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
        var radio = document.getElementsByTagName("div")[i - 4];
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
