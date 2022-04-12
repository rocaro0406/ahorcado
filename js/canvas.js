var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

///FUNCION PARA DIBUJAR LA BASE DEL AHORCADO
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
    if (intentos == 5) { //TRONCO

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