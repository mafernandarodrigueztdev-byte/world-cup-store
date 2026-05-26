//? OTROS

document.addEventListener("DOMContentLoaded", function() {
    const elementoCarrusel = document.querySelector('#miCarrusel');

  
    const miCarrusel = new bootstrap.Carousel(elementoCarrusel, {
    interval: 3000, 
    wrap: true      
    });
});

