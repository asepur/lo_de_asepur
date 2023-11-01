const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
/* Aquí va la sección de expanding cards */
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos con la clase 'panel'
    var paneles = document.querySelectorAll('.panel');
  
    // Agregar un event listener a cada panel
    paneles.forEach(function(panel) {
      panel.addEventListener('click', function() {
        // Remover la clase 'active' de todos los paneles
        paneles.forEach(function(panel) {
          panel.classList.remove('active');
        });
  
        // Agregar la clase 'active' solo al panel clickeado
        this.classList.add('active');
      });
    });
  });