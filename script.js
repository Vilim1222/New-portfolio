const categories = {
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg'],
  nature: ['images/nature1.jpg', 'images/nature2.jpg'],
  portraits: ['images/portraits1.jpg', 'images/portraits2.jpg'],
  street: ['images/street1.jpg', 'images/street2.jpg'],
  commercial: ['images/commercial1.jpg', 'images/commercial2.jpg']
};

let currentCategory = 'fashion';
let currentIndex = 0;
const galleryImage = document.getElementById('gallery-image');
const navItems = document.querySelectorAll('nav ul li');

function updateImage() {
  const images = categories[currentCategory];
  galleryImage.src = images[currentIndex];
}

document.querySelector('.arrow.left').addEventListener('click', () => {
  const images = categories[currentCategory];
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  const images = categories[currentCategory];
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    currentCategory = item.getAttribute('data-category');
    currentIndex = 0;
    updateImage();
  });
});

// Automatsko mijenjanje svakih 4 sekunde
setInterval(() => {
  const images = categories[currentCategory];
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}, 4000);
