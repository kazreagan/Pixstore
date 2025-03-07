const gallery = document.querySelector('.photos');
const images = document.querySelectorAll('.photos img');
let angle = 0;
const step = 360 / images.length;

images.forEach((img, i) => {
    const angleStep = i * step;
    img.style.transform = `rotateY(${angleStep}deg) translateZ(350px)`; // Adjust translateZ value
});

document.getElementById('next').addEventListener('click', () => {
    angle -= step;
    gallery.style.transform = `rotateY(${angle}deg)`;
});

document.getElementById('prev').addEventListener('click', () => {
    angle += step;
    gallery.style.transform = `rotateY(${angle}deg)`;
});