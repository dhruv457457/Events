// for carousel
let slideIndex = 0;

        function showSlides() {
            const slides = document.querySelectorAll('.carousel-slide img');
            slides.forEach(slide => {
                slide.style.display = 'none';
            });
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 3000); // Change slide every 3 seconds
        }

        showSlides();