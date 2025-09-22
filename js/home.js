const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const totalSlides = slides.length;

// Clonar slides para loop contínuo
slides.forEach(slide => {
  const cloneFirst = slide.cloneNode(true);
  const cloneLast = slide.cloneNode(true);
  slidesContainer.appendChild(cloneFirst);
  slidesContainer.insertBefore(cloneLast, slidesContainer.firstChild);
});

let index = totalSlides; // começamos no primeiro slide real
const slideWidth = 100; // em %

slidesContainer.style.transform = `translateX(-${index * slideWidth}%)`;

function moveSlide(direction = 1) {
  index += direction;
  slidesContainer.style.transition = 'transform 0.5s linear';
  slidesContainer.style.transform = `translateX(-${index * slideWidth}%)`;

  slidesContainer.addEventListener('transitionend', () => {
    if(index >= totalSlides * 2){
      slidesContainer.style.transition = 'none';
      index = totalSlides;
      slidesContainer.style.transform = `translateX(-${index * slideWidth}%)`;
    }
    if(index < totalSlides){
      slidesContainer.style.transition = 'none';
      index = totalSlides * 2 - 1;
      slidesContainer.style.transform = `translateX(-${index * slideWidth}%)`;
    }
  }, { once: true });
}

// Botões
nextBtn.addEventListener('click', () => moveSlide(1));
prevBtn.addEventListener('click', () => moveSlide(-1));

// Autoplay contínuo
setInterval(() => moveSlide(1), 10000);