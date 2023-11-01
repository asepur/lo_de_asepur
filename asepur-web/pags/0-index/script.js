const container = document.querySelector('.container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Función para cambiar el contenido del contenedor
async function cambiarContenido(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error('Error al cargar el contenido:', error);
    }
}

// Asigna funciones de clic a los botones de navegación
prevButton.addEventListener('click', function() {
    cambiarContenido(':C/Users/usuario/Desktop/Asepur/50-prjects--days/1-expanding-cards/index.html');
});

nextButton.addEventListener('click', function() {
    cambiarContenido('ejercicio2.html');
});
