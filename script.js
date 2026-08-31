const galleryImage = document.getElementById("gallery-image");
const galleryTitle = document.getElementById("gallery-title");
const bioContainer = document.getElementById("bio-container");
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');

const photoTitles = {
  "images/fashion1.jpg": "GloriaIN - 'Velvet noir' editorial",
  "images/fashion2.jpg": "FLAW. - 'Wearing resistance' editorial",
  "images/fashion3.jpg": "The Fool's Journey - fashion project",
  "images/fashion4.jpg": "GloriaIN - 'Velvet noir' editorial",
  "images/fashion5.jpg": "Anatticus 26",
  "images/fashion6.jpg": "Anatticus - The Mind Behind The Making",
  "images/fashion7.jpg": "Jean Paul Gaultier - fashion project",
  "images/fashion8.jpg": "GloriaIN - 'DIPMOD 10' editorial",
  "images/fashion9.jpg": "Stages of grief - fashion project",
  "images/fashion10.jpg": "Antea Zimaj - Herida",
  "images/fashion11.jpg": "BIPA Fashion.hr - Vicko Racetin design",
  "images/fashion12.jpg": "GloriaIN - 'Velvet noir' editorial ",

  "images/portraits1.jpg": "Dora - Abyss Management",
  "images/portraits2.jpg": "Tanita - Faith Model Managment",
  "images/portraits3.jpg": "Rajna - Vere models",
  "images/portraits4.jpg": "Izabel Kovačić",
  "images/portraits5.jpg": "Goran - Vere models",
  "images/portraits6.jpg": "Nora - Vere models",
  "images/portraits7.jpg": "Jan - Vere models",
  "images/portraits8.jpg": "Matej - Vere models",
  "images/portraits9.jpg": "Dorotea - Vere models",
  "images/portraits10.jpg": "Vid - IM Models Agency",

  "images/work1.jpg": "Armani code personal project",
  "images/work2.jpg": "ZAKS x Jelena Rozga TVC ",
  "images/work3.jpg": "Eucerin - Hyaluron-filler 3x",
  "images/work4.jpg": "Stella Rade - Nema te - Eurovision 2026",
  "images/work5.jpg": "Rossi - brande image",
  "images/work6.jpg": "Eucerin - Hydro-protect",
  "images/work7.jpg": "BIPA - advertorijal",
  "images/work8.jpg": "Veil of truth and light - Art project",
  "images/work9.jpg": "ZFA Folklore ensemble",
  "images/work10.jpg": "Prizori promatrača - Art project",
};

const categories = {
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg', 'images/fashion4.jpg', 'images/fashion5.jpg', 'images/fashion6.jpg', 'images/fashion7.jpg', 'images/fashion8.jpg', 'images/fashion9.jpg', 'images/fashion10.jpg', 'images/fashion11.jpg', 'images/fashion12.jpg'],
  portraits: ['images/portraits1.jpg', 'images/portraits2.jpg', 'images/portraits3.jpg', 'images/portraits4.jpg', 'images/portraits5.jpg', 'images/portraits6.jpg', 'images/portraits7.jpg', 'images/portraits8.jpg', 'images/portraits9.jpg', 'images/portraits10.jpg'],
  work: ['images/work1.jpg', 'images/work2.jpg', 'images/work3.jpg', 'images/work4.jpg', 'images/work5.jpg', 'images/work6.jpg', 'images/work7.jpg', 'images/work8.jpg', 'images/work9.jpg', 'images/work10.jpg']
};

let currentCategory = 'fashion';
let currentIndex = 0;

const desktopNavItems = document.querySelectorAll('.sidebar nav.menu ul li');
const mobileNavItems = document.querySelectorAll('.mobile-nav .mobile-link');

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    mobileNav.classList.toggle("open");
  });
}

function updateImage() {
  // IF BIO IS ACTIVE: Hide all image assets and arrows, display the text container block
  if (currentCategory === 'bio') {
    if (galleryImage) galleryImage.style.display = 'none';
    if (galleryTitle) galleryTitle.style.display = 'none';
    if (arrowLeft) arrowLeft.style.display = 'none';
    if (arrowRight) arrowRight.style.display = 'none';
    if (bioContainer) bioContainer.style.display = 'flex';
    return;
  }

  // STANDARD GALLERIES: Restore images, matching title logs, and navigation arrows
  if (galleryImage) galleryImage.style.display = 'block';
  if (galleryTitle) galleryTitle.style.display = 'block';
  if (arrowLeft) arrowLeft.style.display = 'flex';
  if (arrowRight) arrowRight.style.display = 'flex';
  if (bioContainer) bioContainer.style.display = 'none';

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

function setActiveCategory(category) {
  desktopNavItems.forEach(item => item.classList.remove('active'));
  const activeDesktopItem = Array.from(desktopNavItems).find(
    item => item.getAttribute('data-category') === category
  );
  if (activeDesktopItem) activeDesktopItem.classList.add('active');

  mobileNavItems.forEach(item => item.classList.remove('active'));
  const activeMobileItem = Array.from(mobileNavItems).find(
    item => item.getAttribute('data-category') === category
  );
  if (activeMobileItem) activeMobileItem.classList.add('active');
}

document.querySelector('.arrow.left').addEventListener('click', () => {
  if (currentCategory === 'bio') return;
  const images = categories[currentCategory];
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  if (currentCategory === 'bio') return;
  const images = categories[currentCategory];
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

desktopNavItems.forEach(item => {
  item.addEventListener('click', () => {
    currentCategory = item.getAttribute('data-category');
    currentIndex = 0;
    setActiveCategory(currentCategory);
    updateImage();
  });
});

mobileNavItems.forEach(item => {
  item.addEventListener('click', () => {
    currentCategory = item.getAttribute('data-category');
    currentIndex = 0;
    setActiveCategory(currentCategory);
    updateImage();

    if (menuToggle && mobileNav) {
      menuToggle.classList.remove("open");
      mobileNav.classList.remove("open");
    }
  });
});

setActiveCategory(currentCategory);
updateImage();

// ==========================================================================
// ADVANCED MULTI-FILTER WORKAROUND FOR STATIC PRINTED QR CODES
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const welcomeOverlay = document.getElementById('welcomeOverlay');
  
  if (welcomeOverlay) {
    const isMobilePortrait = window.innerWidth <= 768 && window.matchMedia("(orientation: portrait)").matches;
    
    const referrer = document.referrer.toLowerCase();
    const isFromBlockedSource = 
      referrer.includes('instagram.com') || 
      referrer.includes('google.') || 
      referrer.includes('facebook.com') ||
      referrer.includes('t.co') || 
      referrer.includes('pinterest.com');

    const navigationEntries = performance.getEntriesByType("navigation");
    let isInstantLoad = false;
    
    if (navigationEntries.length > 0) {
      const navTiming = navigationEntries[0];
      if (navTiming.unloadEventEnd - navTiming.unloadEventStart <= 10) {
        isInstantLoad = true;
      }
    }

    const hasSeenWelcome = sessionStorage.getItem('hasSeenPortfolioWelcome');

    if (isMobilePortrait && !isFromBlockedSource && !hasSeenWelcome) {
      welcomeOverlay.classList.add('active');
    }

    welcomeOverlay.addEventListener('click', () => {
      welcomeOverlay.style.opacity = '0';
      sessionStorage.setItem('hasSeenPortfolioWelcome', 'true');

      setTimeout(() => {
        welcomeOverlay.classList.remove('active');
        welcomeOverlay.style.opacity = ''; 
      }, 400); 
    });
  }
});

function checkOrientation() {
  const overlay = document.querySelector('.rotate-overlay');
  const container = document.querySelector('.container');
  
  if (!overlay) return; 

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
  
  if (isMobile && isLandscape) {
    if (document.querySelector('.sidebar')) document.querySelector('.sidebar').style.display = 'flex';
    if (document.querySelector('.gallery')) document.querySelector('.gallery').style.width = '80%';
  }
}

window.addEventListener('resize', handleOrientationChange);
window.addEventListener('orientationchange', handleOrientationChange);
