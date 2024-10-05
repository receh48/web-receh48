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


// form pemesanan
const scriptURL = 'https://script.google.com/macros/s/AKfycbwaiCj5m3_F43yto8ClqK14YtGpXJWImR6yfgWzNQTZkkGkck4HOrFeyJBwUt0p8vyMUw/exec';
const form = document.forms['form-vc-receh48'];
const loading = document.getElementById('loading');
const output = document.getElementById('output');

// Tambahkan variabel untuk mengontrol status form
let formIsOpen = false;  // Set ke 'false' untuk menutup form

form.addEventListener('submit', e => {
  e.preventDefault();

  form.reset();

  // Periksa apakah form sedang terbuka
  if (!formIsOpen) {
    Swal.fire({
      icon: 'error',
      title: 'Tutup',
      text: 'Mohon Maaf Sudah Full Slot',
      confirmButtonText: 'OK'
    });
    return;
  }
});

// eye password
let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-close.png";
  }
}


// Animasi Masuk Section Home/Beranda
ScrollReveal().reveal('.home-content h1', { delay: 400, origin: 'top', distance: '100px' });
ScrollReveal().reveal('.home-content h3', { delay: 600, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal('.home-content p', { delay: 900, origin: 'left', distance: '100px' });
ScrollReveal().reveal('.social-icons p', { delay: 900, origin: 'right', distance: '100px' });
ScrollReveal().reveal('.home-img', { delay: 700, origin: 'left', distance: '200px' });


// Field required
const inputs = [
  document.getElementById('nama'),
  document.getElementById('username'),
  document.getElementById('gmail'),
  document.getElementById('password'),
  document.getElementById('tipe'),
  document.getElementById('sesi'),
  document.getElementById('cadangan')
];

function setCustomValidation(input, fieldName) {
  input.addEventListener('input', function() {
      input.setCustomValidity('');
      input.checkValidity();
  });

  input.addEventListener('invalid', function() {
      if (input.value === '') {
          input.setCustomValidity('Isi dulu ' + fieldName + ' Lu Bjirrr');
      } else {
          input.setCustomValidity('Format ' + fieldName + ' Salah Kocak');
      }
  });
}

inputs.forEach(input => {
  const fieldName = input.getAttribute('name') || input.id; 
  setCustomValidation(input, fieldName);
});

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
