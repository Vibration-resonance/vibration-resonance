// Script principal
document.addEventListener('DOMContentLoaded', function() {
    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-element');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    // Code à exécuter une fois le DOM chargé
    console.log('Site Vibration Résonance chargé');

    // Diaporama
    const initSlideshow = () => {
        const slideshow = document.getElementById('residentsSlideshow');
        if (!slideshow) return;

        const images = [];
        // Générer la liste des images de 10011 à 10102
        for (let i = 11; i <= 102; i++) {
            images.push(`images/residents/100${i.toString().padStart(2, '0')}.jpg`);
        }

        // Créer et précharger les images
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Image ${index + 1}`;
            img.className = index === 0 ? 'active' : '';
            slideshow.appendChild(img);
        });

        if (images.length > 1) {
            let currentSlide = 0;
            setInterval(() => {
                const slides = slideshow.getElementsByTagName('img');
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 4000);
        }
    };
    
    initSlideshow();
});
