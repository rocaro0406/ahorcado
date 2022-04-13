window.onload = function() {
    agregarPalabraNueva(localStorage.getItem("palabraNueva"));
    detectarFirefox();
    p0GLimpiarPizarra();
    inicioJuego();
};

const GUION = "_";
const CANTIDADINTENTOS = 9;
const BIP = "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="


var bDPalabras = ["archivo", "arrastrar", "beta", "biblioteca", "binario", "bug", "captura",
    "cliente", "colgar", "comando", "compilador", "componente", "comprimido",
    "controladores", "copia", "crack", "datos", "desarrollo", "editar",
    "ejecutable", "ensamblador", "freeware", "fuente", "funcionamiento",
    "herramientas", "icono", "interfaz", "lenguaje", "licencia", "malware",
    "mantenimiento", "memoria", "modelo", "pirata", "producto", "protocolo",
    "rendimiento", "requisitos", "rutina", "servidores", "shareware",
    "sistema", "soporte", "tarea", "tester", "usuario", "utilidades", "videojuegos"
];

var debug = false;
var debugAh = false;
var jugando = false;

var intentos = 0;
var palabraAdivinar = "";

var letrasAdivinadas = "";
var letrasErradas = [];

function detectarFirefox() {
    if (navigator.userAgent.match(/firefox|fxios/i)) {
        document.getElementById("letras-correctas").style.textDecoration = "none";
    };
};

function gDibujarAhorcado(paso) {
    if (debugAh) {
        console.log("Dibujo Ahorcado: " + paso);
    };
    switch (paso) {
        case 8:
            p1GColumnaAh();
            break;
        case 7:
            p2GTiranteAh();
            break;
        case 6:
            p3GCuerdaAh();
            break;
        case 5:
            p4GCabeza();
            break;
        case 4:
            p5GCuerpoAh();
            break;
        case 3:
            p6GPiernaDerAh();
            break;
        case 2:
            p7GPiernaIzqAh();
            break;
        case 1:
            p8GBrazoDerAh();
            break;
        case 0:
            p9GBrazoIzqAh();
            break;
        default:
            p0GLimpiarPizarra();
            break;
    };
};

function guiConstruirTd(dato) {
    var td = document.createElement("td");
    td.textContent = dato;
    return td;
};

function guiConstruirTrLetrasCorrectas() {
    var trLetrasAdivinadas = document.getElementById("letras-correctas");
    for (let i = 0; i < letrasAdivinadas.length; i++) {
        if (letrasAdivinadas[i] != GUION) {
            trLetrasAdivinadas.appendChild(guiConstruirTd(letrasAdivinadas[i]));
        } else {
            trLetrasAdivinadas.appendChild(guiConstruirTd("_"));
        };
    };
};

function guiPresentarLetrasCorrectas() {
    var trLetrasAdivinadas = document.getElementById("letras-correctas");
    var cadaTdLetrasAdivinadas = trLetrasAdivinadas.getElementsByTagName("td");
    for (let i = 0; i < letrasAdivinadas.length; i++) {
        if (letrasAdivinadas[i] != GUION) {
            cadaTdLetrasAdivinadas[i].innerText = letrasAdivinadas[i];
        } else {
            cadaTdLetrasAdivinadas[i].innerText = "_";
        };
    }
};

function guiAgregarLetraIncorrecta(letra) {
    var trLetrasErradas = document.getElementById("letras-incorrectas");
    trLetrasErradas.appendChild(guiConstruirTd(letra));
};

function agregarPalabraNueva(nuevaPalabra) {
    if (!bDPalabras.includes(nuevaPalabra) && nuevaPalabra != "") {
        bDPalabras.push(nuevaPalabra);
    }
};

function guionesDibujar() {
    let guiones = [];
    for (var i = 0; i < palabraAdivinar.length; i++) {
        guiones.push(GUION)
    }
    letrasAdivinadas = guiones;
};

function palabraSecreta() {
    intentos = CANTIDADINTENTOS;
    palabraAdivinar = bDPalabras[Math.floor(Math.random() * bDPalabras.length)].toUpperCase();
    letrasAdivinadas = "";
    letrasErradas = [];
    // Debug
    if (debug) {
        console.log("Palabra :" + palabraAdivinar);
        console.log("Intentos: " + intentos);
    };
};

function ingresarLetraAdivinada(letraCorrecta) {
    for (var idx = 0; idx < palabraAdivinar.length; idx++) {
        if (palabraAdivinar[idx] == letraCorrecta) {
            letrasAdivinadas[idx] = letraCorrecta;
        }
        if (palabraAdivinar == letrasAdivinadas.join("")) {
            pGGanaste();
            console.log("Ganaste!!!");
            jugando = false;
        }
    }
};

function ingresarLetraIncorrecta(letraIncorrecta) {
    var snd = new Audio(BIP);
    if (!letrasErradas.includes(letraIncorrecta)) {
        letrasErradas.push(letraIncorrecta);
        guiAgregarLetraIncorrecta(letraIncorrecta);
        intentos -= 1;
        gDibujarAhorcado(intentos);
        if (intentos == 0) {
            pGPerdiste();
            console.log("Perdiste!!!");
            jugando = false;
        }
    } else {
        snd.play();
    }
};

function procesarLetra(letra) {
    var snd = new Audio(BIP);
    regex = /[A-Za-z]/
    if (regex.test(letra)) {
        return letra[0].toUpperCase();
    } else {
        snd.play();
    };
};

function verificarLetra(letraAVerificar) {
    if (palabraAdivinar.includes(letraAVerificar)) {
        ingresarLetraAdivinada(letraAVerificar);
        guiPresentarLetrasCorrectas();
        if (debug) {
            console.log("Letra ingresada como Adivinada: " + letrasAdivinadas);
        };

    } else if (letraAVerificar != undefined) {
        ingresarLetraIncorrecta(letraAVerificar);
        if (debug) {
            console.log("Letra ingresada como Erradas: " + letrasErradas);
            console.log("Intentos: " + intentos);
        };
    };
};

function inicioJuego() {
    jugando = true;
    palabraSecreta();
    guionesDibujar();
    guiConstruirTrLetrasCorrectas();
};

function guiBorrarTdLetrasCorrectas() {
    var trLetrasAdivinadas = document.getElementById("letras-correctas");
    for (let i = 0; i < letrasAdivinadas.length; i++) {
        trLetrasAdivinadas.deleteCell(-1);
    };
};

function guiBorrarTdLetrasIncorrectas() {
    var trLetrasErradas = document.getElementById("letras-incorrectas");
    for (let i = 0; i < letrasErradas.length; i++) {
        trLetrasErradas.deleteCell(-1);
    };
};

function nuevoJuego() {
    console.log("Nuevo Juego");
    jugando = true;
    p0GLimpiarPizarra();
    guiBorrarTdLetrasCorrectas();
    guiBorrarTdLetrasIncorrectas()
    palabraSecreta();
    guionesDibujar();
    guiConstruirTrLetrasCorrectas();
};

document.addEventListener('keydown', function(event) {
    //console.log(event.key);
    if (jugando) {
        verificarLetra(procesarLetra(event.key));
    };
});