const categories = {
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg'],
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

function setActiveCategory(category) {
  // Ukloni aktivnu klasu sa svih stavki
  navItems.forEach(item => item.classList.remove('active'));
  // Pronađi i postavi aktivnu klasu na odabranu kategoriju
  const activeItem = Array.from(navItems).find(
    item => item.getAttribute('data-category') === category
  );
  if (activeItem) activeItem.classList.add('active');
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
    setActiveCategory(currentCategory); // Dodajemo poziv nove funkcije
    updateImage();
  });
});

// Inicijalno postavljanje aktivne klase
setActiveCategory(currentCategory);

// Automatsko mijenjanje svakih 4 sekunde

