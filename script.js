const categories = {
  fashion: ['images/fashion1.jpg', 'images/fashion2.jpg', 'images/fashion3.jpg', 'images/fashion4.jpg', 'images/fashion5.jpg', 'images/fashion6.jpg', 'images/fashion7.jpg', 'images/fashion8.jpg', 'images/fashion9.jpg', 'images/fashion10.jpg'],
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

  function checkOrientation() {
    const rotateMessage = document.getElementById("rotate-message");
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (isMobile && isPortrait) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  }

  window.addEventListener("load", checkOrientation);
  window.addEventListener("orientationchange", () => {
    setTimeout(checkOrientation, 300);
  });



