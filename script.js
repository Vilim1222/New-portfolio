// 1. Reference core document layout endpoints
const galleryImage = document.getElementById("gallery-image");
const galleryTitle = document.getElementById("gallery-title");

// 2. Map out text titles matching data structure arrays
const photoTitles = {
  "images/fashion1.jpg": "The Fool's Journey - fashion project",
  "images/fashion2.jpg": "FLAW. - Wearing resistance editorial",
  "images/fashion3.jpg": "GloriaIN - Velvet noir editorial",
  "images/fashion4.jpg": "Izakova SS 26",
  "images/fashion5.jpg": "Anatticus 26",
  "images/fashion6.jpg": "Anatticus - The Mind Behind The Making",
  "images/fashion7.jpg": "Jean Paul Gaultier - fashion project",
  "images/fashion8.jpg": "GloriaIN - DIPMOD 10 editorial",
  "images/fashion9.jpg": "Stages of grief - fashion project",
  "images/fashion10.jpg": "Antea Zimaj - Herida",
  "images/fashion11.jpg": "BIPA Fashion.hr - Vicko Racetin ",

  "images/portraits1.jpg": "Dorotea - Vere models",
  "images/portraits2.jpg": "Tanita - Faith Model Managment",
  "images/portraits3.jpg": "Rajna - Vere models",
  "images/portraits4.jpg": "Izabel Kovačić",
  "images/portraits5.jpg": "Goran - Vere models",
  "images/portraits6.jpg": "Nora - Vere models",
  "images/portraits7.jpg": "Slavonska Rapsodija - members",
  "images/portraits8.jpg": "Matej - Vere models",
  "images/portraits9.jpg": "Dorotea - Vere models",
  "images/portraits10.jpg": "Vid - Faith Model Managment",

  "images/work1.jpg": "Armani code - parfume ",
  "images/work2.jpg": "ZAKS x Jelena Rozga TVC ",
  "images/work3.jpg": "Eucerin - Hyaluron-filler 3x",
  "images/work4.jpg": "Stella Rade - Nema te - Eurovision 2026",
  "images/work5.jpg": "Rossi - brande image",
  "images/work6.jpg": "Eucerin - Hydro-protect",
  "images/work7.jpg": "BIPA - advertorijal",
  "images/work8.jpg": "ZFA Folklore ensemble"
};

// 3. Document Category Track Repositories
const categories = {
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg', 'images/fashion4.jpg', 'images/fashion5.jpg', 'images/fashion6.jpg', 'images/fashion7.jpg', 'images/fashion8.jpg', 'images/fashion9.jpg', 'images/fashion10.jpg', 'images/fashion11.jpg'],
  portraits: ['images/portraits1.jpg', 'images/portraits2.jpg', 'images/portraits3.jpg', 'images/portraits4.jpg', 'images/portraits5.jpg', 'images/portraits6.jpg', 'images/portraits7.jpg', 'images/portraits8.jpg', 'images/portraits9.jpg', 'images/portraits10.jpg'],
  work: ['images/work1.jpg', 'images/work2.jpg', 'images/work3.jpg', 'images/work4.jpg', 'images/work5.jpg', 'images/work6.jpg', 'images/work7.jpg', 'images/work8.jpg']
};

let currentCategory = 'fashion';
let currentIndex = 0;

// Gather reference selectors for both Desktop AND Mobile navigation item blocks
const desktopNavItems = document.querySelectorAll('.sidebar nav.menu ul li');
const mobileNavItems = document.querySelectorAll('.mobile-nav .mobile-link');

// 4. Mobile Menu Navigation Structural Interactions
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    // Synchronously open/close menu layout panels and animate hamburger icons into close buttons
    menuToggle.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
}

// Helper core to update text layouts dynamically inside sliders
function updateImage() {
  const images = categories[currentCategory];
  const currentSrc = images[currentIndex];
  
  if (galleryImage) {
    galleryImage.src = currentSrc;
  }
  
  if (galleryTitle) {
    if (photoTitles[currentSrc]) {
      galleryTitle.textContent = photoTitles[currentSrc];
    } else {
      galleryTitle.textContent = ""; 
    }
  }
}

// Clean synchronizer managing both desktop selection and mobile panel link state
function setActiveCategory(category) {
  // Clear desktop nodes
  desktopNavItems.forEach(item => item.classList.remove('active'));
  const activeDesktopItem = Array.from(desktopNavItems).find(
    item => item.getAttribute('data-category') === category
  );
  if (activeDesktopItem) activeDesktopItem.classList.add('active');

  // Clear mobile nodes
  mobileNavItems.forEach(item => item.classList.remove('active'));
  const activeMobileItem = Array.from(mobileNavItems).find(
    item => item.getAttribute('data-category') === category
  );
  if (activeMobileItem) activeMobileItem.classList.add('active');
}

// Arrow click adjustments
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

// Desktop Click Event Binding Mapping
desktopNavItems.forEach(item => {
  item.addEventListener('click', () => {
    currentCategory = item.getAttribute('data-category');
    currentIndex = 0;
    setActiveCategory(currentCategory);
    updateImage();
  });
});

// Mobile Click Event Binding Mapping
mobileNavItems.forEach(item => {
  item.addEventListener('click', () => {
    currentCategory = item.getAttribute('data-category');
    currentIndex = 0;
    setActiveCategory(currentCategory);
    updateImage();

    // Auto-collapse mobile full-screen views after selecting target category
    if (menuToggle && mobileNav) {
      menuToggle.classList.remove("open");
      mobileNav.classList.remove("open");
    }
  });
});

// Boot systems smoothly on primary execution
setActiveCategory(currentCategory);
updateImage();

/* ==========================================================================
   LEGACY ORIENTATION AND RESPONSIVE MONITOR LOGIC HANDLERS
   ========================================================================== */
function checkOrientation() {
  // Safe validation setup checking for rotate-overlays inside source HTML tree layouts
  const overlay = document.querySelector('.rotate-overlay');
  const container = document.querySelector('.container');
  
  if (!overlay) return; // Ignores safety loops cleanly if element is commented out/removed

  const isMobile = window.innerWidth <= 768;
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isMobile && isPortrait) {
    overlay.style.display = 'flex';
    if (container) container.style.display = 'none';
  } else {
    overlay.style.display = 'none';
    if (container) container.style.display = 'flex';
  }
} 

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);

function handleOrientationChange() {
  const isMobile = window.innerWidth <= 768;
  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  const sidebar = document.querySelector('.sidebar');
  const gallery = document.querySelector('.gallery');

  if (isMobile && isLandscape) {
    if (sidebar) sidebar.style.display = 'flex';
    if (gallery) gallery.style.width = '80%';
  }
}

window.addEventListener('resize', handleOrientationChange);
window.addEventListener('orientationchange', handleOrientationChange);

function adjustImageHeight() {
  if (window.innerWidth <= 768 && window.matchMedia("(orientation: portrait)").matches) {
    const img = document.getElementById('gallery-image');
    const sidebar = document.querySelector('.sidebar');
    
    if (img && sidebar) {
      const windowHeight = window.innerHeight;
      const headerHeight = sidebar.offsetHeight;
      img.style.maxHeight = `${windowHeight - headerHeight - 40}px`;
    }
  }
}

window.addEventListener('load', adjustImageHeight);
window.addEventListener('resize', adjustImageHeight);
