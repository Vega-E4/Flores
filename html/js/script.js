document.addEventListener('DOMContentLoaded', () => {
    
    const sticker = document.getElementById('sticker-interactivo');
    const mensajeSecreto = document.getElementById('mensaje-secreto');
    const confettiCanvas = document.getElementById('confetti-canvas');

    if (sticker && mensajeSecreto) {
        // Añadimos 'event' como parámetro para poder controlarlo
        sticker.addEventListener('click', (event) => {

            // === CAMBIO IMPORTANTE: Si es un enlace, prevenimos la navegación inmediata ===
            if (sticker.tagName === 'A') {
                event.preventDefault(); // Detiene el comportamiento por defecto del enlace
                const destinationUrl = sticker.href; // Guardamos la URL de destino

                // Redirigimos después de un tiempo para que se vean los efectos
                setTimeout(() => {
                    window.location.href = destinationUrl;
                }, 2000); // Esperamos 2 segundos (2000 milisegundos)
            }

            // El resto de la lógica se mantiene igual
            sticker.classList.add('clicked');
            
            setTimeout(() => {
                sticker.classList.remove('clicked');
            }, 400);

            if (mensajeSecreto.classList.contains('oculto')) {
                mensajeSecreto.classList.remove('oculto');
            }

            if (confettiCanvas) {
                lanzarConfeti();
            }
        });
    }

    function lanzarConfeti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#FFD700', '#FFEB3B', '#FFF176', '#FFFFFF']
            });
        }
    }

});