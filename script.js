// 1. Reference the new title element at the top of your script
const galleryImage = document.getElementById("gallery-image");
const galleryTitle = document.getElementById("gallery-title");

// 2. Map out titles for your images matching your data structure arrays
const photoTitles = {
  "images/fashion1.jpg": "The Fool's Journey fashion project",
  "images/fashion2.jpg": "GloriaIN - Velvet noir editorial",
  "images/portraits1.jpg": "Rajna - Vere models", // Fixed plural spelling to match your array map
  // Map all your image paths to their respective titles here...
};

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
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg', 'images/fashion4.jpg', 'images/fashion5.jpg', 'images/fashion6.jpg', 'images/fashion7.jpg', 'images/fashion8.jpg', 'images/fashion9.jpg', 'images/fashion10.jpg', 'images/fashion11.jpg', 'images/fashion12.jpg'],
  portraits: ['images/portraits1.jpg', 'images/portraits2.jpg', 'images/portraits3.jpg', 'images/portraits4.jpg', 'images/portraits5.jpg', 'images/portraits6.jpg', 'images/portraits7.jpg', 'images/portraits8.jpg', 'images/portraits9.jpg', 'images/portraits10.jpg'],
  work: ['images/work1.jpg', 'images/work2.jpg', 'images/work3.jpg', 'images/work4.jpg', 'images/work5.jpg', 'images/work6.jpg', 'images/work7.jpg', 'images/work8.jpg', 'images/work9.jpg', 'images/work10.jpg']
};

let currentCategory = 'fashion';
let currentIndex = 0;
const navItems = document.querySelectorAll('nav ul li');

// INTEGRATED LOGIC INSIDE YOUR FUNCTION BELOW:
function updateImage() {
  const images = categories[currentCategory];
  const currentSrc = images[currentIndex];
  
  // Keep your exact original behavior
  galleryImage.src = currentSrc;
  
  // Inject text title data directly into your display loop
  if (galleryTitle) {
    if (photoTitles[currentSrc]) {
      galleryTitle.textContent = photoTitles[currentSrc];
    } else {
      galleryTitle.textContent = ""; 
    }
  }
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
updateImage(); // Triggers display initialization smoothly on load

function handleOrientationChange() {
  const isMobile = window.innerWidth <= 768;
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;

  if (isMobile && isLandscape) {
    document.querySelector('.sidebar').style.display = 'flex';
    document.querySelector('.gallery').style.width = '80%';
  }
}

window.addEventListener('resize', handleOrientationChange);
window.addEventListener('orientationchange', handleOrientationChange);

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
