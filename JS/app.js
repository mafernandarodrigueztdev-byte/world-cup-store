





//? OTROS

document.addEventListener("DOMContentLoaded", function() {
    const elementoCarrusel = document.querySelector('#miCarrusel');

  // Inicializamos el carrusel con JavaScript
    const miCarrusel = new bootstrap.Carousel(elementoCarrusel, {
    interval: 3000, // Tiempo en milisegundos para cambiar de imagen
    wrap: true      // Vuelve a empezar al llegar al final
    });
});


