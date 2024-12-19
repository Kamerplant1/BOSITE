
const images = [
    'IMG/92xc0k.jpg',
    'IMG/354072278ea3016361f1453d9659c212.jpg',
    'IMG/freakbob.webp',
    'IMG/planktonaugh.webp'
];
let currentIndex = 0;


const sliderImage = document.getElementById('slider-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');


function updateImage(index) {
    sliderImage.src = images[index];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

updateImage(currentIndex);