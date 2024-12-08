function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const body = document.querySelector('body');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  
  if (menuToggle.classList.contains('active')) {
      menuToggle.innerHTML = '&times;'; // Cross icon
  } else {
      menuToggle.innerHTML = '&#9776;'; // Burger icon
  }
}

let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      const menuToggle = document.querySelector('.menu-toggle');
      const body = document.querySelector('body');
      
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
      body.classList.remove('blur-bg');
      menuToggle.innerHTML = '&#9776;'; 
  });
});


// Animasi Masuk Section Home/Beranda
ScrollReveal().reveal('.home-content h1', { delay: 400, origin: 'top', distance: '100px' });
ScrollReveal().reveal('.home-content h3', { delay: 600, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.home-content p', { delay: 900, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.social-icons p', { delay: 900, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.home-img', { delay: 700, origin: 'left', distance: '200px' });


const words = ["Gacorrr", "Trusted", "Aman 100%", "Murah",];
    let wordIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;
    
    const textElement = document.querySelector('.text');
    
    function type() {
        if (charIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        }
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, typingSpeed);
    });

    document.addEventListener('DOMContentLoaded', function () {
      const dropdownToggle = document.querySelector('.dropdown-toggle');
      const dropdownMenu = document.querySelector('.dropdown-menu');
    
      dropdownToggle.addEventListener('click', function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
      });
    
      // Klik di luar dropdown untuk menutupnya
      document.addEventListener('click', function (e) {
        if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
          dropdownMenu.classList.remove('show');
        }
      });
    });
    


    document.addEventListener('DOMContentLoaded', function () {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.querySelector('.lightbox-img');
      const closeBtn = document.querySelector('.close');
      const images = document.querySelectorAll('.swiper-slide img');
    
      // Membuka lightbox saat gambar di klik
      images.forEach(img => {
        img.addEventListener('click', function () {
          const largeImgSrc = this.getAttribute('data-large');
          lightboxImg.src = largeImgSrc;
          lightbox.classList.add('active');
        });
      });
    
      // Menutup lightbox dengan tombol close
      closeBtn.addEventListener('click', function () {
        lightbox.classList.remove('active');
      });
    
      // Menutup lightbox jika pengguna mengklik di luar gambar
      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
        }
      });
    });
    

    const swiper = new Swiper('.swiper-container', {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
