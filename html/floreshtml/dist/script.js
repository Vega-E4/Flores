onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {

    const miMusica = document.getElementById('miMusica');
    const btnPlayPause = document.getElementById('btnPlayPause');

    // Comprobamos que los elementos existen
    if (btnPlayPause && miMusica) {
        
        btnPlayPause.addEventListener('click', () => {
            // Si la música está pausada, la reproducimos
            if (miMusica.paused) {
                miMusica.play();
                btnPlayPause.textContent = "Pausar Música ⏸️";
            } else {
                // Si la música se está reproduciendo, la pausamos
                miMusica.pause();
                btnPlayPause.textContent = "Reproducir Música ▶️";
            }
        });
    }

});