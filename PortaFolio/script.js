const formulario = document.getElementById('mi-formulario');
const cajaMensaje = document.getElementById('mensaje-exito');

formulario.addEventListener('submit', async function(evento) {
    // 1. Evitamos que se abra la página externa de Formspree
    evento.preventDefault(); 

    const datos = new FormData(formulario);
    

    try {
        const respuesta = await fetch(formulario.action, {
            method: formulario.method,
            body: datos,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (respuesta.ok) {
            formulario.reset(); 
            
            cajaMensaje.textContent = "¡Gracias! Tu mensaje ha sido enviado correctamente.";
            cajaMensaje.style.display = 'block'; 

            setTimeout(function() {
                cajaMensaje.style.display = 'none';
            }, 5000);
        } else {
            alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.");
        }

    } catch (error) {
        alert("Error de conexión. Por favor verifica tu internet.");
    }
});