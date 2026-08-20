// 1. DOM Elements (Declared once globally)
const galleryImage = document.getElementById('gallery-image');
const galleryTitle = document.getElementById('gallery-title');
const navItems = document.querySelectorAll('nav ul li');

// 2. Photo Titles Configuration Map
// Make sure these match the image paths in your categories array exactly!
const photoTitles = {
  "images/fashion1.jpg": "The Fool's Journey fashion project",
  "images/fashion2.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion3.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion4.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion5.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion6.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion7.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion8.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion9.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion10.jpg": "GloriaIN - Velvet noir editorial",

  "images/portraits1.jpg": "Rajna - Vere models", 
  "images/portraits2.jpg": "Rajna - Vere models", 
  "images/portraits3.jpg": "Rajna - Vere models", 
  "images/portraits4.jpg": "Rajna - Vere models", 
  "images/portraits5.jpg": "Rajna - Vere models", 
  "images/portraits6.jpg": "Rajna - Vere models", 
  "images/portraits7.jpg": "Rajna - Vere models", 
  "images/portraits8.jpg": "Rajna - Vere models", 
  "images/portraits9.jpg": "Rajna - Vere models", 
  "images/portraits10.jpg": "Rajna - Vere models", 

  "images/work1.jpg": "Rajna - Vere models", 
  "images/work2.jpg": "Rajna - Vere models", 
  "images/work3.jpg": "Rajna - Vere models", 
  "images/work4.jpg": "Rajna - Vere models", 
  "images/work5.jpg": "Rajna - Vere models", 
  "images/work6.jpg": "Rajna - Vere models", 
  "images/work7.jpg": "Rajna - Vere models", 
  "images/work8.jpg": "Rajna - Vere models", 
  "images/work9.jpg": "Rajna - Vere models", 
  "images/work10.jpg": "Rajna - Vere models", 


  // Add other image paths and titles here as needed
};

// 3. Category Data Map
const categories = {
  fashion: [
    'images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg', 
    'images/fashion4.jpg', 'images/fashion5.jpg', 'images/fashion6.jpg', 
    'images/fashion7.jpg', 'images/fashion8.jpg', 'images/fashion9.jpg', 
    'images/fashion10.jpg', 'images/fashion11.jpg', 'images/fashion12.jpg'
  ],
  portraits: [
    'images/portraits1.jpg', 'images/portraits2.jpg', 'images/portraits3.jpg', 
    'images/portraits4.jpg', 'images/portraits5.jpg', 'images/portraits6.jpg', 
    'images/portraits7.jpg', 'images/portraits8.jpg', 'images/portraits9.jpg', 
    'images/portraits10.jpg'
  ],
  work: [
    'images/work1.jpg', 'images/work2.jpg', 'images/work3.jpg', 
    'images/work4.jpg', 'images/work5.jpg', 'images/work6.jpg', 
    'images/work7.jpg', 'images/work8.jpg', 'images/work9.jpg', 
    'images/work10.jpg'
  ]
};

// 4. Gallery State Variables
let currentCategory = 'fashion';
let currentIndex = 0;

// 5. Core Gallery Core Functions
function updateImage() {
  const images = categories[currentCategory];
  const currentSrc = images[currentIndex];
  
  // Update the photo source
  galleryImage.src = currentSrc;
  
  // Dynamically update the bottom-left text title if it exists
  if (galleryTitle) {
    if (photoTitles[currentSrc]) {
      galleryTitle.textContent = photoTitles[currentSrc];
    } else {
      galleryTitle.textContent = ""; // Blank if title is missing
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

// 6. Navigation Event Listeners
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

// Initialize Gallery UI Status
setActiveCategory(currentCategory);
updateImage();

// 7. Responsive Layout & Mobile Orientation Functions
function checkOrientation() {
  const isMobile = window.innerWidth <= 768;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  
  const rotateOverlay = document.querySelector('.rotate-overlay');
  const container = document.querySelector('.container');

  // Guard check to make sure elements exist in HTML before targeting styles
  if (!rotateOverlay || !container) return; 

  if (isMobile && isPortrait) {
    rotateOverlay.style.display = 'flex';
    container.style.display = 'none';
  } else {
    rotateOverlay.style.display = 'none';
    container.style.display = 'flex';
  }
} 

function handleOrientationChange() {
  const isMobile = window.innerWidth <= 768;
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  
  if (isMobile && isLandscape) {
    const sidebar = document.querySelector('.sidebar');
    const gallery = document.querySelector('.gallery');
    if (sidebar) sidebar.style.display = 'flex';
    if (gallery) gallery.style.width = '80%';
  }
}

function adjustImageHeight() {
  if (window.innerWidth <= 768 && window.matchMedia("(orientation: portrait)").matches) {
    const sidebar = document.querySelector('.sidebar');
    if (galleryImage && sidebar) {
      const windowHeight = window.innerHeight;
      const headerHeight = sidebar.offsetHeight;
      galleryImage.style.maxHeight = `${windowHeight - headerHeight - 40}px`;
    }
  }
}

// 8. Global Window Listeners
window.addEventListener('load', () => {
  checkOrientation();
  adjustImageHeight();
});
window.addEventListener('resize', () => {
  checkOrientation();
  handleOrientationChange();
  adjustImageHeight();
});
window.addEventListener('orientationchange', () => {
  checkOrientation();
  handleOrientationChange();
});
