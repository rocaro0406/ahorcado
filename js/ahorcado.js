var boton = document.querySelector("#iniciar-juego");
boton.addEventListener("click", iniciarJuego);
var palabra = palabraSecreta(arrayPalabras);
var arrayPalabras = ["RON", "HERMIONE", "DUMBULDORE", "SNAPE", "FENIX", "GRIFFINDOR"];
var intentos = 0;

function palabraSecreta(array) {
    var palabra_seleccionada = array[Math.floor(Math.random() * array.length)]

    return palabra_seleccionada;
}
//FUNCION PARA INICIAR EL JUEGO
function iniciarJuego() {

    pantalla.classList.remove("oculto");
    dibujarBase();
    guiones();

    if ((intentos == 9) || (!partida)) {

        return;

    } else {

        window.addEventListener("keyup", function(event) { //CAPTURAR TECLA	
            var letra_tipeada = event.key.toUpperCase();
            var expresion = /[A-Z]/;
            var comparacion = letra_tipeada.match(expresion);
            if ((intentos == 9) || (!partida)) {

                return;
            }

            if ((comparacion == null) || (letra_tipeada.length > 1)) {

                alert("solo se permiten letras");


            } else {

                dibujarLetra(palabra, letra_tipeada);
            }

        });
    }

}

///FUNCION PARA DIBUJAR GUIONES
function guiones() {
    var cantidad = palabra.length;
    var x = 400;
    var y = 500;

    for (var i = 1; i <= cantidad; i++) {

        ///DIBIJAMOS LAS LINEAS SEGUN LAS PALABRAS
        pincel.beginPath();
        pincel.lineWidth = 2;
        pincel.moveTo((x + 10), y);
        pincel.lineTo((x + 35), y);
        pincel.stroke();

        x = x + 30;
    }

}

function palabraSecreta(array) {
    var palabra_seleccionada = array[Math.floor(Math.random() * array.length)]

    return palabra_seleccionada;
}

var palabra = palabraSecreta(arrayPalabras);
var array_incorrectas = [];
var array_correctas = [];
//var intentos= 0;
var partida = true;

function dibujarLetra(palabra, letra) {

    if (!array_correctas.includes(letra)) {

        x = 412;
        var compara = false;
        for (var i = 0; i < palabra.length; i++) {

            if (letra == palabra[i]) {
                compara = true;
                pincel.font = "30px Coming Soon, Arial";
                pincel.fillText(palabra[i], x, 495);
                array_correctas.push(letra);

            }

            x = x + 30;
        }

        if (!compara) {

            letraIncorrecta(letra, intentos);
        }

        if (array_correctas.length == palabra.length) {

            gano(palabra);
            return partida = false;
        }

        x = 412;

    }

}

function letraIncorrecta(letra, partida) {

    if (!array_incorrectas.includes(letra)) {

        dibujarHorca();
        array_incorrectas.push(letra);

        if (array_incorrectas.length == 9) {

            perdio(palabra);
            return partida = false;
        } else {

            for (var i = 0; i < array_incorrectas.length; i++) {

                x = 410 + (30 * i);
                pincel.font = "30px Coming Soon, Arial";
                pincel.fillText(array_incorrectas[i], x, 250);

            }
            return;
        }

    }

    return;

}

var mensaje = document.querySelector("#eti-span");

function perdio(palabra) {

    pincel.fillStyle = "red";
    pincel.font = "30px Coming Soon, Arial";
    pincel.fillText("USTED HA PERDIDO ", 370, 320);
    pincel.fillText(" EL JUEGO", 430, 350);
    pincel.fillStyle = "black";
    pincel.fillText("PALABRA: " + palabra, 370, 385);
    return;
}

function gano(palabra) {

    pincel.fillStyle = "green";
    pincel.font = "30px Coming Soon, Arial";
    pincel.fillText("USTED HA GANADO..!! ", 370, 320);
    pincel.fillText(" EL JUEGO", 430, 350);
    pincel.fillStyle = "black";
    pincel.fillText("PALABRA: " + palabra, 370, 385);
    return;
}