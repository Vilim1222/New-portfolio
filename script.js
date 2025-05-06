// Dodajemo na početak postojećeg JavaScripta
 function checkOrientation() {
  const isMobile = window.innerWidth <= 768;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  
  if (isMobile && isPortrait) {
    document.querySelector('.rotate-overlay').style.display = 'flex';
    document.querySelector('.container').style.display = 'none';
  } else {
    document.querySelector('.rotate-overlay').style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
  }
} 

// Event listeneri
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

// Ostatak tvog postojećeg JavaScript koda ostaje isti...
const categories = {
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg', 'images/fashion4.jpg', 'images/fashion5.jpg', 'images/fashion6.jpg', 'images/fashion7.jpg', 'images/fashion8.jpg', 'images/fashion9.jpg', 'images/fashion10.jpg', 'images/fashion11.jpg', 'images/fashion12.jpg', 'images/fashion13.jpg', 'images/fashion14.jpg', 'images/fashion15.jpg', 'images/fashion16.jpg', 'images/fashion17.jpg', 'images/fashion18.jpg', 'images/fashion19.jpg', 'images/fashion20.jpg'],
  nature: ['images/nature1.jpg', 'images/nature2.jpg', 'images/nature3.jpg', 'images/nature4.jpg', 'images/nature5.jpg', 'images/nature6.jpg', 'images/nature7.jpg', 'images/nature8.jpg', 'images/nature9.jpg', 'images/nature10.jpg'],
  portraits: ['images/portraits1.jpg', 'images/portraits2.jpg', 'images/portraits3.jpg', 'images/portraits4.jpg', 'images/portraits5.jpg', 'images/portraits6.jpg', 'images/portraits7.jpg', 'images/portraits8.jpg', 'images/portraits9.jpg', 'images/portraits10.jpg'],
  street: ['images/street1.jpg', 'images/street2.jpg', 'images/street3.jpg', 'images/street4.jpg', 'images/street5.jpg', 'images/street6.jpg', 'images/street7.jpg', 'images/street8.jpg', 'images/street9.jpg', 'images/street10.jpg'],
  commercial: ['images/commercial1.jpg', 'images/commercial2.jpg', 'images/commercial3.jpg', 'images/commercial4.jpg', 'images/commercial5.jpg', 'images/commercial6.jpg', 'images/commercial7.jpg', 'images/commercial8.jpg', 'images/commercial9.jpg', 'images/commercial10.jpg']
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
  navItems.forEach(item => item.classList.remove('active'));
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
    setActiveCategory(currentCategory);
    updateImage();
  });
});

setActiveCategory(currentCategory);
function handleOrientationChange() {
  const isMobile = window.innerWidth <= 768;
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  
  if (isMobile && isLandscape) {
    document.querySelector('.sidebar').style.display = 'flex';
    document.querySelector('.gallery').style.width = '80%';
  }
}

// Dodaj event listener
window.addEventListener('resize', handleOrientationChange);
window.addEventListener('orientationchange', handleOrientationChange);

// Dodaj u script.js
function adjustImageHeight() {
  if (window.innerWidth <= 768 && window.matchMedia("(orientation: portrait)").matches) {
    const img = document.getElementById('gallery-image');
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector('.sidebar').offsetHeight;
    
    img.style.maxHeight = `${windowHeight - headerHeight - 40}px`;
  }
}

window.addEventListener('load', adjustImageHeight);
window.addEventListener('resize', adjustImageHeight);

