// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Code JavaScript pour la navigation mobile (existant)
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    function closeMenu() {
        mobileNav.classList.remove('is-active');
        mobileNavToggle.classList.remove('is-active');
    }

    mobileNavToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('is-active');
        mobileNavToggle.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Code JavaScript pour le carrousel (existant)
    const slidesContainer = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');

    if (slidesContainer && slides.length > 0) { // Ajout d'une vérification pour s'assurer que le carrousel existe
        let currentIndex = 0;
        let slideInterval;

        slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetInterval();
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(index) {
            slidesContainer.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(d => d.classList.remove('active'));
            dots[index].classList.add('active');
            currentIndex = index;
        }

        function nextSlide() {
            const nextIndex = (currentIndex + 1) % slides.length;
            goToSlide(nextIndex);
        }

        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        goToSlide(0);
        startInterval();
    }

    // JavaScript pour le bloc de galerie dynamique (le nouveau code)
    const galleryPhotos = [
        'images/gallery-dynamic-1.png',
        'images/gallery-dynamic-2.png',
        'images/gallery-dynamic-3.png',
        'images/gallery-dynamic-4.png',
        'images/gallery-dynamic-5.png',
        'images/gallery-dynamic-6.png',
        'images/gallery-dynamic-7.png',
        'images/gallery-dynamic-8.png',
        'images/gallery-dynamic-9.png',
        'images/gallery-dynamic-10.png'
    ]; // Ajoutez plus de chemins d'image ici

    const dynamicGallery = document.getElementById('bloc-galerie-photos');
    // S'assurer que le bloc de galerie dynamique existe avant de tenter d'y accéder
    if (dynamicGallery) {
        const dynamicItems = dynamicGallery.querySelectorAll('.gallery-dynamic-item img');

        let currentlyDisplayedImages = [];

        function getRandomUniquePhotos(count) {
            const availablePhotos = galleryPhotos.filter(photo => !currentlyDisplayedImages.includes(photo));
            const selectedPhotos = [];
            for (let i = 0; i < count; i++) {
                if (availablePhotos.length === 0) {
                    currentlyDisplayedImages = []; // Réinitialiser pour permettre la répétition si plus de photos uniques
                    availablePhotos.push(...galleryPhotos);
                }
                const randomIndex = Math.floor(Math.random() * availablePhotos.length);
                selectedPhotos.push(availablePhotos[randomIndex]);
                availablePhotos.splice(randomIndex, 1);
            }
            return selectedPhotos;
        }

        function initializeGallery() {
            currentlyDisplayedImages = getRandomUniquePhotos(3);
            dynamicItems.forEach((img, index) => {
                img.src = currentlyDisplayedImages[index];
            });
        }

        function rotatePhoto() {
            const photoToReplaceIndex = Math.floor(Math.random() * 3);
            const newPhoto = getRandomUniquePhotos(1)[0];

            currentlyDisplayedImages[photoToReplaceIndex] = newPhoto;
            dynamicItems[photoToReplaceIndex].src = newPhoto;
        }

        initializeGallery();
        setInterval(rotatePhoto, 3000);
    }
});