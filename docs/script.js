// This file contains the JavaScript functionality for the Valentine's Day website.

document.addEventListener("DOMContentLoaded", function() {
    // Decoração: corações animados subindo
    function createHearts() {
        for (let i = 0; i < 36; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = ['💖','💗','💓','💞','💕','💘'][Math.floor(Math.random()*6)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = (Math.random() * 8) + 's';
            heart.style.fontSize = (1.6 + Math.random()*2.2) + 'rem';
            document.body.appendChild(heart);
        }
    }
    createHearts();

    const button = document.getElementById("showSiteButton");
    const siteContent = document.getElementById("siteContent");
    const slideshowImages = document.querySelectorAll(".slide");
    let currentImageIndex = 0;

    button.addEventListener("click", function() {
        button.classList.add("flower-animate-out");
        setTimeout(function() {
            siteContent.classList.remove("hidden");
            button.style.display = "none";
            startSlideshow();
        }, 600); // Aguarda a animação
    });

    function startSlideshow() {
        slideshowImages.forEach((img, idx) => {
            img.style.display = idx === 0 ? "block" : "none";
            img.classList.remove("slide-in", "slide-out");
            if (idx === 0) img.classList.add("slide-in");
        });
        let prevIndex = 0;
        setInterval(() => {
            const currentIndex = prevIndex;
            const nextIndex = (currentIndex + 1) % slideshowImages.length;
            const currentImg = slideshowImages[currentIndex];
            const nextImg = slideshowImages[nextIndex];

            // Remove animation classes
            slideshowImages.forEach(img => {
                img.classList.remove("slide-in", "slide-out");
            });

            // Prepare next image
            nextImg.style.display = "block";
            nextImg.classList.add("slide-in");
            currentImg.classList.add("slide-out");

            setTimeout(() => {
                currentImg.style.display = "none";
                currentImg.classList.remove("slide-out");
            }, 600);

            prevIndex = nextIndex;
        }, 3000);
    }
});