/**
 * Lógica Front-End para Viajes Chile
 * Cumple con requerimientos de Bootstrap JS componentes.
 */

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Inicializar Tooltips de Bootstrap (Requerimiento de JS Componente 2)
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // 2. Cambio de color del Navbar al hacer Scroll
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 150) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

    // 3. Alerta en el botón de envío para dar feedback
    const enviarBtn = document.getElementById("enviarBtn");
    if (enviarBtn) {
        enviarBtn.addEventListener("click", function (e) {
            const form = document.querySelector("form");
            if(form.checkValidity()) {
                e.preventDefault();
                alert("Tu mensaje ha sido enviado con éxito. ¡Gracias por contactar a Viajes Chile!");
                form.reset();
            }
        });
    }
});