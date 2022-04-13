// Gráficos
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.strokeStyle = "#0A3871";
pincel.lineWidth = 4;
pincel.font = "48px Inter";


function pGGanaste() {
    pincel.fillStyle = "White";
    pincel.fillRect(130, 140, 220, 55);
    pincel.fillStyle = "Green";
    pincel.fillText("¡Ganaste!", 140, 180);
};

function pGPerdiste() {
    pincel.fillStyle = "White";
    pincel.fillRect(130, 140, 220, 55);
    pincel.fillStyle = "Red";
    pincel.fillText("¡Perdiste!", 140, 180);
};

function p0GLimpiarPizarra() {
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    pincel.beginPath();
    pincel.moveTo(140, 300);
    pincel.lineTo(340, 300);
    pincel.stroke();
};

function p1GColumnaAh() {
    pincel.beginPath();
    pincel.moveTo(240, 300);
    pincel.lineTo(240, 60);
    pincel.stroke();
};

function p2GTiranteAh() {
    pincel.beginPath();
    pincel.moveTo(238, 60);
    pincel.lineTo(315, 60);
    pincel.stroke();
};

function p3GCuerdaAh() {
    pincel.beginPath();
    pincel.moveTo(315, 58);
    pincel.lineTo(315, 80);
    pincel.stroke();
};

function p4GCabeza() {
    pincel.beginPath();
    pincel.arc(315, 105, 25, 0, 2 * Math.PI);
    pincel.stroke();
};

function p5GCuerpoAh() {
    pincel.beginPath();
    pincel.moveTo(315, 130);
    pincel.lineTo(315, 210);
    pincel.stroke();
};

function p6GPiernaDerAh() {
    pincel.beginPath();
    pincel.moveTo(315, 210);
    pincel.lineTo(340, 235);
    pincel.stroke();
};

function p7GPiernaIzqAh() {
    pincel.beginPath();
    pincel.moveTo(315, 210);
    pincel.lineTo(290, 235);
    pincel.stroke();
};

function p8GBrazoDerAh() {
    pincel.beginPath();
    pincel.moveTo(315, 150);
    pincel.lineTo(340, 175);
    pincel.stroke();
};

function p9GBrazoIzqAh() {
    pincel.beginPath();
    pincel.moveTo(315, 150);
    pincel.lineTo(290, 175);
    pincel.stroke();
};

/*
p1GBaseAh();
p2GColumnaAh();
p3GTiranteAh();
p4GCuerdaAh();
p5GCabeza();
p6GCuerpoAh();
p7GPiernaDerAh();
p8GPiernaIzqAh();
p9GBrazoDerAh();
p10GBrazoIzqAh();
p0GLimpiarPizarra();
*/