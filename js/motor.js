var estadoLicuadora = "apagada";

var sonidoLicuadora = document.getElementById("sonido-licuadora");

var botonLicuadora = document.getElementById("blender-button-sonido");

var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "ensendido";
        brbrbr();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada"
        brbrbr();
        licuadora.classList.remove("active");
    }
}

function brbrbr() {
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}