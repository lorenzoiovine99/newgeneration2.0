const swiper = new Swiper('.swiper', {
    loop: true, // Lo slider continua in loop
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 7000, // Cambia slide automaticamente ogni 3 secondi
        disableOnInteraction: false,
    },
    on: {
        slideChangeTransitionStart: function () {
            // Trova la slide attiva
            const activeSlide = document.querySelector('.swiper-slide-active');
            const video = activeSlide.querySelector('video');

            // Se la slide contiene un video, ferma l'autoplay
        },
        slideChangeTransitionEnd: function () {
            // Trova la slide attiva
            const activeSlide = document.querySelector('.swiper-slide-active');
            const video = activeSlide.querySelector('video');

            // Se la slide attiva non contiene un video, riavvia l'autoplay
            if (!video) {
                swiper.autoplay.start(); // Riavvia l'autoplay
            }
        },
    },
});

const hamburger = document.querySelector('.hamburger');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Aggiungi evento click all'hamburger
hamburger.addEventListener('mouseenter', () => {
    dropdownMenu.classList.toggle('show'); // Aggiunge/rimuove la classe 'show'
});

// Nascondi il menu quando il cursore esce dal menu a tendina
dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('show'); // Nasconde il menu
});

// Mostra o nasconde il menu al clic
hamburger.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show'); // Aggiunge o rimuove la classe 'show'
});