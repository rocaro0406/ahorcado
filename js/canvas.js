var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

var arrayPalabras = ["GATO", "PERRO", "CASA", "TOMATE", "CARRO", "VENTANA", "CIUDAD"];
var intentos = 0;


function palabraSecreta(array) {
    var palabra_seleccionada = array[Math.floor(Math.random() * array.length)]

    return palabra_seleccionada;
}


var palabra = palabraSecreta(arrayPalabras);


//FUNCION PARA INICIAR EL JUEGO
function iniciarJuego() {

    pantalla.classList.remove("oculto");
    //console.log(palabra);
    dibujarBase(); //DIBIJAMOS LA BASE DDEL AHORCADO
    guiones(); //DIBUJAMOS LOS GUIONES DE LAS LETRAS


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

                alert("Tecla presionada no es valida, solo se permiten letras");


            } else {

                dibujarLetra(palabra, letra_tipeada);
            }


        });
    }



}


///FUNCION PARA DINUJAR GUIONES
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


///FUNCION PARA DINUJAR LA BASE DEL AHORCADO
function dibujarBase() {

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(70, 470);
    pincel.lineTo(130, 500);
    pincel.lineTo(10, 500);
    pincel.fill();
}


function dibujarHorca() {

    intentos++;
    pincel.beginPath();
    pincel.lineWidth = 5;

    if (intentos == 1) {

        pincel.moveTo(70, 473);
        pincel.lineTo(70, 50);
        pincel.stroke();

    }
    if (intentos == 2) {

        pincel.moveTo(70, 50);
        pincel.lineTo(250, 50);
        pincel.stroke();

    }
    if (intentos == 3) {

        pincel.moveTo(250, 50);
        pincel.lineTo(250, 100);
        pincel.stroke();

    }
    if (intentos == 4) {

        pincel.arc(250, 148, 50, 0, 2 * Math.PI); //círculo completo.
        pincel.stroke();

    }
    if (intentos == 5) { //TONCO

        pincel.moveTo(250, 198);
        pincel.lineTo(250, 400);
        pincel.stroke();

    }
    if (intentos == 6) { //PIERNA 1

        pincel.moveTo(250, 400);
        pincel.lineTo(200, 480);
        pincel.stroke();

    }
    if (intentos == 7) { //PIERNA 2

        pincel.moveTo(250, 400);
        pincel.lineTo(300, 480);
        pincel.stroke();

    }
    if (intentos == 8) { //BRAZO 1

        pincel.moveTo(250, 300);
        pincel.lineTo(180, 245);
        pincel.stroke();

    }
    if (intentos == 9) { //BRAZO 2

        pincel.moveTo(250, 300);
        pincel.lineTo(320, 245);
        pincel.stroke();

    }

}