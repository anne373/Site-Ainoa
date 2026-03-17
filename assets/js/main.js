/**
 * AINOA COIFFURE — Script principal
 * -----------------------------------
 * - Menu de navigation mobile (hamburger)
 * - Carrousel automatique avec points de navigation
 */

document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------------------
       MENU MOBILE — Toggle hamburger / fermeture sur clic de lien
    ----------------------------------------------------------------------- */

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    if (mobileNavToggle && mobileNav) {
        function closeMenu() {
            mobileNav.classList.remove('is-active');
            mobileNavToggle.classList.remove('is-active');
        }

        mobileNavToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('is-active');
            mobileNavToggle.classList.toggle('is-active');
        });

        // Ferme le menu quand on clique sur un lien
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }


    /* -----------------------------------------------------------------------
       CARROUSEL — Défilement automatique avec points de navigation
    ----------------------------------------------------------------------- */

    const slidesContainer = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (!slidesContainer || slides.length === 0) return;

    let currentIndex = 0;
    let slideInterval;

    // Créer les points de navigation dynamiquement
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        dot.setAttribute('aria-label', `Diapositive ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Aller à une diapositive précise
    function goToSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Avancer à la diapositive suivante
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

    // Démarrer le défilement automatique (toutes les 5s)
    function startInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Redémarrer l'intervalle après interaction utilisateur
    function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
    }

    // Initialisation
    goToSlide(0);
    startInterval();

});
