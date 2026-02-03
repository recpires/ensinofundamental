document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa Animações
    AOS.init({
        duration: 900,
        once: true,
        offset: 80,
        easing: 'ease-out-quart'
    });

    // Rolagem suave para os links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});