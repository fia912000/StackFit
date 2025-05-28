// Handle dropdown category toggles with dynamic height animation
function toggleCategory(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    const isOpen = content.classList.contains('open');
  
    if (isOpen) {
      // Collapse
      content.style.height = `${content.scrollHeight}px`; // Set to current height
      requestAnimationFrame(() => {
        content.style.height = '0';
      });
      content.classList.remove('open');
    } else {
      // Expand
      content.style.height = `${content.scrollHeight}px`;
      content.classList.add('open');
      content.addEventListener('transitionend', function handler() {
        content.style.height = 'auto'; // Clear inline height
        content.removeEventListener('transitionend', handler);
      });
    }
  
    icon.classList.toggle('rotate');
  }
  
  // Carousel functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const track = document.querySelector('.carousel-track');
  
  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }
  
  function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    updateSlidePosition();
  }
  
  function goToSlide(index) {
    currentSlide = index;
    updateSlidePosition();
  }
  
  // Auto-slide every 5 seconds
  setInterval(() => {
    moveSlide(1);
  }, 7000);
  
  // Show/hide Back to Top button
  window.onscroll = function () {
    document.getElementById("backToTop").style.display =
      window.scrollY > 300 ? "block" : "none";
  };
  
  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
