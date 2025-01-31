
VANTA.FOG({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 500.00,
    minWidth: 270.00,
    zoom: 10.00,
    speed: 2,
    highlightColor: 0xb19410,
})


const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { 
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 1,
    behavior: 'smooth' 
  });
});

